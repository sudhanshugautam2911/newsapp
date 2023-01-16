import React, { Component } from 'react'
import NewsList from './NewsList'
import Spinner from './Spinner'
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";

export default class News extends Component {
  // we are using state = state is use when we want to change something again and again and also wihtout page reloading
  static defaultProps = {
    country: 'in',
    pageSize: 5,
    category: 'general',
    mode: 'light'
  }
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
    mode: PropTypes.string
  }
  capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  constructor(props) {
    super(props);
    // console.log("hello I am a constructor");
    this.state = {
      articles: [],
      loading: true,
      page: 1,
      totalResults: 0
    }
    document.title = `${this.capitalizeFirstLetter(this.props.category)} In-Depth News`;
  }
  async updateNews() {
    this.props.setProgress(10);
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    this.props.setProgress(30);
    let parsedData = await data.json();
    this.props.setProgress(70);
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    })
    this.props.setProgress(100);

  }
  // it always run after render
  async componentDidMount() {
    this.updateNews();
  }

  // handleOnNext = async () => {
  //   await this.setState({ page: this.state.page + 1 })
  //   this.updateNews();
  // }
  // handleOnPrevious = async () => {
  //   await this.setState({ page: this.state.page - 1 })
  //   this.updateNews();
  // }

  fetchMoreData = async () => {
  
      this.setState({
        page: this.state.page + 1
      })

      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
      let data = await fetch(url);
      let parsedData = await data.json();
      this.setState({
        articles: this.state.articles.concat(parsedData.articles),
        totalResults: parsedData.totalResults,
      })
    
  };

  render() {
    return (
      <>
        <h2 className={`text-center`} style={{ margin: '35px 0px', color: this.props.mode === 'light' ? 'black' : '#e8e6e3' }}>In-Depth News - Top {this.capitalizeFirstLetter(this.props.category)} Headlines</h2>


        {/* it means jab jab loading true hai spinner show kare */}
        {this.state.loading && <Spinner />}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Spinner />}
        >
          <div className="container my-3" style={{padding: "0px 50px"}}>
            <div className='row'>
              {this.state.articles.map((element,index) => {
                return <div className='' key={index}>
                  <NewsList mode={this.props.mode} title={element.title} description={element.description} newsurl={element.url} imageUrl={element.urlToImage} source={element.source.name} date={element.publishedAt} author={element.author} />
                </div>
              })}
            </div>
            {/* <h5 style={{ color: this.props.mode === 'light' ? 'black' : '#e8e6e3' }} >Page {this.state.page}/{Math.ceil(this.state.totalResults / this.props.pageSize)}</h5> */}
          

          </div>

        </InfiniteScroll>

        {/* Prev. and next Buttons */}
        {/* <div className="container d-flex justify-content-between" style={{ margin: '35px 0px' }}>
          <button disabled={this.state.page <= 1} type="button" onClick={this.handleOnPrevious} className={`btn btn-${this.props.mode === 'light' ? 'dark' : 'light'}`}>&larr; Previous</button>

          <h5 style={{ color: this.props.mode === 'light' ? 'black' : '#e8e6e3' }} >Page {this.state.page}/{Math.ceil(this.state.totalResults / this.props.pageSize)}</h5>

          <button disabled={this.state.page >= Math.ceil(this.state.totalResults / this.props.pageSize)} type="button" onClick={this.handleOnNext} className={`btn btn-${this.props.mode === 'light' ? 'dark' : 'light'}`}>Next &rarr;</button>
        </div> */}

      </>
    )
  }
}
