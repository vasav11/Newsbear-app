import React from "react";

//export default class NewsItems extends Component {
const NewsItem = (props) => {
  //render() {
  let { title, description, imageUrl, newsUrl, author, date, source } = props;
  return (
    <div className="my-3">
      <div className="card">
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            position: "absolute",
            right: "0",
          }}
        >
          <span className=" badge rounded-pill bg-danger">{source} </span>
        </div>
        <img
          src={
            !imageUrl
              ? "https://www.livemint.com/lm-img/img/2023/04/16/600x338/Infosys_1681658006659_1681658006880_1681658006880.jpg"
              : imageUrl
          }
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{title}....</h5>

          <p className="card-text"> {description}</p>
          <p className="card-text">
            <small class="text-body-secondary">
              By {!author ? "Unknown" : author} on 3 mins ago on{" "}
              {new Date(date).toGMTString()}
            </small>
          </p>
          <a
            rel="noreferrer"
            href={newsUrl}
            target="blank"
            className="btn btn-sm btn-dark"
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
  //}
};
export default NewsItem;
