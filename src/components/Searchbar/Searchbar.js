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

  state = {
    initialValue: "",
  };

  handleInputChange = (event) => {
    this.setState({
      initialValue: event.currentTarget.value,
    });
  };

  handleSubmitQuery = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state.initialValue);
    this.resetFormField();
  };

  resetFormField() {
    this.setState({
      initialValue: "",
    });
  }

  render() {
    const { initialValue } = this.state;
    return (
      <header className={styles.Searchbar}>
        <form onSubmit={this.handleSubmitQuery} className={styles.SearchForm}>
          <button type="submit" className={styles.SearchForm_button}>
            <span className={styles.SearchForm_button_label}>Search</span>
          </button>

          <input
            className={styles.SearchForm_input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={initialValue}
            onChange={this.handleInputChange}
          />
        </form>
      </header>
    );
  }
}
