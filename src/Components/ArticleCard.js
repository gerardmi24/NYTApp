import React, { Component } from 'react'

class ArticleCard extends Component {

    render() {
        return (
            <div className="artCard">
                <h2> {this.props.article.title} </h2>
                <img src={this.props.article.url} />
            </div>
        )
    }
}

export default ArticleCard;