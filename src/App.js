import React, { Component } from 'react'
import ArticleContainer from './Containers/ArticleContainer'
//fetch link = https://api.nytimes.com/svc/mostpopular/v2//viewed/1.json?api-key=ZXCxmhbJ9Rz57nPvmCMq4rpiRT9C7zXW
//key = ZXCxmhbJ9Rz57nPvmCMq4rpiRT9C7zXW

class App extends Component {

  state = {
    api: []
  };

  componentDidMount() {
    fetch("https://api.nytimes.com/svc/mostpopular/v2//viewed/1.json?api-key=ZXCxmhbJ9Rz57nPvmCMq4rpiRT9C7zXW")
    .then(resp => resp.json())
    .then(data => this.setState({api: data.results}));
  };

  // renderArts = () => {
  //   return this.state.api.results.map(article => <ArticleContainer key={article.id} article={article} />)
  // };

  render() {
    // console.log(this.state)
    return (
      <div className="App">
        <ArticleContainer articles={this.state.api} />
      </div>
    )
  }
}

export default App;