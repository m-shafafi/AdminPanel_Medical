import React, { useEffect, useState } from "react";
import Topbar from "pages/Components/Topbar";
import Navbar from "pages/Components/navbar/Navbar";
import Header from "pages/Header/Header";
import { useTranslation } from "react-i18next";
import useGetAllProducts from "../../../hooks/useGetAllProduct";
import { useLocation } from "react-router-dom";
import i18n from "i18n";
import CatalogCard from "pages/Components/Catalog/CatalogCard";
import "./CatalogPage.css";
import LoadingModal from "pages/Components/Loading/Loading";
import { ProductListResponse } from "common/entities/Product/ProductListResponse";

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

const CatalogPage = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const state = location.state as CategoryItem;

  const [products, setProducts] = useState<ProductListResponse[]>([]);
  const [loading, setLoading] = useState(true);
  const { data, error } = useGetAllProducts();

  useEffect(() => {
    if (data && data.length > 0) {
      setProducts(data);
    } else if (error) {
      console.error("Error loading products:", error);
    }
    setLoading(false);
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

  return (
    <>
      <Topbar />
      <Navbar />
      <Header
        claasNameTitleBanner="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  md:-translate-x-0"
        imgBannerClassName="w-full  object-cover [mask-image:linear-gradient(to_right,transparent,black)] [mask-repeat:no-repeat]"
        textAlignTxt="center"
        imgBanner="https://zhubinshahyad.com/media/Files/img/About/Banner.png"
        txtTitleBanner={t("navigation.catalogs")}
        menu={[
          { url: "/", desc: t("navigation.home") },
          { url: "/contact", desc: t("navigation.contact") },
        ]}
      />

      <div className="catalog-container">
        {/* Loader */}
        {loading && (
          <LoadingModal
            isOpen={true}
            message={t("Please wait, processing")}
          />
        )}

        {!loading && products.length === 0 && (
          <p className="no-items">{t("messages.noCatalog")}</p>
        )}

        {!loading && products.length > 0 && (
          <div className="catalog-grid">
            {products.map((item) =>
              item.catalogCoverImageUrl ? (
                <CatalogCard
                  key={item.id}
                  pdfUrl={item.catalogURL}
                  coverPdfUrl={item.catalogCoverImageUrl}
                  title={getLocalizedValue(item, "name")}
                  description={
                    getLocalizedValue(item, "description") || "No description"
                  }
                />
              ) : null
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default CatalogPage;
