import { Component } from "react";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import styles from "./Loader.module.scss";

export default class LoaderSpiner extends Component {
  render() {
    return (
      <div className={styles.spiner}>
        <Loader
          color="#FFA500"
          secondaryColor="#FFA500"
          width={100}
          height={100}
          type="MutatingDots"
        />
      </div>
    );
  }
}
