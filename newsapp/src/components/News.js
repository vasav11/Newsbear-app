import React, { useEffect, useState } from "react";

import NewsItems from "./NewsItems";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

//export default class News extends Component {
const News = (props) => {
  const [articles, setarticles] = useState([]);
  const [loading, setloading] = useState(true);
  const [page, setpage] = useState(1);
  const [totalResults, settotalResults] = useState(0);
  //static defaultProps={
  // country:'in',
  // pageSize:8,
  // category:'general',
  // }
  // static propTypes={
  // country:PropTypes.string,
  //// pageSize:PropTypes.number,
  //category: PropTypes.string,
  // }
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  // constructor(props){
  // super(props);

  //document.title= `${capitalizeFirstLetter(props.category)}-NewsBear`;
  //}
  //async updateNews(){
  const updateNews = async () => {
    props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    // this.setState({loading: true});
    setloading(true);
    let data = await fetch(url);
    props.setProgress(30);
    let parsedData = await data.json();
    props.setProgress(70);
    setarticles(parsedData.articles);
    settotalResults(parsedData.totalResults);
    setloading(false);
    //console.log(parsedData);
    //this.setState({articles: parsedData.articles,
    // totalArticles:parsedData.totalResults,
    //loading:false,
    //})
    props.setProgress(100);
  };
  useEffect(() => {
    document.title = `${capitalizeFirstLetter(props.category)}-NewsBear`;
    updateNews();
    //eslint-disable-next-line
  }, []);

  //async componentDidMount(){
  // let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=39671243c8af45769650e234d00118f3&page=1&pageSize=${props.pageSize}`;
  // this.setState({loading: true});
  //let data = await fetch(url);
  // let parsedData = await data.json()
  // console.log(parsedData);
  // this.setState({articles: parsedData.articles,
  // totalArticles:parsedData.totalResults,
  // loading:false})
  // this.updateNews();
  //}

  const handlePreviousClick = async () => {
    /// console.log("Previous");
    //let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=39671243c8af45769650e234d00118f3&page=${this.state.page - 1}&pageSize=${props.pageSize}`;
    //this.setState({loading: true});
    // let data = await fetch(url);
    // let parsedData = await data.json()
    //console.log(parsedData);
    //this.setState({
    // page: this.state.page-1,
    //articles:parsedData.articles,
    ////loading:false

    //})
    //this.setState.apply({page:this.state.page-1});
    setpage(page - 1);
    updateNews();
  };
  const handleNextClick = async () => {
    console.log("Next");
    // if(!(this.state.page + 1 > Math.ceil(this.state.totalResults/props.pageSize))){

    //let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=39671243c8af45769650e234d00118f3&page=1${this.state.page+1}&pageSize=${props.pageSize}`;

    // this.setState({loading: true});
    //let data = await fetch(url);
    //let parsedData = await data.json()
    //console.log(parsedData);
    //this.setState({
    // page: this.state.page+1,
    // articles:parsedData.articles,
    // loading : false
    //})
    //this.setState.apply({page:this.state.page+1});
    setpage(page + 1);
    updateNews();
  };

  const fetchMoreData = async () => {
    //setpage(page + 1);
    // this.setState({page: this.state.page+1})
    const url = `https://newsapi.org/v2/top-headlines?country=${
      props.country
    }&category=${props.category}&apiKey=${props.apiKey}&page=${
      page + 1
    }&pageSize=${props.pageSize}`;
    //  this.setState({loading: true});
    setpage(page + 1);
    let data = await fetch(url);
    let parsedData = await data.json();
    //console.log(parsedData);
    setarticles(articles.concat(parsedData.articles));
    settotalResults(parsedData.totalResults);
    //this.setState({
    //articles: articles.concat(parsedData.articles),
    //totalArticles:parsedData.totalResults,
    //loading:false})
  };
  //render() {
  return (
    <>
      <h1
        className="text-center"
        style={{ margin: "35px 0px", marginTop: "90px" }}
      >
        NewsBear - Top {capitalizeFirstLetter(props.category)} Headllines
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
            {articles.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <NewsItems
                    title={element.title ? element.title.slice(0, 45) : ""}
                    description={
                      element.description
                        ? element.description.slice(0, 88)
                        : ""
                    }
                    imageUrl={element.urlToImage}
                    newsUrl={element.url}
                    author={element.author}
                    date={element.publishedAt}
                    source={element.source.name}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </InfiniteScroll>
    </>
  );
  // }
};

News.defaultProps = {
  country: "in",
  pageSize: 8,
  category: "general",
};
News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};

export default News;
