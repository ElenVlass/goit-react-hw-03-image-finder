import { Component } from "react";
import { createPortal } from "react-dom";
import styles from "./Modal.module.scss";
import defaultImg from "../../images/img-default.jpeg";
import PropTypes from "prop-types";

const modalRoot = document.getElementById("modal-root");

export default class Modal extends Component {
  static defaultProps = {
    src: defaultImg,
    alt: "picture",
  };

  static propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string,
  };
  componentDidMount() {
    window.addEventListener("keydown", this.onKeyDown);
  }
  componentWillUnmount() {
    window.removeEventListener("keydown", this.onKeyDown);
  }

  onKeyDown = (evt) => {
    if (evt.code === "Escape") {
      this.props.closeModal();
    }
  };
  onOverlayClick = (evt) => {
    if (evt.currentTarget === evt.target) {
      this.props.closeModal();
    }
  };

  render() {
    const { src, alt } = this.props;
    return createPortal(
      <div className={styles.Overlay} onClick={this.onOverlayClick}>
        <div className={styles.Modal}>
          <img src={src} alt={alt} />
        </div>
      </div>,
      modalRoot
    );
  }
}
