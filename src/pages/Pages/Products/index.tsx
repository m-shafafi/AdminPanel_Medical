import { useTranslation } from "react-i18next";
import Header from "../../Header/Header";
import Navbar from "pages/Components/navbar/Navbar";
import Topbar from "../../Components/Topbar";
import { useLocation } from "react-router-dom";
import useGetAllProducts from "../../../hooks/useGetAllProduct";
import React, { useEffect, useState } from "react";
import ProductListResponse from "common/entities/Product/ProductListResponse";
import i18n from "i18n";
import CategoryProductListResponse from "common/entities/Product/CategoryProductListResponse";
import GenericSection from "../../Components/Generic/GenericSection";



const Products = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const state = location.state as CategoryProductListResponse;
  const [openProductId, setOpenProductId] = useState<number | null>(null);

  const toggleAccordion = (id: number) => {
    setOpenProductId(openProductId === id ? null : id);
  };
  const { data, error } = useGetAllProducts();

  const [products, setProducts] = useState<ProductListResponse[]>([]);

  useEffect(() => {
    if (!data || data.length === 0) return;
    console.log({ data });
    const productsList = data.filter((p) => p.categoryId === state.id);
    setProducts(productsList);
  }, [data, state.id]);


  const getLocalizedValueCategury = (item: CategoryProductListResponse, field: "name") => {
    console.log({ item })
    switch (i18n.language) {
      case "en-GB":
        return item[`${field}_EN`];
      case "ar-GB":
        return item[`${field}_AR`];
      case "fa-IR":
      default:
        return item[`${field}_FA`];
    }
  };
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
            <div className="sub-style">
              <h1
                className="sub-title px-3 mb-0 font-black"
                style={{ fontSize: "6rem" }}
              >
                {getLocalizedValueCategury(state, "name")}
              </h1>
            </div>
          </div>

          <GenericSection items={products} nameField="name" descriptionField="description" />


        </div>
      </div>
    </>
  );
};

export default Products;
