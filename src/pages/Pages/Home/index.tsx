import Topbar from '../../Components/Topbar';
import Navbar from "pages/Components/navbar/Navbar";
import React from 'react';
import Header from 'pages/Header/Header';
import { useTranslation } from 'react-i18next';
import i18n from 'i18n';
import useIsMobile from 'pages/useIsMobile';
import ProductForm from '../Products/ProductForm';
// import MenuNavbar from 'pages/Components/navbar';




const Home = () => {
  const isMobile = useIsMobile(); // true/false
  const { t } = useTranslation();
  const isRtl = i18n.language === "fa-IR" || i18n.language === "ar-GB";

  return (
    <div className='h-full'>
      <ProductForm></ProductForm>
    </div>
  )
}

export default Home;
