import { Component } from "react";
import "./styles/base.scss";

import Searchbar from "./components/Searchbar";
import ImageGallery from "./components/ImageGallery";
import Button from "./components/Button";
// import Modal from './components/Modal';
// import fetchImages from './services/pixabay-api';
import imagesApi from "./services/pixabay-api";

class App extends Component {
  state = {
    searchQuery: "",
    currentPage: 1,
  };
  // componentDidMount(){
  //   console.log('componentDidMount');
  //   fetchImages.fetchImages()
  // }
  fetchImages = () => {
    const { searchQuery, currentPage } = this.state;
    const options = { searchQuery, currentPage };
    imagesApi.fetchImages(options);
  };

  search = () => null;
  render() {
    return (
      <div className="App">
        <Searchbar onSubmit={this.fetchImages} />
        <ImageGallery />
        <Button />
      </div>
    );
  }
}

export default App;
