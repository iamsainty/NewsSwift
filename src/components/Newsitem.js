import React from 'react'

const Newsitem = (props) => {
    return (
        <div>
            <div className={`card my-5 mx-2 ${props.mode==='dark'?'bg-dark text-white':''}`} width='100%'  style={{color: props.mode==='dark'?'white':'#191919'}}>
                <img src={props.imageurl ? props.imageurl: "https://lh3.googleusercontent.com/J6_coFbogxhRI9iM864NL_liGXvsQp2AupsKei7z0cNNfDvGUmWUy20nuUhkREQyrpY4bEeIBuc=s0-w300-rw"} height="175" width="250" className="card-img-top" alt="..." />
                <div className="card-body">
                    <span className={`position-absolute top-0 start-50 translate-middle badge rounded-pill ${props.mode==='dark'?'bg-light text-dark':'bg-dark text-white'}`}>{props.source}</span>
                    <h5 className="card-title">{props.title}...</h5>
                    <p className="card-text">{props.description}...</p>
                    <p className="card-text"><small className="text-body-secondary">By {props.author} on {new Date(props.date).toGMTString()} </small></p>
                    <a href={props.newsurl} target='_blank' rel="noreferrer" className={`btn btn-sm ${props.mode==='dark'?'btn-light text-dark':'btn-dark text-white'}`}>Read more</a>
                </div>
            </div>
        </div>
    )
}

export default Newsitem
