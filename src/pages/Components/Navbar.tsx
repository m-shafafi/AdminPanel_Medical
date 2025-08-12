import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { NavLink, useLocation } from "react-router-dom";
import LanguageSwitcher from "./LanguageSwitcher";
import i18n from "i18n";
import useGetAllTrainingCategories from "hooks/useGetAllTrainingCategories";
import TrainingCategoriesListResponse from "common/entities/Education/TrainingCategoriesListResponse";
import CategoryProductListResponse from "common/entities/Product/CategoryProductListResponse";
import useGetAllCategoryProduct from "hooks/useGetAllCategoryProduct";


const getLocalizedValue = (item: CategoryProductListResponse, field: "name") => {
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


const Navbar = () => {
  const { t } = useTranslation();
  const location = useLocation();

   // بررسی فعال بودن صفحه محصولات
  const isProductPage = location.pathname.startsWith("/products");
    // بررسی RTL بودن زبان
  const isRtl = i18n.language === "fa-IR" || i18n.language === "ar-GB";

  // دریافت دسته‌بندی‌ها
  const { data: trainingData, error:errorTraning, isLoading: isLoadingTraining} = useGetAllTrainingCategories();
  const [trainingCategories, setTrainingCategories] = useState<TrainingCategoriesListResponse[]>([]);

  // دریافت دسته‌بندی‌ محصولات
  const { data: categoryProduct, error:errorProductCategory, isLoading:isLoadingProductCategory } = useGetAllCategoryProduct();
  const [productCategories, setProductCategories] = useState<CategoryProductListResponse[]>([]);

  useEffect(() => {
    if (trainingData && trainingData.length > 0) {
      setTrainingCategories(trainingData);
    }

    console.log({categoryProduct})
    if (categoryProduct && categoryProduct.length > 0) {
      setProductCategories(categoryProduct);
    }
  }, [trainingData,categoryProduct]);




  const getNavLinkClass = ({ isActive }: { isActive: boolean }) =>
    isActive ? "nav-item nav-link active" : "nav-item nav-link";

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white px-4 px-lg-5 py-3 py-lg-0">
      {/* لوگو */}
      <NavLink to="/" className="navbar-brand p-0">
        <img
          src="assets/img/Logo.png"
          alt="Logo"
          style={{ width: "5rem", height: "5rem", objectFit: "contain" }}
        />
      </NavLink>

      {/* سوییچ زبان */}
      <LanguageSwitcher />

      {/* دکمه موبایل */}
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarCollapse"
      >
        <span className="fa fa-bars" />
      </button>

      {/* لینک‌ها */}
      <div className="collapse navbar-collapse justify-content-center" id="navbarCollapse">
        <div className="navbar-nav mx-auto py-0">
          <NavLink to="/" end className={getNavLinkClass}>{t("navigation.home")}</NavLink>
          <NavLink to="/about" className={getNavLinkClass}>{t("navigation.about")}</NavLink>

          {/* محصولات */}
          <div className="nav-item dropdown">
            <span
              className={`nav-link dropdown-toggle ${isProductPage ? "active" : ""}`}
              data-bs-toggle="dropdown"
              role="button"
            >
              {t("navigation.products")}
            </span>
            <div className={`dropdown-menu p-0 m-0 ${isRtl ? "text-end dropdown-menu-end" : "text-start"}`}>
              {productCategories.map((val) => (
                <NavLink
                  key={val.id}
                  to="/products"
                  state={val}
                  className="dropdown-item"
                >
                  {getLocalizedValue(val, "name")}
                </NavLink>
              ))}
            </div>
          </div>

          {/* آموزش */}
          <div className="nav-item dropdown">
            <span className="nav-link dropdown-toggle" data-bs-toggle="dropdown" role="button">
              {t("navigation.education")}
            </span>
            <div className={`dropdown-menu p-0 m-0 ${isRtl ? "text-end dropdown-menu-end" : "text-start"}`}>
              {/* {isLoadingTraining && <span className="dropdown-item text-muted">{t("loading")}</span>}
              {errorTraning && <span className="dropdown-item text-danger">{t("error.loading")}</span>} */}
              {trainingCategories.map((value) => (
                <NavLink
                  key={value.id}
                  to="/education"
                  state={value}
                  className="dropdown-item"
                >
                  {value.name}
                </NavLink>
              ))}
            </div>
          </div>

          <NavLink to="/catalogs" className={getNavLinkClass}>{t("navigation.catalogs")}</NavLink>
          <NavLink to="/gallery" className={getNavLinkClass}>{t("navigation.gallery")}</NavLink>
          <NavLink to="/NewsAndArticlesPage" className={getNavLinkClass}>{t("navigation.articles")}</NavLink>
          <NavLink to="/testimonials" className={getNavLinkClass}>{t("navigation.testimonials")}</NavLink>
          <NavLink to="/contact" className={getNavLinkClass}>{t("navigation.contact")}</NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
