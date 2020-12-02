import React, { Component } from 'react'
import ArticleContainer from './Containers/ArticleContainer'
import Favorites from './Containers/Favorites'

class App extends Component {

  state = {
    api: [],
    favApi: [],
    favorite: false
  };

  componentDidMount() {
    fetch("https://api.nytimes.com/svc/mostpopular/v2//viewed/1.json?api-key=ZXCxmhbJ9Rz57nPvmCMq4rpiRT9C7zXW")
    .then(resp => resp.json())
    .then(data => this.setState({api: data.results}));
  };

  addFavArt = (id) => {
    console.log("ID in App", id)
    let newApi = [...this.state.api];
    let findId = newApi.find(el => el.id === id);
    findId.favorite = true;
    this.setState({api: newApi});
  }

  deleteFav = (id) => {
    let newApi = [...this.state.api];
    let findId = newApi.find(el => el.id === id);
    findId.favorite = false;
    this.setState({api: newApi})
  }

  findFavorites = () => {
    return this.state.api.filter(el => el.favorite);
  }

  render() {
    // console.log(this.state.api)
    return (
      <div className="App">
        <ArticleContainer articles={this.state.api} clickHandler={this.addFavArt} />
        <Favorites articles={this.findFavorites()} clickHandler={this.deleteFav} />
      </div>
    )
  }
}

export default App;