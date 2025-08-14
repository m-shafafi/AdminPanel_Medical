import Topbar from '../../Components/Topbar';
import Navbar from "pages/Components/navbar/Navbar";
import React from 'react';
import Header from 'pages/Components/Header';
import { useTranslation } from 'react-i18next';
import MenuNavbar from 'pages/Components/navbar';




 const  Home=()=> {
  const { t } = useTranslation();

  return( 
  <>
    <Topbar/>
    <Navbar/>   
      <Header
     
      textAlignTxt='right'
      txtTitleBanner={t("txtTitleBanner")}
      txtDescBanner={t("txtDescBanner")}
       menu={[]}
      imgBanner='https://zhubinshahyad.com/media/Files/img/About/Banner.jpg'
        title={""}
  
      />                                                                                    
  </>
  )
}

export default Home;
