import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { NavLink, useLocation } from "react-router-dom";
import i18n from "i18n";
import useGetAllTrainingCategories from "hooks/useGetAllTrainingCategories";
import TrainingCategoriesListResponse from "common/entities/Education/TrainingCategoriesListResponse";
import CategoryProductListResponse from "common/entities/Product/CategoryProductListResponse";
import useGetAllCategoryProduct from "hooks/useGetAllCategoryProduct";
import LanguageSwitcher from "../LanguageSwitcher";

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

  const isProductPage = location.pathname.startsWith("/products");
  const isRtl = i18n.language === "fa-IR" || i18n.language === "ar-GB";

  const { data: trainingData } = useGetAllTrainingCategories();
  const [trainingCategories, setTrainingCategories] = useState<TrainingCategoriesListResponse[]>([]);

  const { data: categoryProduct } = useGetAllCategoryProduct();
  const [productCategories, setProductCategories] = useState<CategoryProductListResponse[]>([]);

  useEffect(() => {
    if (trainingData?.length) setTrainingCategories(trainingData);
    if (categoryProduct?.length) setProductCategories(categoryProduct);
  }, [trainingData, categoryProduct]);

  const closeNavbar = () => {
    const navbarCollapse = document.getElementById("navbarCollapse");
    if (navbarCollapse?.classList.contains("show")) {
      navbarCollapse.classList.remove("show");
    }
  };

  const handleNavClick = () => {
    closeNavbar();
  };

  const getNavLinkClass = ({ isActive }: { isActive: boolean }) =>
    isActive ? "nav-item nav-link active" : "nav-item nav-link";

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white px-3 px-lg-5 py-2 py-lg-3 shadow-sm sticky-top">
      {/* لوگو */}
      <NavLink to="/" className="navbar-brand p-0">
        <img
          src="https://zhubinshahyad.com/media/Files/img/Logo.png"
          alt="Logo"
          style={{ width: "4rem", height: "4rem", objectFit: "contain" }}
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
        aria-controls="navbarCollapse"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="fa fa-bars" />
      </button>

      {/* لینک‌ها */}
      <div className="collapse navbar-collapse justify-content-center" id="navbarCollapse">
        <div className="navbar-nav mx-auto py-0">
          <NavLink onClick={handleNavClick} to="/" end className={getNavLinkClass}>
            {t("navigation.home")}
          </NavLink>
          <NavLink onClick={handleNavClick} to="/about" className={getNavLinkClass}>
            {t("navigation.about")}
          </NavLink>

          {/* محصولات */}
          <div className="nav-item dropdown">
            <span
              className={`nav-link dropdown-toggle ${isProductPage ? "active" : ""}`}
              data-bs-toggle="dropdown"
              role="button"
            >
              {t("navigation.products")}
            </span>
            <div className={`dropdown-menu w-100 w-lg-auto ${isRtl ? "text-end dropdown-menu-end" : ""}`}>
              {productCategories.map((val) => (
                <NavLink
                  key={val.id}
                  to="/products"
                  state={val}
                  className="dropdown-item"
                  onClick={handleNavClick}
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
            <div className={`dropdown-menu w-100 w-lg-auto ${isRtl ? "text-end dropdown-menu-end" : ""}`}>
              {trainingCategories.map((value) => (
                <NavLink
                  key={value.id}
                  to="/education"
                  state={value}
                  className="dropdown-item"
                  onClick={handleNavClick}
                >
                  {value.name}
                </NavLink>
              ))}
            </div>
          </div>

          <NavLink onClick={handleNavClick} to="/catalogs" className={getNavLinkClass}>
            {t("navigation.catalogs")}
          </NavLink>
          <NavLink onClick={handleNavClick} to="/gallery" className={getNavLinkClass}>
            {t("navigation.gallery")}
          </NavLink>
          <NavLink onClick={handleNavClick} to="/NewsAndArticlesPage" className={getNavLinkClass}>
            {t("navigation.articles")}
          </NavLink>
          <NavLink onClick={handleNavClick} to="/testimonials" className={getNavLinkClass}>
            {t("navigation.testimonials")}
          </NavLink>
          <NavLink onClick={handleNavClick} to="/contact" className={getNavLinkClass}>
            {t("navigation.contact")}
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
