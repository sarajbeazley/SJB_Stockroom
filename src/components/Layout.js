import { Link } from "react-router-dom";

export default function Layout({ children }) {
  return (
    <div className="layout">
      <a href="https://www.sarajbeazley.com/" target="_blank">
        <img
          className="logo"
          src="/assets/images/sjb_stockroom_logo.png"
          alt="sjb-logo"
        />
      </a>
      <nav className="nav-bar">
        <div className="nav-links">
          
          <p>
            <Link className="link-text" to="/collections">
              <p>Architectural</p>
            </Link>
          </p>
          <p>
            <p>Cityscapes</p>
          </p>
          <p>
            <p>Figurative</p>
          </p>
          <p>
            <p>Interiors</p>
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
            <b>About</b>
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
