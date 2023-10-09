import { Component } from 'react';
import { Loader } from './Loader/Loader';
import { fetchItems } from '../api/api';
import SearchBar from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { toast, ToastContainer } from 'react-toastify';
import { Button } from './Button/Button';
import { Modal } from './Modal/Modal';
import 'react-toastify/dist/ReactToastify.css';
import { GlobalStyle } from './GlobalStyle';
export class App extends Component {
  state = {
    items: [],
    value: '',
    page: 1,
    isLoading: false,
    modalInfo: {},
    showModal: false,
    loadMore: false,
  };

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.value !== this.state.value ||
      this.state.page !== prevState.page
    ) {
      this.getImages();
    }
  }

  handleSubmit = value => {
    this.setState({ items: [], value, page: 1 });
  };

  getImages = async () => {
    this.setState({ isLoading: true });
    try {
      const images = await fetchItems(this.state.value, this.state.page);
      toast(`we have ${images.totalHits} images`);
      this.setState(prewState => ({
        items: [...prewState.items, ...images.hits],
        loadMore: this.state.page < Math.ceil(images.totalHits / 12),
      }));
    } catch (error) {
      console.log(error.messege);
    } finally {
      this.setState({ isLoading: false });
    }
  };

  loadmore = () => {
    this.setState(prewState => ({ page: prewState.page + 1 }));
  };

  getModalImages = imageInfo => {
    this.setState({ modalInfo: imageInfo });
    this.togalModal();
  };

  togalModal = () => {
    this.setState(prewState => ({ showModal: !prewState.showModal }));
  };

  render() {
    const { items, loadMore, isLoading, showModal, modalInfo } = this.state;
    return (
      <div>
        <GlobalStyle />
        <SearchBar onSubmit={this.handleSubmit} />
        <ImageGallery items={items} onClick={this.getModalImages} />
        <ToastContainer autoClose={3000} />

        {loadMore && <Button onClick={this.loadmore} />}
        {isLoading && <Loader />}
        {showModal && (
          <Modal largeImage={modalInfo} onClose={this.togalModal} />
        )}
      </div>
    );
  }
}
