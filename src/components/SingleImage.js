import { useParams } from "react-router-dom";

export default function SingleImage({ collectionsData }) {
  const { artworkId } = useParams();
  const artwork = findArtworkById(artworkId);

  function findArtworkById(id) {
    for (const collection of collectionsData) {
      const foundArtwork = collection.artworks.find(
        (artwork) => artwork.id === parseInt(id)
      );
      if (foundArtwork) {
        return foundArtwork;
      }
    }
    return null;
  }

  if (!artwork) {
    return <div>Artwork not found.</div>;
  }

  const { title, imageUrl, medium, size, price, date } = artwork;
  console.log(artwork);
  return (
    <div className="artwork-details">
      <img className="single-image" src={imageUrl} alt={title} />
      <h2>{title}{","} {date}</h2>
      <div className="original-artwork-info">
        <p>Original artwork:</p>
        <p>{medium}</p>
        <p>{size}</p>
        <p>{price}</p>
      </div>
      <div className="digital-artwork-info">
        <p>Digital print:</p>
        <p>giclee print on paper</p>
        <p>small (size?) £100</p>
        <p>medium (size?) £200</p>
        <p>large (size?) £300</p>
      </div>
    </div>
  );
}
