import Topbar from '../../Components/Topbar';
import Navbar from '../../Components/Navbar';
import Footer from '../../Components/Footer';
import Carousel from '../../Components/Carousel';
import AboutSection from '../AboutSection';
import TestimonialSection from '../TestimonialSection';
import BackToTop from '../../Components/BackToTop';
import Services from '../Services';
import AppointmentForm from '../AppointmentForm';
import TeamSection from '../TeamSection';
import BlogSection from '../BlogSection';
import React from 'react';
import { NavLink } from 'react-router-dom';
import Header from 'pages/Components/Header';
import { useTranslation } from 'react-i18next';




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
