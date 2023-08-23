import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

export default function Collections(props) {
 
  const { collectionName } = useParams();

  const selectedCollection = props.collectionsData.find(
    (collection) =>
      collection.name.toLowerCase() === collectionName.toLowerCase()
  );

  if (!selectedCollection) {
    return <div>Collection not found.</div>;
  }

  return (
    <div>
      <h1>{selectedCollection.name}</h1>
      <div className="collections-container">
        {selectedCollection.artworks.map((artwork) => (
          <Link
            className="link-text"
            key={artwork.id}
            to={`/collections/${selectedCollection.name}/${artwork.id}`}
          >
            <div className="collection-item">
              <img src={artwork.imageUrl} alt={artwork.title} />
              <p className="artwork-title">{artwork.title}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
