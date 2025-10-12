import Topbar from '../../Components/Topbar';
import Navbar from "pages/Components/navbar/Navbar";
import React from 'react';
import Header from 'pages/Header/Header';
import { useTranslation } from 'react-i18next';
import i18n from 'i18n';
import useIsMobile from 'pages/useIsMobile';
// import MenuNavbar from 'pages/Components/navbar';




const Home = () => {
  const isMobile = useIsMobile(); // true/false
  const { t } = useTranslation();
  const isRtl = i18n.language === "fa-IR" || i18n.language === "ar-GB";

  return (
    <div className='h-full'>
      <Topbar />
      <Navbar />
      <Header
        claasNameTitleBanner={
          isMobile
            ? "absolute top-1/3 left-3/6 -translate-x-5/5 -translate-y-1/5 text-center"
            :
            isRtl
              ? "absolute top-1/3 left-1/8  -translate-x-1/2 -translate-y-2/3 md:-translate-x-0"
              : "absolute top-1/3 left-1/28 -translate-x-1/2 -translate-y-2/3 md:-translate-x-0"
        }

        imgBannerClassName={
          isMobile ?
            "w-full l object-cover " : "w-full l object-cover"}
        textAlignTxt='left'
        txtTitleBanner={t("txtTitleBanner")}
        txtDescBanner={t("txtDescBanner")}
        menu={[]}
        imgBanner='https://zhubinshahyad.com/media/Files/img/About/Banner3.jpg'

      />
    </div>
  )
}

export default Home;
