import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner.js";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";
import LoadingBar from "react-top-loading-bar";

const News = ({ country, category, pageSize }) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  const [progress, setProgress] = useState(0);

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const updateNews = async () => {
    setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=daf450dde97a4ed39f1ddd833ff44101&page=${page}&pageSize=${pageSize}`;
    setLoading(true);
    try {
      let data = await fetch(url);
      setProgress(30);
      let parsedData = await data.json();
      setProgress(70);
      setArticles(parsedData.articles);
      setTotalResults(parsedData.totalResults);
      setLoading(false);
      setProgress(100);
    } catch (error) {
      console.error("Error fetching data: ", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    document.title = `${capitalizeFirstLetter(category)} - NewsCafe`;
    updateNews();
    // eslint-disable-next-line
  }, []);

  const fetchMoreData = async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=daf450dde97a4ed39f1ddd833ff44101&page=${
      page + 1
    }&pageSize=${pageSize}`;
    setPage(page + 1);
    try {
      let data = await fetch(url);
      let parsedData = await data.json();
      setArticles(articles.concat(parsedData.articles));
      setTotalResults(parsedData.totalResults);
    } catch (error) {
      console.error("Error fetching more data: ", error);
    }
  };

  return (
    <>
      <LoadingBar
        color="#44bd2b"
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
      <h1 className=" bg-black py-3 text-center text-lime-400 w-full sm:w-2/3 mx-auto rounded shadow-md shadow-lime-400 text-xl sm:text-3xl font-bold mt-40 sm:mt-24 ">
        News Cafe - Top {capitalizeFirstLetter(category)} Headlines
      </h1>
      {loading && <Spinner />}

      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={<Spinner />}
      >
        <div className="container">
          <div className="row">
            {articles.map((element) => (
              <div className="col-md-4" key={element.url}>
                <NewsItem
                  title={element.title ? element.title : ""}
                  description={element.description ? element.description : ""}
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                  author={element.author}
                  date={element.publishedAt}
                  source={element.source.name}
                />
              </div>
            ))}
          </div>
        </div>
      </InfiniteScroll>
    </>
  );
};

News.defaultProps = {
  country: "in",
  pageSize: 6,
  category: "general",
};

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};

export default News;
