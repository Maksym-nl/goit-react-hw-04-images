// import { Component } from 'react';
import { Loader } from './Loader/Loader';
import { fetchItems } from '../api/api';
import { SearchBar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { toast, ToastContainer } from 'react-toastify';
import { Button } from './Button/Button';
import { Modal } from './Modal/Modal';
import 'react-toastify/dist/ReactToastify.css';
import { GlobalStyle } from './GlobalStyle';
import { useState } from 'react';
import { useEffect } from 'react';

export const App = () => {
  const [items, setItems] = useState([]);
  const [value, setValue] = useState('');
  const [page, setPage] = useState(1);
  const [isLoading, setisLoading] = useState(false);
  const [modalInfo, setmodalInfo] = useState();
  const [showModal, setshowModal] = useState(false);
  const [loadMore, setloadMore] = useState(false);

  useEffect(() => {
    if (value) {
      const getItems = async () => {
        setisLoading(true);
        try {
          const images = await fetchItems(value, page);
          toast(`we have ${images.totalHits} images`);
          setItems(prewState => [...prewState, ...images.hits]);
          setloadMore(page < Math.ceil(images.totalHits / 12));
        } catch (error) {
          console.log(error.messege);
        } finally {
          setisLoading(false);
        }
      };
      getItems();
    }
  }, [page, value]);

  const handleSubmit = data => {
    setItems([]);
    setValue(data);
    setPage(1);
  };

  const loadmore = () => {
    this.setState(prewState => ({ page: prewState.page + 1 }));
  };

  const getModalImages = imageInfo => {
    setmodalInfo(imageInfo);
    togalModal();
  };

  const togalModal = () => {
    prewState => ({ showModal: !prewState.showModal });
  };

  // render() {
  //   const { items, loadMore, isLoading, showModal, modalInfo } = this.state;
  return (
    <div>
      <GlobalStyle />
      <SearchBar onSubmit={handleSubmit} />
      <ImageGallery items={items} onClick={getModalImages} />
      <ToastContainer autoClose={3000} />

      {loadMore && <Button onClick={loadmore} />}
      {isLoading && <Loader />}
      {showModal && <Modal largeImage={modalInfo} onClose={togalModal} />}
    </div>
  );
};
