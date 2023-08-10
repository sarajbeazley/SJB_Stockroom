// import logo from './logo.svg';
import "./App.css";


import Layout from "./components/Layout";
import LandingPage from "./components/LandingPage";
import Collections from "./components/Collections";
import SingleImage from "./components/SingleImage";
import LoginPage from "./components/LoginPage";
import AdminDashboard from "./components/AdminDashboard";

import { Routes, Route } from "react-router-dom";

function App() {
  const collectionsData = [
    {
      id: 1,
      name: "Architectural",
      artworks: [
        {
          id: 101,
          title: "BMA Study I",
          date: 2017,
          size: "35 x 50 cms",
          medium: "silkscreen on paper",
          price: "£150",
          imageUrl: "/assets/images/architectural/BMA Study I.jpg",
        },
        {
          id: 102,
          title: "Britannic House",
          date: 2017,
          size: "70 x 50 cms",
          medium: "silkscreen on paper",
          price: "£150",
          imageUrl: "/assets/images/architectural/Britannic House LR.jpg",
        },
        {
          id: 103,
          title: "Burgundy Polka Dot",
          date: 2007,
          size: "50 x 40 cms",
          medium: "etching & silkscreen on paper",
          price: "£150",
          imageUrl: "/assets/images/architectural/Burgundy Polka dot.jpg",
        },
        {
          id: 104,
          title: "Crystal Palace I",
          date: 2019,
          size: "70 x 50 cms",
          medium: "silkscreen, watercolour & embossing on paper",
          price: "£150",
          imageUrl: "/assets/images/architectural/Crystal Palace I.jpg",
        },
        {
          id: 105,
          title: "Poultry Study IV",
          date: 2017,
          size: "76 x 56 cms",
          medium: "silkscreen on paper",
          price: "£150",
          imageUrl: "/assets/images/architectural/Poultry Study IV.jpg",
        },
        {
          id: 106,
          title: "Purple Paisley",
          date: 2007,
          size: "50 x 40 cms",
          medium: "etching & silkscreen on paper",
          price: "£150",
          imageUrl: "/assets/images/architectural/Purple Paisley.jpg",
        },
      ],
    },
  ];

  const token = localStorage.getItem("authToken");

 

  return (
    <div>
      <Layout>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/collections" element={<Collections />} />
          <Route
            path="/collections/:artworkId"
            element={<SingleImage collectionsData={collectionsData} />}
          />
          <Route path="/login" element={<LoginPage />} />
          <Route
            path="/admin"
            element={!token ? <LoginPage /> : <AdminDashboard />}
          />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
