import { useTranslation } from "react-i18next";
import Header from "../../Components/Header";
import Navbar from "pages/Components/navbar/Navbar";
import Topbar from "../../Components/Topbar";
import { useLocation } from "react-router-dom";
import useGetAllProducts from "../../../hooks/useGetAllProduct";
import React, { useEffect, useState } from "react";
import ProductListResponse from "common/entities/Product/ProductListResponse";
import i18n from "i18n";
import DownloadButton from "pages/Components/DownloadButton";
import CategoryProductListResponse from "common/entities/Product/CategoryProductListResponse";



const Products = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const state = location.state as CategoryProductListResponse;

  const { data, error } = useGetAllProducts();

  const [products, setProducts] = useState<ProductListResponse[]>([]);

  useEffect(() => {
    if (!data || data.length === 0) return;
    console.log({ data });
    const productsList = data.filter((p) => p.categoryId === state.id);
    setProducts(productsList);
  }, [data, state.id]);

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
  const getLocalizedValueCategury = (item: CategoryProductListResponse, field: "name") => {
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
        title={t("navigation.products")}
        
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

          <div className="g-4 justify-content-center">
            {products.map((product) => (
              <div
                key={product.id}
                className="col-md-12 col-lg-12 col-xl-12 wow fadeInUp"
                data-wow-delay={getLocalizedValue(product, "name")}
              >
                <div className="row-cols-1 mb-4 feature-item p-4">
                  <div className="col-12">
                    <div className="feature-icon mb-4">
                      <div className="p-10 d-inline-flex bg-white rounded">
                        <img
                          src={product.imageURL}
                          alt={getLocalizedValue(product, "name")}
                          style={{ width: "20rem", height: "20rem" }}
                        />
                      </div>
                      <div className="feature-content d-flex flex-column m-4">
                        <h2
                          className="mb-20 justify-content-center"
                          style={{ textAlign: "center", marginBottom: "3rem" }}
                        >
                          {product.name_FA}
                        </h2>
                        <p className="mb-0">
                          {getLocalizedValue(product, "description")}
                        </p>
                                <div className="text-center mt-4">
                    
                        
                      </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* <div className="col-12 text-center wow fadeInUp" data-wow-delay="0.2s">
              <a href="#" className="btn btn-primary rounded-pill text-white py-3 px-5">
                More Details
              </a>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
