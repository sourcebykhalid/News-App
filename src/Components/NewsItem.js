import React from "react";
// export class NewsItem extends Component {
//   render() {
const NewsItem = (props) => {
  let { title, description, imageUrl, newsUrl, author, date, source } = props;
  return (
    <div className="my-3">
      <div className="card">
        <span className="badge rounded-pill bg-danger"> {source} </span>
        <img
          src={
            !imageUrl
              ? "https://media.wired.com/photos/64e7e1c36e0f4ed85e3a1226/191:100/w_1280,c_limit/Peter-McCormack-Bitcoin-F.C.-Business-f_jrmfy4e20.jpg"
              : imageUrl
          }
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{title}...</h5>
          <p className="card-text">
            {description}...
            <span className="badge bg-secondary">New</span>
          </p>
          <p className="card-text">
            <small className="text-body-secondary">
              By: {!author ? "Unknown" : author} on{" "}
              {new Date(date).toGMTString()}
            </small>
          </p>
          <a
            rel="noreferrer"
            href={newsUrl}
            className="btn btn-sm btn-dark"
            target="blank"
          >
            Read more
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
