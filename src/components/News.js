import React, { Component } from 'react'
import Newsitem from './Newsitem'
import Spinner from './Spinner.js'
// import PropTypes from 'prop-types'
import propTypes from 'prop-types'
// import spinner from './Spinner'
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
    static defaultProps = {
        country: 'in',
        pageSize: 8,
        category: 'science',
    }
    static propTypes = {
        country: propTypes.string,
        pageSize: propTypes.number,
        category: propTypes.string,

    }

    constructor() {
        super();
        this.state = {
            articles: [],
            loading: false,
            page: 1,
            totalResults: 0
        }
    }

    async updatenews() {
        this.props.setProgress(20);
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=6941a9cd8af044e7a91c4f80e79bfeb8&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        this.setState({ loading: true });
        this.props.setProgress(50);
        let data = await fetch(url);
        let parseddata = await data.json()
        this.props.setProgress(70);
        this.setState({
            articles: parseddata.articles,
            totalarticles: parseddata.totalResults,
            loading: false
        });
        this.props.setProgress(100)
    }

    async componentDidMount() {
        this.updatenews();
    }

    fetchMoreData= async()=>{
        this.setState({page: this.state.page+1})
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=6941a9cd8af044e7a91c4f80e79bfeb8&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        this.setState({ loading: true });
        let data = await fetch(url);
        let parseddata = await data.json()
        this.setState({
            articles: this.state.articles.concat(parseddata.articles),
            totalarticles: parseddata.totalResults,
            loading: false
        });
    }

    render() {
        return (
            <div className='container my-5'>
                <h2>News Hub - Top headlines</h2>
                {/* {this.state.loading && <Spinner />} */}
                <InfiniteScroll
                    dataLength={this.state.articles.length}
                    next={this.fetchMoreData}
                    hasMore={this.state.articles.length!==this.state.totalResults}
                    loader={<Spinner/>}>
                    <div className="row">
                        {this.state.articles.map((element, index) => {
                            return <div className="col-md-3" key={`${element.url}-${index}`}>
                                <Newsitem title={element.title ? element.title.slice(0, 40) : ""} description={element.description ? element.description.slice(0, 75) : ""} imageurl={element.urlToImage} newsurl={element.url} author={element.author ? element.author : "Unknown"} date={element.publishedAt} source={element.source.name} />
                            </div>
                        })}
                    </div>
                </InfiniteScroll>
            </div>
        )
    }
}


export default News
