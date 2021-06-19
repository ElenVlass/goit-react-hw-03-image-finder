import { Component } from "react";
import styles from "./Searchbar.module.scss";
import PropTypes from "prop-types";

export default class Searchbar extends Component {
  static defaultProps = {
    onSubmit: () => null,
  };
  static propTypes = {
    onSubmit: PropTypes.func,
  };
  render() {
    return (
      <header className={styles.Searchbar}>
        <form onSubmit={this.props.onSubmit} className={styles.SearchForm}>
          <button type="submit" className={styles.SearchForm_button}>
            <span className={styles.SearchForm_button_label}>Search</span>
          </button>

          <input
            className={styles.SearchForm_input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}
