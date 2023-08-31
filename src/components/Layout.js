import { Link } from "react-router-dom";

export default function Layout({ children }) {
  return (
    <div className="layout">
      <Link className="link-text" to="/">
        <img
          className="logo"
          src="/assets/images/sjb_stockroom_logo.png"
          alt="sjb-logo"
        />
      </Link>
      <nav className="nav-bar">
        <div className="nav-links">
          <p>
            <Link className="link-text" to="/collections/architectural">
              <p>Architectural</p>
            </Link>
          </p>
          <p>
            <Link className="link-text" to="/collections/cityscapes">
              <p>Cityscapes</p>
            </Link>
          </p>
          <p>
          <Link className="link-text" to="/collections/figurative">
            <p>Figurative</p>
            </Link>
          </p>
          <p>
          <Link className="link-text" to="/collections/interiors">
            <p>Interiors</p>
            </Link>
          </p>
          <p>
            <p>Fashion</p>
          </p>
          <p>
            <p>Landscapes</p>
          </p>
        </div>
      </nav>
      {children}
      <footer className="footer">
        <div className="links-container">
          <p className="item">
          <Link className="link-text" to="/about">
            <b>About</b>
            </Link>
          </p>
          <p className="item">
            <a className="no-underline" href="https://www.sarajbeazley.com/" target="_blank">
              <b>Projects</b>
            </a>
          </p>
          <p className="item">
            <b>FAQ's</b>
          </p>
          <p className="item">
            <b>Shipping</b>
          </p>
          <p className="item">
            <b>Returns</b>
          </p>
          <p className="item">
            <b>Contact</b>
          </p>
        </div>
        <small className="full-width">
          2023 SaraJBeazley All rights reserved. Registered in England
          No.210580. Address 286 Kilburn Lane, London W10 4BW, England.
        </small>
      </footer>
    </div>
  );
}
