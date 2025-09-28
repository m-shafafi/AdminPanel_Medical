import { useTranslation } from "react-i18next";
import Header from "../../Header/Header";
import Navbar from "pages/Components/navbar/Navbar";
import Topbar from "../../Components/Topbar";
import { useLocation } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";
import i18n from "i18n";
import { GalleryResponse } from "common/entities/Gallery/GalleryResponse";
import useGetAllGallery from "hooks/useGetAllGallery";
import GalleryGroup from "./GalleryScrollPage";
import GalleryScrollPage from "./GalleryScrollPage";



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

  const groupedGalleries = useMemo(() => {
    if (!galleries || galleries.length === 0) return [];
    const groups: Record<number, GalleryResponse[]> = {};
    galleries.forEach(item => {
      if (!groups[item.categoriesGalleryId]) {
        groups[item.categoriesGalleryId] = [];
      }
      groups[item.categoriesGalleryId].push(item);
    });

    return Object.entries(groups).map(([id, items]) => ({
      id: Number(id),
      items
    }));
  }, [galleries]);

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
        txtTitleBanner={t("navigation.gallery")}
        menu={[
          { url: "/", desc: t("navigation.home") },
          { url: "/contact", desc: t("navigation.contact") },
        ]}
      />
      <GalleryScrollPage galleries={galleries} />
    </>
  );
};

export default GalleryPage;
