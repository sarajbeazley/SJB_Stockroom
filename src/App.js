// import logo from './logo.svg';
import "./App.css";


import Layout from "./components/Layout";
import LandingPage from "./components/LandingPage";
import Collections from "./components/Collections";
import SingleImage from "./components/SingleImage";
import LoginPage from "./components/LoginPage";
import AdminDashboard from "./components/AdminDashboard";
import AboutPage from "./components/AboutPage";


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

    {
      id: 2,
      name: 'Cityscapes',
      artworks: [
        { id: 201, title: 'Abbey Rd VIII', date: 2018, size: '50 x 50 cms', medium: 'relief print & silkscreen on paper', price: '£175',  imageUrl: '/assets/images/cityscapes/Abbey Rd VIII.jpg' },
        { id: 202, title: 'Grey Flower', date: 2011, size: '70 x 50 cms', medium: 'giclee print & silkscreen on paper', price: '£150', imageUrl: '/assets/images/cityscapes/Grey Flower lr.jpg' },
        { id: 203, title: 'Landing III', date: 2013, size: '55 x 55 cms', medium: 'collograph, silkscreen & watercolour on paper', price: '£225', imageUrl: '/assets/images/cityscapes/Landing III.jpg' },
        { id: 204, title: 'Mongkok I', date: 2010, size: '76 x 56 cms', medium: 'collograph & silkscreen on paper', price: '£250', imageUrl: '/assets/images/cityscapes/Mongkok I LR.jpg' },
        { id: 205, title: 'Streets III', date: 2018, size: '50 x 50 cms',medium: 'relief print & silkscreen on paper', price: '£175', imageUrl: '/assets/images/cityscapes/Sara J Beazley Streets III.jpg' },
        { id: 206, title: 'Tower Bridge II',date: 2011, size: '50 x 76 cms', medium: 'etching & silkscreen on paper', price: '£250', imageUrl: '/assets/images/cityscapes/Tower Bridge II.jpg' },
      ],
    },
    {
      id: 3,
      name: 'Figurative',
      artworks: [
        { id: 301, title: 'Pink Print', date: 2012, size: '70 x 50 cms', medium: 'etching & silkscreen on paper', price: '£175',  imageUrl: '/assets/images/figurative/Pink Print.jpg' },
        { id: 302, title: 'Pin Up Girl I', date: 2015, size: '70 x 70 cms', medium: 'giclee print & silkscreen on paper, hand finished with UV paint', price: '£350', imageUrl: '/assets/images/figurative/PinUp Girl I.jpg' },
        { id: 303, title: 'Shell', date: 2012, size: '70 x 50 cms', medium: 'giclee print & silkscreen on paper', price: '£150', imageUrl: '/assets/images/figurative/Sara_J_Beazley_Shell.jpg' },
        { id: 304, title: 'Roxie', date: 2012, size: '70 x 50 cms', medium: 'giclee print & silkscreen on paper', price: '£150', imageUrl: '/assets/images/figurative/Sara_J_Bezley_Roxie.jpg' },
        { id: 305, title: 'Stormy Weather II', date: 2015, size: '70 x 70 cms',medium: 'giclee print & silkscreen on paper, hand finished with UV paint', price: '£350', imageUrl: '/assets/images/figurative/Stormy Weather II.jpg' },
        { id: 306, title: 'The Shore I',date: 2015, size: '76 x 56 cms', medium: 'photo polymer, relief print & silkscreen on paper', price: '£325', imageUrl: '/assets/images/figurative/The Shore I.jpg' },
      ],
    },
    {
      id: 4,
      name: 'Interiors',
      artworks: [
        { id: 401, title: 'Bedroom I', date: 2012, size: '56 x 76 cms', medium: 'polymer print, relief print, watercolour & silkscreen on paper', price: '£325',  imageUrl: '/assets/images/interiors/Bedroom I.jpg' },
        { id: 402, title: 'Chandelier VIII', date: 2019, size: '50 x 36 cms', medium: 'photocopy transfer & relief print on paper', price: '£250', imageUrl: '/assets/images/interiors/Chandelier 8.jpg' },
        { id: 403, title: 'Chandelier I', date: 2017, size: '50 x 40 cms', medium: 'etching on paper', price: '£150', imageUrl: '/assets/images/interiors/Chandelier I.jpg' },
        { id: 404, title: 'Dining Room I', date: 2019, size: '40 x 60 cms', medium: 'relief print & silkscreen on paper', price: '£225', imageUrl: '/assets/images/interiors/Dining room 1.jpg' },
        { id: 405, title: 'Dressing Room II', date: 2019, size: '40 x 60 cms',medium: 'relief print & silkscreen on paper', price: '£225', imageUrl: '/assets/images/interiors/Dressing Room 2.jpg' },
        { id: 406, title: 'Red Johnston Rd II',date: 2015, size: '76 x 56 cms', medium: 'silkscreen on paper', price: '£300', imageUrl: '/assets/images/interiors/RedJohnston2edit.jpg' },
      ],
    },

    {
      id: 5,
      name: 'Fashion',
      artworks: [
        { id: 501, title: 'Blue Corset', date: 2005, size: '29 x 19 cms', medium: 'etching on paper', price: '£105',  imageUrl: '/assets/images/fashion/Blue Corset.jpg' },
        { id: 502, title: 'Shoe', date: 2011, size: '50 x 36 cms', medium: 'drypoint, silkscreen & watercolour on paper', price: '£200', imageUrl: '/assets/images/fashion/Shoe.jpg' },
        { id: 503, title: 'Turquoise Boudoir I', date: 2018, size: '70 x 50 cms', medium: 'embossing, silkscreen & watercolour on paper', price: '£350', imageUrl: '/assets/images/fashion/Turquoise Boudoir I.jpg' },
        { id: 504, title: 'Necklace', date: 2005, size: '30 x 28 cms', medium: 'etching on paper', price: '£150', imageUrl: '/assets/images/fashion/necklace.jpg' },
        { id: 505, title: 'Shoes', date: 2011, size: '30 x 37 cms', medium: 'drypoint & silkscreen on paper', price: '£150', imageUrl: '/assets/images/fashion/shoes.jpg' },
        { id: 506, title: 'Corset', date: 2005, size: '29 x 19 cms', medium: 'etching on paper', price: '£105',  imageUrl: '/assets/images/fashion/corset.jpg' },
       
      ],
    },

    {
      id: 6,
      name: 'Landscapes',
      artworks: [
        { id: 601, title: 'And Breathe II', date: 2022, size: '50 x 70 cms', medium: 'relief print & silkscreen on paper', price: '£225',  imageUrl: '/assets/images/landscapes/And Breathe II.jpg' },
        { id: 602, title: 'Dig Deep I', date: 2022, size: '50 x 70 cms', medium: 'relief print & silkscreen on paper', price: '£225', imageUrl: '/assets/images/landscapes/Dig Deep I.jpg' },
        { id: 603, title: 'Small Steps VIIII', date: 2022, size: '50 x 70 cms', medium: 'relief print & silkscreen on paper', price: '£225', imageUrl: '/assets/images/landscapes/Small Steps VIIII.jpg' },
        { id: 604, title: 'Take Your Time IV', date: 2022, size: '50 x 70 cms',medium: 'relief print & silkscreen on paper', price: '£225', imageUrl: '/assets/images/landscapes/Take Your Time IV.jpg' },
        { id: 605, title: 'Small Steps XI', date: 2022, size: '70 x 50 cms', medium: 'relief print & silkscreen on paper', price: '£225', imageUrl: '/assets/images/landscapes/Small Steps XI.jpg' },
        { id: 606, title: 'Take Your Time VII',date: 2022, size: '50 x 70 cms', medium: 'relief print & silkscreen on paper', price: '£225', imageUrl: '/assets/images/landscapes/Take Your Time VII.jpg' },
      ],
    },

  ];

  const token = localStorage.getItem("authToken");

  return (
    <div>
      <Layout>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/collections/:collectionName" element={<Collections collectionsData={collectionsData} />} />
          <Route
            path="/collections/:collectionName/:artworkId"
            element={<SingleImage collectionsData={collectionsData} />}
          />
          <Route path="/login" element={<LoginPage />} />
          <Route
            path="/admin"
            element={!token ? <LoginPage /> : <AdminDashboard /> }
            />
            <Route path="/about"
            element={<AboutPage />}
            />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
