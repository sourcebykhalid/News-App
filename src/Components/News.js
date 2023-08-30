import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner.js";
import PropTypes from "prop-types";

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

  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
  }
  async componentDidMount() {
    let url = ` https://newsapi.org/v2/top-headlines?&country=${this.props.country}&category=${this.props.category}&apiKey=66346d8eb54a4edebf2cd25cb71f7639&page=1&pagesize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parseData = await data.json();
    this.setState({
      articles: parseData.articles,
      totalResults: parseData.totalResults,
      loading: false,
    });
  }
  handlePrevClick = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${
      this.props.category
    }&apiKey=66346d8eb54a4edebf2cd25cb71f7639&page=${
      this.state.page - 1
    }&pagesize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parseData = await data.json();

    this.setState({
      page: this.state.page - 1,
      articles: parseData.articles,
      loading: false,
    });
  };
  handleNextClick = async () => {
    if (
      !this.state.page + 1 >
      Math.ceil(this.state.totalResults / this.props.pageSize)
    ) {
    }
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${
      this.props.category
    }&apiKey=66346d8eb54a4edebf2cd25cb71f7639&page=${
      this.state.page + 1
    }&pagesize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parseData = await data.json();
    this.setState({
      page: this.state.page + 1,
      articles: parseData.articles,
      loading: false,
    });
  };
  render() {
    return (
      <div className="container my-3">
        <h1
          className="text-center"
          style={{
            fontSize: "1.9rem",
            fontWeight: "900",
            margin: "1.4rem",
            color: "black",
            backgroundColor: "gray",
            padding: "12px",
            border: "1.5px solid green",
            borderRadius: "6px",
          }}
        >
          News CaFé - Global Top Headlines
        </h1>
        {this.state.loading && <Spinner />}
        <div className="row">
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <NewsItem
                  title={element.title ? element.title : ""}
                  description={element.description ? element.description : ""}
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                />
              </div>
            );
          })}
        </div>
        <div className="container d-flex justify-content-between">
          <button
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-dark"
            onClick={this.handlePrevClick}
          >
            &larr; Previous
          </button>
          <button
            disabled={
              this.state.page + 1 > Math.ceil(this.state.totalResults / 5)
            }
            type="button"
            className="btn btn-dark"
            onClick={this.handleNextClick}
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}

export default News;
