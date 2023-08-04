import { Link } from "react-router-dom";

export default function Layout({ children }) {
  return (
    <div className="layout">
      <img
        className="logo"
        src="https://images.squarespace-cdn.com/content/v1/58f8b9709f74561265f1ab63/1492715033803-YFJ4A15FH5Y5HSEWWQ3G/SJB+signature+clear.png?format=750w"
        alt="sjb-logo"
      />
      <nav className="nav-bar">
        <div className="nav-links">
          <h2>Collections</h2>
          <p>
            <Link className="link-text" to="/collections">
              <b>Architectural</b>
            </Link>
          </p>
          <p>
            <b>Cityscapes</b>
          </p>
          <p>
            <b>Interiors</b>
          </p>
          <p>
            <b>Fashion</b>
          </p>
          <p>
            <b>Landscapes</b>
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
          <div className="admin-login-container">
          <button className="admin-login-button">Admin Login</button>
        </div>
        <small className="full-width">
          2023 SaraJBeazley All rights reserved. Registered in England
          No.210580. Address 286 Kilburn Lane, London W10 4BW, England.
        </small>
      </footer>
    </div>
  );
}
