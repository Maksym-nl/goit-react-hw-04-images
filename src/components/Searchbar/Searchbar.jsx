import { useState } from 'react';
// import { Component } from 'react';
import { toast } from 'react-toastify';
import { Header } from './Searchbar.styled';
// export default class SearchBar extends Component {
//   state = {
//     input: '',
//   };

export const SearchBar = ({ onSubmit }) => {
  const [input, setInput] = useState('');

  const handleChange = ({ target }) => {
    setInput(target.value.toLowerCase());
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (input.trim() === '') {
      toast('Введите Ваш запрос!');
      return;
    }
    onSubmit(input);
    // this.setState({ input: '' });
  };

  return (
    <Header>
      <form type="submit" onSubmit={handleSubmit}>
        <button>
          <span>Search</span>
        </button>

        <input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          onChange={handleChange}
          value={input}
        />
      </form>
    </Header>
  );
};
