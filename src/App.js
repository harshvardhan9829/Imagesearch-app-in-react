import unsplash from '../src/api/unsplash'
import './App.css'
import SearchBar from './components/SearchBar'
import React, { Component } from 'react'
import ImageList from './components/ImageList'
class App extends Component {

  state = { images: [] };

  onSearchSubmit = async (term) => {
    const response = await unsplash.get('/search/photos', {
      params: { query: term }
    });


    this.setState({ images: response.data.results });
  }




  render() {
    return (
      <div className="ui container" style={{ marginTop: '10px' }}>
        <h3>app.js</h3>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ImageList images={this.state.images} />
      </div>

    )
  }
}

export default App;






