import Topbar from '../../Components/Topbar';
import Navbar from "pages/Components/navbar/Navbar";
import React from 'react';
import Header from 'pages/Header/Header';
import { useTranslation } from 'react-i18next';
// import MenuNavbar from 'pages/Components/navbar';




const Home = () => {
  const { t } = useTranslation();

  return (
    <div className='h-full'>
      <Topbar />
      <Navbar />
      <Header

        textAlignTxt='right'
        txtTitleBanner={t("txtTitleBanner")}
        txtDescBanner={t("txtDescBanner")}
        menu={[]}
        imgBanner='https://zhubinshahyad.com/media/Files/img/About/Banner.png'
        title={""}

      />
    </div>
  )
}

export default Home;
