import React, { Component } from 'react'
import Newsitem from './Newsitem'
import Spinner from './Spinner.js'
// import PropTypes from 'prop-types'
import propTypes from 'prop-types'


 
export class News extends Component {
    static defaultProps={
        country: 'in',
        pageSize: 8,
        category: 'science',
    }
    static propTypes={
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
        }
    }

    async componentDidMount() {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=6941a9cd8af044e7a91c4f80e79bfeb8&page=1&pageSize=${this.props.pageSize}`;
        try {
            this.setState({loading: true})
            let data = await fetch(url);
            let parseddata = await data.json();
            this.setState({ articles: parseddata.articles, totalarticles: parseddata.totalResults, loading: false });
        } catch (error) {
            console.error('Error fetching data:', error);
            this.setState({ loading: false });
        }
    }

    handlepreviousclick = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=6941a9cd8af044e7a91c4f80e79bfeb8&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
        this.setState({loading: true})
        let data = await fetch(url);
        let parseddata = await data.json()
        this.setState({
            page: this.state.page - 1,
            articles: parseddata.articles,
            loading: false
        })
    }
    handlenextclick = async () => {
        if (!(this.state.page + 1 > Math.ceil(this.state.totalarticles / this.props.pageSize))) {
            let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=6941a9cd8af044e7a91c4f80e79bfeb8&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
            this.setState({loading: true})
            let data = await fetch(url);
            let parseddata = await data.json()
            this.setState({
                page: this.state.page + 1,
                articles: parseddata.articles,
                loading: false
            })
        }
    }

    render() {
        return (
            <div className='container my-5'>
                <h2>News Hub - Top headlines</h2>
                {this.state.loading&&<Spinner/>}
                <div className="row">
                    {this.state.articles.map((element) => {
                        return <div className="col-md-3" key={element.url}>
                            <Newsitem title={element.title ? element.title.slice(0, 40) : ""} description={element.description ? element.description.slice(0, 75) : ""} imageurl={element.urlToImage} newsurl={element.url} />
                        </div>
                    })}
                </div>
                <div className="container d-flex justify-content-between">
                    <button type="button" disabled={this.state.page<=1} className="btn btn-dark" onClick={this.handlepreviousclick}>&larr; Previous</button>
                    <button type="button" disabled={this.state.page + 1 > Math.ceil(this.state.totalarticles / this.props.pageSize)} className="btn btn-dark" onClick={this.handlenextclick}>Next &rarr;</button>
                </div>
            </div>
        )
    }
}

export default News
