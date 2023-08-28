import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  render() {
    return (
      <div className="container my-3">
        <h1>News CaFe - insights</h1>
        <div className="row">
          <div className="col-md-4">
            <NewsItem
              title="myTitle"
              description="mydesc"
              imageUrl="https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg"
              newsUrl="http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket"
            />
          </div>
          <div className="col-md-4">
            <NewsItem
              title="myTitle"
              description="mydesc"
              imageUrl="https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg"
            />
          </div>
          <div className="col-md-4">
            <NewsItem title="myTitle" description="mydesc" />
          </div>
        </div>
      </div>
    );
  }
}

export default News;
