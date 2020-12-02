import React, { Component } from 'react'

class ArticleCard extends Component {


    cardClick = () => {
        // console.log("Clicked")
        this.props.clickHandler(this.props.article.id)
    }

    render() {
        return (
            <div onClick={this.cardClick} className="artCard">
                <h2> {this.props.article.title} </h2>
                <img alt="NYTimes Articles" src={this.props.article.url} />
            </div>
        )
    }
}

export default ArticleCard;