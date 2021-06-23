import { Component } from "react";
import "./styles/base.scss";

import Searchbar from "./components/Searchbar";
import ImageGallery from "./components/ImageGallery";
import Button from "./components/Button";
import Modal from "./components/Modal";
import { getImages } from "./services/pixabay-api";
import LoaderSpiner from "./components/Loader";

class App extends Component {
  state = {
    images: [],
    searchQuery: "",
    currentPage: 1,
    loading: false,
    error: null,
    isModalOpen: false,
    largeImage: {
      src: "",
      alt: "",
    },
  };

  async componentDidMount() {
    this.fetchImages();
  }

  componentDidUpdate(prevProps, prevState) {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });

    if (prevState.searchQuery !== this.state.searchQuery) {
      this.fetchImages();
    }
  }

  componentDidCatch() {
    this.setState({ error: "Something went wrong.." });
  }

  onChangeQuery = (query) => {
    this.setState({
      searchQuery: query,
      currentPage: 1,
      articles: [],
      error: null,
    });
  };

  fetchImages = async () => {
    this.setState({ loading: true });

    const { searchQuery, currentPage } = this.state;
    const options = { searchQuery, currentPage };

    try {
      const images = await getImages(options);
      this.setState((prevState) => ({
        images: [...prevState.images, ...images],
        currentPage: prevState.currentPage + 1,
      }));
      if (images.length === 0) {
        this.setState({ error: "No more images" });
      }
    } catch (error) {
      this.setState({ error: error.message });
    } finally {
      this.setState({ loading: false });
    }
  };

  toggleModal = () => {
    this.setState(({ isModalOpen, loading }) => ({
      isModalOpen: !isModalOpen,
      loading: !loading,
    }));
  };

  showModal = (largeImageURL, tags) => {
    this.setState({
      largeImage: {
        src: largeImageURL,
        alt: tags,
      },
    });
    this.toggleModal();
  };

  render() {
    const { images, loading, isModalOpen, largeImage } = this.state;
    const isLoadMoreVisible = images.length !== 0 && !loading;

    return (
      <div className="App">
        {isModalOpen && (
          <Modal
            src={largeImage.src}
            alt={largeImage.alt}
            closeModal={this.toggleModal}
          />
        )}

        <Searchbar onSubmit={this.onChangeQuery} />

        <ImageGallery images={images} onImageClick={this.showModal} />

        {loading && <LoaderSpiner />}

        {isLoadMoreVisible && <Button onClick={this.fetchImages} />}
      </div>
    );
  }
}

export default App;
