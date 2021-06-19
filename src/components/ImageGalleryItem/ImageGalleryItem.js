import { Component } from "react";
import styles from "./ImageGalleryItem.module.scss";

export default class ImageGalleryItem extends Component {
  render() {
    return (
      <li className={styles.ImageGalleryItem}>
        <img src="" alt="" className={styles.ImageGalleryItem_image} />
      </li>
    );
  }
}
