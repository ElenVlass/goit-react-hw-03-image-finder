import { Component } from "react";
import styles from "./ImageGallery.module.scss";
import ImageGalleryItem from "../ImageGalleryItem";
import PropTypes from "prop-types";

export default class ImageGallery extends Component {
  static propTypes = {
    images: PropTypes.array.isRequired,
    onImageClick: PropTypes.func.isRequired,
  };

  render() {
    const { images, onImageClick } = this.props;
    return (
      <ul className={styles.ImageGallery}>
        {images.map(({ id, webformatURL, tags, largeImageURL }) => (
          <ImageGalleryItem
            key={id}
            src={webformatURL}
            alt={tags}
            onClick={() => onImageClick(largeImageURL, tags)}
          />
        ))}
      </ul>
    );
  }
}
