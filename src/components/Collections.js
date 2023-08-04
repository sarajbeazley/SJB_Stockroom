
import { Link } from "react-router-dom";

export default function Collections(){
   
    const collectionsData = [
        {
            id: 1,
            name: 'Architectural',
            artworks: [
              { id: 101, title: 'BMA Study I', date: 2017, size: '35 x 50 cms', medium: 'silkscreen on paper', price: '£150',  imageUrl: '/assets/images/architectural/BMA Study I.jpg' },
              { id: 102, title: 'Britannic House', date: 2017, size: '70 x 50 cms', medium: 'silkscreen on paper', price: '£150', imageUrl: '/assets/images/architectural/Britannic House LR.jpg' },
              { id: 103, title: 'Burgundy Polka Dot', date: 2007, size: '50 x 40 cms', medium: 'etching & silkscreen on paper', price: '£150', imageUrl: '/assets/images/architectural/Burgundy Polka dot.jpg' },
              { id: 104, title: 'Crystal Palace I', date: 2019, size: '70 x 50 cms', medium: 'silkscreen, watercolour & embossing on paper', price: '£150', imageUrl: '/assets/images/architectural/Crystal Palace I.jpg' },
              { id: 105, title: 'Poultry Study IV', date: 2017, size: '76 x 56 cms',medium: 'silkscreen on paper', price: '£150', imageUrl: '/assets/images/architectural/Poultry Study IV.jpg' },
              { id: 106, title: 'Purple Paisley',date: 2007, size: '50 x 40 cms', medium: 'etching & silkscreen on paper', price: '£150', imageUrl: '/assets/images/architectural/Purple Paisley.jpg' },
            ],
          },
     
    
      ];

      return (
        
        <div>
          {collectionsData.map((collection) => (
            <div key={collection.id}>
              <h1>{collection.name}</h1>
              <div className="collections-container">
              {collection.artworks.map((artwork) => (
                 <Link className="link-text" key={artwork.id} to={`/collections/${artwork.id}`}>
                    <div className="collection-item">
                 <img src={artwork.imageUrl} alt={artwork.title} />
                 <p className="artwork-title">{artwork.title}</p>
                 </div>
               </Link>
              ))}
            </div>
            </div>
          ))}
        </div>
       
      );
      
}