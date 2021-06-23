import { Component } from "react";
import styles from "./ImageGalleryItem.module.scss";
import defaultImg from "../../images/img-default.jpeg";
import PropTypes from "prop-types";

export default class ImageGalleryItem extends Component {
  static defaultProps = {
    src: defaultImg,
    alt: "picture",
  };

  static propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string,
    onClick: PropTypes.func,
  };

  render() {
    const { src, alt, onClick } = this.props;
    return (
      <li className={styles.ImageGalleryItem}>
        <img
          className={styles.ImageGalleryItem_image}
          src={src}
          alt={alt}
          onClick={onClick}
        />
      </li>
    );
  }
}
