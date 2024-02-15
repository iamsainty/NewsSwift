import React, { Component } from 'react'

export class Newsitem extends Component {
    render() {
        let {title, description, imageurl, newsurl} = this.props;
        return (
            <div>
                <div className="card" style={{width: "18rem"}}>
                    <img src={!imageurl?"https://images.moneycontrol.com/static-mcnews/2021/06/Deal-770x433.jpg":imageurl} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">{title}...</h5>
                            <p className="card-text">{description}...</p>
                            <a href={newsurl} target='_blank' rel="noreferrer" className="btn btn-sm btn-primary">Read more</a>
                        </div>
                </div>
            </div>
        )
    }
}

export default Newsitem
