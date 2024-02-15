import React, { Component } from 'react'
import Newsitem from './Newsitem'

export class News extends Component {
    constructor() {
        super();
        this.state = {
            articles: [],
            loading: false
        }
    }

    async componentDidMount() {
        let url = "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=6941a9cd8af044e7a91c4f80e79bfeb8";
        try {
            let response = await fetch(url);
            let data = await response.json();
            this.setState({ articles: data.articles, loading: false });
        } catch (error) {
            console.error('Error fetching data:', error);
            this.setState({ loading: false });
        }
    }
    
    render() {
        return (
            <div className='container my-5'>
                <h2>News Hub - Top headlines</h2>
                <div className="row">
                    {this.state.articles.map((element) => {
                        return <div className="col-md-4" key={element.url}>
                            <Newsitem  title={element.title?element.title.slice(0,40):""} description={element.description?element.description.slice(0,75):""} imageurl={element.urlToImage} newsurl={element.url} />
                        </div>
                    })}
                </div>
            </div>
        )
    }
}

export default News
