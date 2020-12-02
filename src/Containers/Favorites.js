import React, { Component } from 'react';
import ArticleCard from '../Components/ArticleCard';

class Favorites extends Component {

    renderFavs = () => {
        return this.props.articles.map(fav => <ArticleCard article={fav} key={fav.id} clickHandler={this.props.clickHandler} />)
    }

    render() {
        return (
            <div>
                <h2> Favorite Articles </h2>
                {this.renderFavs()}
            </div>
        )
    }
}

export default Favorites;