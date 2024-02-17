import React, { Component } from 'react'
import Newsitem from './Newsitem'
import Spinner from './Spinner '

 
export class News extends Component {
    constructor() {
        super();
        this.state = {
            articles: [],
            loading: false,
            page: 1,
        }
    }

    async componentDidMount() {
        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=6941a9cd8af044e7a91c4f80e79bfeb8&page=1&pageSize=${this.props.pageSize}`;
        try {
            let data = await fetch(url);
            let parseddata = await data.json();
            this.setState({ articles: parseddata.articles, totalarticles: parseddata.totalResults, loading: false });
        } catch (error) {
            console.error('Error fetching data:', error);
            this.setState({ loading: false });
        }
    }

    handlepreviousclick = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=6941a9cd8af044e7a91c4f80e79bfeb8&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
        let data = await fetch(url);
        let parseddata = await data.json()
        this.setState({
            page: this.state.page - 1,
            articles: parseddata.articles
        })
    }
    handlenextclick = async () => {
        if (!(this.state.page + 1 > Math.ceil(this.state.totalarticles / this.props.pageSize))) {
            let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=6941a9cd8af044e7a91c4f80e79bfeb8&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
            let data = await fetch(url);
            let parseddata = await data.json()
            this.setState({
                page: this.state.page + 1,
                articles: parseddata.articles
            })
        }
    }

    render() {
        return (
            <div className='container my-5'>
                <h2>News Hub - Top headlines</h2>
                <Spinner/>
                <div className="row">
                    {this.state.articles.map((element) => {
                        return <div className="col-md-4" key={element.url}>
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
