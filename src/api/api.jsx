import axios from 'axios';
// 39555816 - 71d9d7d5243ac5c8982fc1029
axios.defaults.baseURL = 'https://pixabay.com/api/';
axios.defaults.params = {
  key: '39555816-71d9d7d5243ac5c8982fc1029',
  image_type: 'photo',
  orientation: 'horizontal',
  per_page: '12',
};

export const fetchItems = async (value, page) => {
  const resp = await axios.get(`?q=${value}&page=${page}`);
  return resp.data;
};
// https://pixabay.com/api/?q=cat&page=1&key=your_key&image_type=photo&orientation=horizontal&per_page=12
