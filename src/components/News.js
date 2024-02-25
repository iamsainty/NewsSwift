import React, {useEffect, useState} from 'react'
import Newsitem from './Newsitem'
import Spinner from './Spinner.js'
import propTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

const News =(props)=> {
    const [articles, setArticles] = useState(null)
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1)
    const [totalResults, setTotalResults] = useState(0)


    const  updatenews =async ()=> {
        props.setProgress(20);
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page}&pageSize=${props.pageSize}`;
        setLoading(true)
        props.setProgress(50);
        let data = await fetch(url);
        let parseddata = await data.json()
        props.setProgress(70);
        setArticles(parseddata.articles)
        setTotalResults(parseddata.totalResults)
        setLoading(false)
        props.setProgress(100)
    }


    useEffect(()=>{
        updatenews();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const fetchMoreData = async () => {
        
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page+1}&pageSize=${props.pageSize}`;
        setPage(page+1)
        setLoading(true)
        let data = await fetch(url);
        let parseddata = await data.json();
    
        if (parseddata.articles) {
            setArticles(articles.concat(parseddata.articles))
            setTotalResults(parseddata.totalResults)
            setLoading(false)
        } else {
            console.error('Error: Unable to fetch articles from the API');
            setLoading(false)
        }
    };
    
    // const { articles, totalResults } = useState([]);
    
        if (!articles) {
            return <div>No articles to display</div>;
        }
        let mode=props.mode;
    
        return (
            <div className='container my-5' >
                <h2  style={{color: props.mode==='dark'?'white':'#191919', marginTop: '100px'}}>News Hub - Top headlines</h2>
                {loading && <Spinner />}
                <InfiniteScroll
                    dataLength={articles.length}
                    next={fetchMoreData}
                    hasMore={articles.length !== totalResults}
                    loader={<Spinner />}>
                    <div className="row" >
                        {articles.map((element, index) => (
                            <div className="col-md-3" key={`${element.url}-${index}`}  style={{color: props.mode==='dark'?'white':'#232D3F'}}>
                                <Newsitem
                                    title={element.title ? element.title.slice(0, 40) : ""}
                                    description={element.description ? element.description.slice(0, 75) : ""}
                                    imageurl={element.urlToImage}
                                    newsurl={element.url}
                                    author={element.author ? element.author : "Unknown"}
                                    date={element.publishedAt}
                                    source={element.source.name}
                                    mode={mode}
                                />
                            </div>
                        ))}
                    </div>
                </InfiniteScroll>
            </div>
        );
}

News.defaultProps = {
    country: 'in',
    pageSize: 8,
    category: 'general',
    apikey: process.env.REACT_APP_NEWSHUB
}
News.propTypes = {
    country: propTypes.string,
    pageSize: propTypes.number,
    category: propTypes.string,
    apikey: propTypes.string

}


export default News
