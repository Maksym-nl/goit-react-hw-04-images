import { Component } from 'react';
import { Overlay } from './Modal.styled';
import { ModalContainer } from './Modal.styled';
export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.pressOnesc);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.pressOnesc);
  }
  onClickBackdrope = event => {
    if (event.currentTarget === event.target) {
      this.props.onClose();
    }
  };
  pressOnesc = event => {
    if (event.code === 'Escape') {
      this.props.onClose();
    }
  };
  render() {
    const { largeImage, tag } = this.props.largeImage;
    return (
      <Overlay onClick={this.onClickBackdrope}>
        <ModalContainer>
          <img src={largeImage} alt={tag} width="735" />
        </ModalContainer>
      </Overlay>
    );
  }
}
