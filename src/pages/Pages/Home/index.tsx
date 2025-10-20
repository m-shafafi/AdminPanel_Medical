
import React from 'react';
import { useTranslation } from 'react-i18next';
import i18n from 'i18n';
import useIsMobile from 'pages/useIsMobile';
import ProductForm from '../Products/ProductForm';
import ProductsList from '../Products/ProductsList';
import Header from 'components/header/Header';
import { AdminNavbar } from 'components/navbar/AdminNavbar';
// import MenuNavbar from 'pages/Components/navbar';




const Home = () => {
  const isMobile = useIsMobile(); // true/false
  const { t } = useTranslation();
  const isRtl = i18n.language === "fa-IR" || i18n.language === "ar-GB";

  return (
    <div className='h-full'>
      <AdminNavbar/>
    </div>
  )
}

export default Home;
