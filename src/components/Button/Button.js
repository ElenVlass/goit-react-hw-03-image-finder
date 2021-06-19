import { Component } from "react";
import styles from "./Button.module.scss";

export default class Button extends Component {
  onLoadMore() {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  }
  render() {
    return (
      <button type="button" onClick={this.onLoadMore} className={styles.Button}>
        Load more
      </button>
    );
  }
}
