import { useTranslation } from "react-i18next";
import Header from "../../Header/Header";
import Navbar from "pages/Components/navbar/Navbar";
import Topbar from "../../Components/Topbar";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import i18n from "i18n";
import CategoryProductListResponse from "common/entities/Product/CategoryProductListResponse";
import GenericSection from "../../Components/Generic/GenericSection";
import GetAllCategoryProductQuery from "business/application/Product/Category/GetAllCategoryProductQuery";
import { GalleryResponse } from "common/entities/Gallery/GalleryResponse";
import useGetAllGallery from "hooks/useGetAllGallery";



const GalleryPage = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const state = location.state as GalleryResponse;
  const [openGalleryId, setOpenGalleryId] = useState<number | null>(null);
  const currentLang = i18n.language;
  const toggleAccordion = (id: number) => {
    setOpenGalleryId(openGalleryId === id ? null : id);
  };
  const { data, error } = useGetAllGallery(currentLang);

  const [galleries, setGallery] = useState<GalleryResponse[]>([]);

  useEffect(() => {
    if (!data || data.length === 0) return;
    console.log({ data });
    const resultList = data;
    console.log({ resultList })
    setGallery(resultList);

  }, [data]);



  return (
    <>
      <Topbar />
      <Navbar />
      <Header
        imgBanner="https://zhubinshahyad.com/media/Files/img/About/Banner.png"
        txtTitleBanner={t("navigation.products")}
        menu={[
          { url: "/", desc: t("navigation.home") },
          { url: "/contact", desc: t("navigation.contact") },
        ]}
      />
      <div className="container-fluid feature py-5">
        <div className="container py-5">
          <div
            className="section-title mb-5 wow fadeInUp"
            data-wow-delay="0.1s"
          >

          </div>

          <GenericSection items={galleries} nameField="title" descriptionField="desc" />


        </div>
      </div>
    </>
  );
};

export default GalleryPage;
