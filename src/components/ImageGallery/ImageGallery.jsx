import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import { ImageList } from './ImageGallery.styled';
export function ImageGallery({ items, onClick }) {
  return (
    <ImageList>
      {items.map(item => {
        return (
          <ImageGalleryItem
            key={item.id}
            smallImage={item.webformatURL}
            largeImage={item.largeImageURL}
            tag={item.tags}
            onClick={onClick}
          />
        );
      })}
    </ImageList>
  );
}
