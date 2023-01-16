import React, { useState, useEffect } from 'react'
import NewsList from './NewsList'
import Spinner from './Spinner'
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
  // we are using state = state is use when we want to change something again and again and also wihtout page reloading

  const [articles, setarticles] = useState([]);
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)
  const [totalResults, setTotalResults] = useState(0)
  
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }


  const updateNews  = async () => {
    props.myProgress(10);
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true);
    let data = await fetch(url);
    props.myProgress(30);
    let parsedData = await data.json();
    props.myProgress(70);
    setarticles(parsedData.articles)
    setTotalResults(parsedData.totalResults)
    setLoading(false)
    props.myProgress(100);

  }

  useEffect(() => {
  document.title = `${capitalizeFirstLetter(props.category)} - Digital Akhbaar`;
    updateNews();

  }, [])
  
  
  // it always run after render
  // async componentDidMount() {
  //   this.updateNews();
  // }

  // const handleOnNext = async () => {
  //   await setPage( page + 1 )
  //   updateNews();
  // }
  // const handleOnPrevious = async () => {
  //   await setPage( page - 1 )
  //   updateNews();
  // }

  const fetchMoreData = async () => {
      let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page + 1}&pageSize=${props.pageSize}`;
      setPage(page + 1)
      let data = await fetch(url);
      let parsedData = await data.json();
      setarticles(articles.concat(parsedData.articles))
      setTotalResults(parsedData.totalResults)
     
    
  };

    return (
      <>
        <h2 className={`text-center`} style={{ margin: '35px 0px', marginTop: '90px', color: props.mode === 'light' ? 'black' : '#e8e6e3' }}>Digital Akhbaar - Top {capitalizeFirstLetter(props.category)} Headlines</h2>


        {/* it means jab jab loading true hai spinner show kare */}
        {loading && <Spinner />}
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={<Spinner />}
        >
          <div className="container my-3" style={{padding: "0px 50px"}}>
            <div className='row'>
              {articles.map((element,index) => {
                return <div className='' key={index}>
                  <NewsList mode={props.mode} title={element.title} description={element.description} newsurl={element.url} imageUrl={element.urlToImage} source={element.source.name} date={element.publishedAt} author={element.author} />
                </div>
              })}
            </div>
          

          </div>

        </InfiniteScroll>

        {/* Prev. and next Buttons */}
        {/* <div className="container d-flex justify-content-between" style={{ margin: '35px 0px' }}>
          <button disabled={page <= 1} type="button" onClick={this.handleOnPrevious} className={`btn btn-${props.mode === 'light' ? 'dark' : 'light'}`}>&larr; Previous</button>

          <h5 style={{ color: props.mode === 'light' ? 'black' : '#e8e6e3' }} >Page {page}/{Math.ceil(totalResults / props.pageSize)}</h5>

          <button disabled={page >= Math.ceil(totalResults / props.pageSize)} type="button" onClick={this.handleOnNext} className={`btn btn-${props.mode === 'light' ? 'dark' : 'light'}`}>Next &rarr;</button>
        </div> */}

      </>
    )
}
export default News

News.defaultProps = {
  country: 'in',
  pageSize: 5,
  category: 'general',
  mode: 'light'
}
News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
  mode: PropTypes.string
}