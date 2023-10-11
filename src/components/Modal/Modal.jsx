// import { Component } from 'react';
import { useEffect } from 'react';
import { Overlay } from './Modal.styled';
import { ModalContainer } from './Modal.styled';
// export class Modal extends Component {
//   componentDidMount() {
//     window.addEventListener('keydown', pressOnesc);
//   }

export const Modal = ({ largeImage, tag, onClose }) => {
  const onClickBackdrope = event => {
    if (event.currentTarget === event.target) {
      onClose();
    }
  };

  // componentWillUnmount() {
  //   window.removeEventListener('keydown', pressOnesc);
  // }
  useEffect(() => {
    const pressOnesc = event => {
      if (event.code === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', pressOnesc);
    return () => {
      window.removeEventListener('keydown', pressOnesc);
    };
  }, [onClose]);

  // const onClickBackdrope = event => {
  //   if (event.currentTarget === event.target) {
  //     onClose();
  //   }
  // };

  // const pressOnesc = event => {
  //   if (event.code === 'Escape') {
  //     onClose();
  //   }
  // };

  // render() {
  //   const { largeImage, tag } = largeImage;
  return (
    <Overlay onClick={onClickBackdrope}>
      <ModalContainer>
        <img src={largeImage.largeImage} alt={tag} />
      </ModalContainer>
    </Overlay>
  );
};
