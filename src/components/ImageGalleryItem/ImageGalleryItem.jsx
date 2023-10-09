export function ImageGalleryItem({ smallImage, largeImage, tag, onClick }) {
  return (
    <li onClick={() => onClick({ largeImage, tag })}>
      <img src={smallImage} alt={tag} />
    </li>
  );
}
