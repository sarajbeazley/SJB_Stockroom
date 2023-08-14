

export default function LandingPage() {
  return (
    <div className="page">
      <h1>
        Welcome to SJB STOCKROOM where you can browse artwork by collection to purchase originals or order digital prints.
      </h1>
      <h1>Collections</h1>
      <div className="collections-container">
      <div className="home-collection-item">
      <img
          className="collection-image"
          src="/assets/images/architectural/architectural1 copy.png"
          alt="architectural"
        />
        <h2>Architectural</h2>
        </div>
        <div className="home-collection-item">
      <img
          className="collection-image"
          src="/assets/images/cityscapes/Abbey Rd VIII fr.jpg"
          alt="abbey-road-VIII"
        />
        <h2>Cityscapes</h2>
        </div>
        <div className="home-collection-item">
      <img
          className="collection-image"
          src="/assets/images/figurative/figurative.png"
          alt="figurative"
        />
        <h2>Figurative</h2>
        </div>
    </div>
    </div>
  );
}
