import React, { useEffect, useState } from "react";
import Topbar from "pages/Components/Topbar";
import Navbar from "pages/Components/navbar/Navbar";
import Header from "pages/Components/Header";
import { useTranslation } from "react-i18next";
import ProductListResponse from "common/entities/Product/ProductListResponse";
import useGetAllProducts from "../../../hooks/useGetAllProduct";
import { useLocation } from "react-router-dom";
import i18n from "i18n";
import CatalogCard from "pages/Components/Catalog/CatalogCard";
import "./CatalogPage.css"; // styles for better design
import DownloadButton from "pages/Components/DownloadButton";
import { Document, Page } from "react-pdf";
import LoadingModal from "pages/Components/Loading/Loading";


export interface CategoryItem {
  Id: number;
  creationDateTime: string;
  modificationDateTime: string;
  creationDateTimeShamsi?: string;
  modificationDateTimeShamsi?: string;
  Name_FA: string;
  Name_EN: string;
  Name_AR: string;
  Description: string;
  Permalink: string;
  Active: boolean;
  Priority: number;
  BannerUrl: string;
  IconUrl: string;
  ThumbnailUrl: string;
}

const CatalogPage: React.FC = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const state = location.state as CategoryItem;

  const [products, setProducts] = useState<ProductListResponse[]>([]);
  const [loading, setLoading] = useState(true);
  const [numPages, setNumPages] = useState<number | null>(null);
  const { data, error } = useGetAllProducts();

  useEffect(() => {
    if (data && data.length > 0) {
      setProducts(data);
      setLoading(false);
    } else if (error) {
      console.error("Error loading products:", error);
      setLoading(false);
    }
  }, [data, error]);

  const getLocalizedValue = (
    product: ProductListResponse,
    field: "name" | "description"
  ) => {
    switch (i18n.language) {
      case "en-GB":
        return product[`${field}_EN`];
      case "ar-GB":
        return product[`${field}_AR`];
      case "fa-IR":
      default:
        return product[`${field}_FA`];
    }
  };

    const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
  };

  return (
    <>
      <Topbar />
      <Navbar />
      <Header
        imgBanner="https://zhubinshahyad.com/media/Files/img/About/Banner.jpg"
        title={t("navigation.catalogs")}
        txtTitleBanner={t("navigation.catalogs")}
        menu={[
          { url: "/", desc: t("navigation.home") },
          { url: "/contact", desc: t("navigation.contact") },
        ]}
      />

      <div className="catalog-container">


        {loading ? (
                <LoadingModal isOpen={loading} message={t("Please wait, processing")} />

        ) : products.length === 0 ? (
          <p className="no-items">{t("messages.noCatalog")}</p>
        ) : (
          <div className="catalog-grid">
           {products.map((item) => (  
            <>       
   <CatalogCard
    key={item.id}
    pdfUrl={item.catalogURL}
    coverPdfUrl={item.catalog_cover_image_url}
    title={getLocalizedValue(item, "name")}
    description={getLocalizedValue(item, "description") || "No description"}
  /> 
  </>

))}
          </div>
        )}
      </div>
    </>
  );
};

export default CatalogPage;
