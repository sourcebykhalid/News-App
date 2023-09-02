import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner.js";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";
export class News extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 3,
    category: "general",
  };
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };
  strCap = (str) => {
    return `${str[0].toUpperCase()}${str.slice(1)}`;
  };
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults: 0,
    };
    document.title = ` ${this.strCap(this.props.category)} - News CaFe`;
  }
  async updateNews() {
    const url = ` https://newsapi.org/v2/top-headlines?&country=${this.props.country}&category=${this.props.category}&apiKey=daf450dde97a4ed39f1ddd833ff44101&page=${this.state.page}&pagesize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parseData = await data.json();
    this.setState({
      articles: parseData.articles,
      totalResults: parseData.totalResults,
      loading: false,
    });
  }
  async componentDidMount() {
    this.updateNews();
  }
  fetchMoreData = async () => {
    this.setState({ page: this.state.page + 1 });
    const url = ` https://newsapi.org/v2/top-headlines?&country=${this.props.country}&category=${this.props.category}&apiKey=daf450dde97a4ed39f1ddd833ff44101&page=${this.state.page}&pagesize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parseData = await data.json();
    this.setState({
      articles: this.state.articles.concat(parseData.articles),
      totalResults: parseData.totalResults,
      loading: false,
    });
  };
  render() {
    return (
      <>
        <h1
          className="text-center"
          style={{
            fontSize: "1.9rem",
            fontWeight: "900",
            margin: "1.4rem",
            color: "black",
            backgroundColor: "#738581",
            padding: "12px",
            border: "1.5px solid green",
            borderRadius: "6px",
          }}
        >
          News CaFé - {this.strCap(this.props.category)} Headlines
        </h1>
        {/* {this.state.loading && <Spinner />}*/}

        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Spinner />}
        >
          <div className="container">
            <div className="row">
              {this.state.articles.map((element) => {
                return (
                  <div className="col-md-4" key={element.url}>
                    <NewsItem
                      title={element.title ? element.title : ""}
                      description={
                        element.description ? element.description : ""
                      }
                      imageUrl={element.urlToImage}
                      newsUrl={element.url}
                      author={element.author}
                      date={element.publishedAt}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </InfiniteScroll>
      </>
    );
  }
}

export default News;
