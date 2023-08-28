import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  articles = [
    {
      source: {
        id: "news24",
        name: "News24",
      },
      author: "Nompumelelo Magagula",
      title: "First lady of rugby is celebrated",
      description:
        "An award-winning sports broadcaster endured nasty comments to conquer the space dominated by white men, writes Nompumelelo Magagula.",
      url: "https://www.news24.com/citypress/trending/first-lady-of-rugby-is-celebrated-20230827",
      urlToImage:
        "https://cdn.24.co.za/files/Cms/General/d/8912/89f7c43cbc8544c19818be62c44aa131.jpeg",
      publishedAt: "2023-08-27T00:13:20",
      content:
        "NEWS\r\nWith her credibility and skill as a rugby presenter questioned and mocked, little did Motshidisi Mohono imagine that she would one day anchor one of the most popular sports in the country.\r\nNow… [+349 chars]",
    },
    {
      source: {
        id: "reuters",
        name: "Reuters",
      },
      author: "Jean Loobentz Cesar",
      title:
        "Haitians shelter in sports center as fresh attacks displace nearly 9,000",
      description:
        "Hundreds of people are crammed into small white tents in the courtyard of a sports center in the Haitian capital, Port-au-Prince, drying clothes on the access ramps and washing their children in small, plastic tubs.",
      url: "https://www.reuters.com/world/americas/haitians-shelter-sports-center-fresh-attacks-displace-nearly-9000-2023-08-26/",
      urlToImage:
        "https://www.reuters.com/resizer/usvMPQiOalTOFwctIw0Tuy4e8gI=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/WDJ7BNRJTFPPTOFLNDX4PMKKNE.jpg",
      publishedAt: "2023-08-26T19:19:05Z",
      content:
        "PORT-AU-PRINCE, Aug 26 (Reuters) - Hundreds of people are crammed into small white tents in the courtyard of a sports center in the Haitian capital, Port-au-Prince, drying clothes on the access ramps… [+2854 chars]",
    },
    {
      source: {
        id: "bleacher-report",
        name: "Bleacher Report",
      },
      author: null,
      title: "New Mookie Podcast ",
      description:
        "Fan easier, fan faster and fan better with Bleacher Report. Keep up with the latest storylines, expert analysis, highlights and scores for all your favorite sports.",
      url: "https://bleacherreport.com/videos/460314-mookie-x-kike-hernandez-vod",
      urlToImage: null,
      publishedAt: "2023-08-25T19:52:17.2341161Z",
      content:
        "Kiké Hernández joined Mookie to talk about his most embarrassing MLB story, being back in LA, LeBron James and more",
    },
    {
      source: {
        id: "wired",
        name: "Wired",
      },
      author: "Wired",
      title: "The ‘Budget Ryan Reynolds’ Taking Bitcoin FC to the Big Leagues",
      description:
        "Bitcoin podcaster Peter McCormack bought his local nonleague soccer team. Can he really turn Real Bedford FC into a global sports brand?",
      url: "https://www.wired.com/story/real-bedford-budget-ryan-reynolds-bitcoin-fc",
      urlToImage:
        "https://media.wired.com/photos/64e7e1c36e0f4ed85e3a1226/191:100/w_1280,c_limit/Peter-McCormack-Bitcoin-F.C.-Business-f_jrmfy4e20.jpg",
      publishedAt: "2023-08-25T11:00:00Z",
      content:
        "A melt, a muppet, a fraud, a bungler, a Judas, a taker of bribes. A good boy, a lad, a maestro, a beauty. To the crowd at Real Bedford Football Club on a sun-bleached evening in August, the referee w… [+2747 chars]",
    },
    {
      source: {
        id: "bleacher-report",
        name: "Bleacher Report",
      },
      author: null,
      title: " Rooks x Pulisic Interview ️",
      description:
        "Fan easier, fan faster and fan better with Bleacher Report. Keep up with the latest storylines, expert analysis, highlights and scores for all your favorite sports.",
      url: "https://bleacherreport.com/videos/457604-rooks-x-pulisic-vod",
      urlToImage: null,
      publishedAt: "2023-08-01T17:52:19.0557986Z",
      content:
        "Copyright © 2023 Bleacher Report, Inc. Turner Broadcasting System, Inc.\r\n All Rights Reserved.\r\n BleacherReport.com is part of Bleacher Report Turner Sports Network, part of the Turner Sports and Ent… [+200 chars]",
    },
    {
      source: {
        id: "usa-today",
        name: "USA Today",
      },
      author: null,
      title: "Daily Briefing",
      description:
        "The day's top stories, from sports to movies to politics to world events.",
      url: "https://profile.usatoday.com/newsletters/daily-briefing/",
      urlToImage:
        "https://profile.usatoday.com/newsletters/resources/usat/property/usatoday/newsletter-thumbs/8872UT-E-NLETTER02@2x.jpg",
      publishedAt: "2021-08-15T15:35:07+00:00",
      content:
        "The day's top stories, from sports to movies to politics to world events.",
    },
  ];
  constructor() {
    super();
    this.state = {
      articles: this.articles,
      loading: false,
    };
  }

  async componentDidMount() {
    let url =
      " https://newsapi.org/v2/top-headlines?country=in&apiKey=daf450dde97a4ed39f1ddd833ff44101";
    let data = await fetch(url);
    let parseData = await data.json();
    console.log(parseData);
    this.setState({ articles: parseData.articles });
  }
  render() {
    return (
      <div className="container my-3">
        <h1>News CaFe - insights</h1>
        <div className="row">
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <NewsItem
                  title={element.title.slice(0, 89)}
                  description={element.description}
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default News;
