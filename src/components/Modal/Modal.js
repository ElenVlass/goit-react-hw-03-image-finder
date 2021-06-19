import { Component } from "react";
import styles from "./Modal.module.scss";

export default class Modal extends Component {
  render() {
    return (
      <div className={styles.Overlay}>
        <div className={styles.Modal}>
          <img src="" alt="" />
        </div>
      </div>
    );
  }
}
