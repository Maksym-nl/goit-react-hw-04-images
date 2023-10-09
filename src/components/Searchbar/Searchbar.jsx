import { Component } from 'react';
import { toast } from 'react-toastify';
import { Header } from './Searchbar.styled';
export default class SearchBar extends Component {
  state = {
    input: '',
  };

  handleChange = ({ target }) => {
    this.setState({ input: target.value.toLowerCase() });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.input.trim() === '') {
      toast('Введите Ваш запрос!');
      return;
    }
    this.props.onSubmit(this.state.input);
    this.setState({ input: '' });
  };

  render() {
    return (
      <Header>
        <form type="submit" onSubmit={this.handleSubmit}>
          <button>
            <span>Search</span>
          </button>

          <input
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handleChange}
            value={this.state.input}
          />
        </form>
      </Header>
    );
  }
}
