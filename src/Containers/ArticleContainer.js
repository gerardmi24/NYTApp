import React, { Component } from 'react'
import ArticleCard from '../Components/ArticleCard'

class ArticleContainer extends Component {

    renderArts = () => {
        console.log(this.props.articles)
        return this.props.articles.map((artObj) => <ArticleCard id={artObj.id} article={artObj} />)
    }

    render() {
        return (
            <div>
                <h2> All Articles </h2>
                {this.renderArts()}
            </div>
        )
    }
}

export default ArticleContainer;