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
import useIsMobile from "pages/useIsMobile";



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

  const isMobile = useIsMobile(); // true/false


  return (
    <>
      <Topbar />
      <Navbar />
      <Header
        claasNameTitleBanner={isMobile
          ? "absolute top-2/4  left-1/2 -translate-x-1/2 -translate-y-1/2  md:-translate-x-0"
          : "absolute top-1/4  left-1/2 -translate-x-1/2 -translate-y-1/2  md:-translate-x-0"
        }
        imgBannerClassName="w-full h-5/6 object-cover [mask-image:linear-gradient(to_right,transparent,black)] [mask-repeat:no-repeat]"
        textAlignTxt="center"
        imgBanner="https://zhubinshahyad.com/media/Files/img/About/BannerGallery.jpg"
        txtTitleBanner={t("navigation.gallery")}
        menu={[
          { url: "/", desc: t("navigation.home") },
          { url: "/contact", desc: t("navigation.contact") },
        ]}
        height="50%"
      />
      <GalleryScrollPage galleries={galleries} />
    </>
  );
};

export default GalleryPage;
