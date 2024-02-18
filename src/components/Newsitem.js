import React, { Component } from 'react'

export class Newsitem extends Component {
    render() {
        let {title, description, imageurl, newsurl, author, date, source} = this.props;
        return (
            <div>
                <div className="card my-5 mx-2" width='100%'>
                    <img src={!imageurl?"https://lh3.googleusercontent.com/J6_coFbogxhRI9iM864NL_liGXvsQp2AupsKei7z0cNNfDvGUmWUy20nuUhkREQyrpY4bEeIBuc=s0-w300-rw":imageurl} height="175" width="250" className="card-img-top" alt="..."/>
                        <div className="card-body">
                        <span className="position-absolute top-0 start-50 translate-middle badge rounded-pill bg-dark">{source}</span>
                            <h5 className="card-title">{title}...</h5>
                            <p className="card-text">{description}...</p>
                            <p className="card-text"><small className="text-body-secondary">By {author} on {new Date(date).toGMTString()} </small></p>
                            <a href={newsurl} target='_blank' rel="noreferrer" className="btn btn-sm btn-dark">Read more</a>
                        </div>
                </div>
            </div>
        )
    }
}

export default Newsitem
