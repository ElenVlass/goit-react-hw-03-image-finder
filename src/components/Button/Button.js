import { Component } from "react";
import styles from "./Button.module.scss";
import PropTypes from "prop-types";

export default class Button extends Component {
  static defaultProps = {
    onClick: () => null,
  };
  static propTypes = {
    onClick: PropTypes.func,
  };
  // onLoadMore= () => {
  //   window.scrollTo({
  //     top: document.documentElement.scrollHeight,
  //     behavior: "smooth",
  //   });
  //   this.props.onClick();
  // }

  render() {
    return (
      <button
        type="button"
        onClick={this.props.onClick}
        // onClick={this.onLoadMore}
        className={styles.Button}
      >
        Load more
      </button>
    );
  }
}
