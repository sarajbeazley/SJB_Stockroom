import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <div className="page">
      <h1 className="intro-text">
        Welcome to SJB STOCKROOM where you can browse artwork by collection to purchase originals or order digital prints.
      </h1>
      <h1 className="collections-title">Collections</h1>
      <div className="collections-container">
      <div className="home-collection-item">
      <Link className="link-text" to="/collections/architectural">  
      <img
          className="collection-image"
          src="/assets/images/architectural/architectural1 copy.png"
          alt="architectural"
        />
        <h2>Architectural</h2>
        </Link>
        </div>
        <div className="home-collection-item">
        <Link className="link-text" to="/collections/cityscapes">  
      <img
          className="collection-image"
          src="/assets/images/cityscapes/Abbey Rd VIII fr.jpg"
          alt="abbey_road_VIII"
        />
        <h2>Cityscapes</h2>
        </Link>
        </div>
        <div className="home-collection-item">
      <img
          className="collection-image"
          src="/assets/images/figurative/figurative.png"
          alt="figurative"
        />
        <h2>Figurative</h2>
        </div>
        <div className="home-collection-item">
      <img
          className="collection-image"
          src="/assets/images/interiors/Chandelier I fr.jpg"
          alt="chandelier_I"
        />
        <h2>Interiors</h2>
        </div>
        <div className="home-collection-item">
      <img
          className="collection-image"
          src="/assets/images/fashion/corset.png"
          alt="fashion"
        />
        <h2>Figurative</h2>
        </div>
        <div className="home-collection-item">
      <img
          className="collection-image"
          src="/assets/images/landscapes/Small Steps VIIII fr.jpg"
          alt="small_steps_VIIII"
        />
        <h2>Landscapes</h2>
        </div>
    </div>
    </div>
  );
}
