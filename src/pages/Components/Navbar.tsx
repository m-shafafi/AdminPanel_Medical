import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { NavLink, useLocation } from "react-router-dom";
import LanguageSwitcher from "./LanguageSwitcher";
import i18n from "i18n";
import useGetAllTrainingCategories from "hooks/useGetAllTrainingCategories";
import TrainingCategoriesListResponse from "common/entities/Education/TrainingCategoriesListResponse";

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

const categoryItem: CategoryItem[] = [
  {
    Id: 1,
    creationDateTime: "2025-05-19T07:11:01.908Z",
    modificationDateTime: "2025-05-19T07:11:01.908Z",
    creationDateTimeShamsi: "1404/02/29 07:09:02",
    modificationDateTimeShamsi: "1404/02/29 07:09:02",
    Name_FA: "ارتوپدی",
    Name_EN: "Orthopedics",
    Name_AR: "جراحة العظام",
    Description: "",
    Permalink: "",
    Active: true,
    Priority: 1,
    BannerUrl: "",
    IconUrl: "",
    ThumbnailUrl: "",
  },
  {
    Id: 2,
    creationDateTime: "2025-05-19T07:11:01.908Z",
    modificationDateTime: "2025-05-19T07:11:01.908Z",
    creationDateTimeShamsi: "1404/02/29 07:09:02",
    modificationDateTimeShamsi: "1404/02/29 07:09:02",
    Name_FA: "قلب و عروق",
    Name_EN: "heart and blood vessels",
    Name_AR: "القلب والأوعية الدموية",
    Description: "",
    Permalink: "",
    Active: true,
    Priority: 1,
    BannerUrl: "",
    IconUrl: "",
    ThumbnailUrl: "",
  },
  {
    Id: 3,
    creationDateTime: "2025-05-19T07:11:01.908Z",
    modificationDateTime: "2025-05-19T07:11:01.908Z",
    creationDateTimeShamsi: "1404/02/29 07:09:02",
    modificationDateTimeShamsi: "1404/02/29 07:09:02",
    Name_FA: "مدیریت درد",
    Name_EN: "Pain management",
    Name_AR: "إدارة الألم",
    Description: "",
    Permalink: "",
    Active: true,
    Priority: 1,
    BannerUrl: "",
    IconUrl: "",
    ThumbnailUrl: "",
  },
  {
    Id: 4,
    creationDateTime: "2025-05-19T07:11:01.908Z",
    modificationDateTime: "2025-05-19T07:11:01.908Z",
    creationDateTimeShamsi: "1404/02/29 07:09:02",
    modificationDateTimeShamsi: "1404/02/29 07:09:02",
    Name_FA: "جراحی اعصاب",
    Name_EN: "Neurosurgery",
    Name_AR: "جراحة المخ والأعصاب",
    Description: "",
    Permalink: "",
    Active: true,
    Priority: 1,
    BannerUrl: "",
    IconUrl: "",
    ThumbnailUrl: "",
  },
  {
    Id: 5,
    creationDateTime: "2025-05-19T07:11:01.908Z",
    modificationDateTime: "2025-05-19T07:11:01.908Z",
    Name_FA: "آندروسکوپی",
    Name_EN: "Endoscopy",
    Name_AR: "التنظير",
    Description: "",
    Permalink: "",
    Active: true,
    Priority: 1,
    BannerUrl: "",
    IconUrl: "",
    ThumbnailUrl: "",
  },
];

const getLocalizedValue = (item: CategoryItem, field: "Name") => {
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

// const { data, error } = useGetAllTrainingCategories();
// در خارج از یک تابع کامپوننت یا useEffect

//const [trainingCategories, setTrainingsCategories] = useState<TrainingCategoriesListResponse[]>([]);

// useEffect(() => {
//   if (!data || data.length === 0) return;

//setTrainingsCategories(data);
//console.log({data})

//}, [data]);

const Navbar= () => {
  const { t } = useTranslation();
  const location = useLocation();
  

  const { data, error } = useGetAllTrainingCategories();

  const [trainingCategories, setTrainingsCategories] = useState<
    TrainingCategoriesListResponse[]
  >([]);

  useEffect(() => {
    if (!data || data.length === 0) return;

    setTrainingsCategories(data);

  }, [data]);

  // بررسی فعال بودن صفحه محصولات
  const isProductPage = location.pathname.startsWith("/products");
  // بررسی RTL بودن زبان
  const isRtl = i18n.language === "fa-IR" || i18n.language === "ar-GB";

  // کلاس‌دهی ساده برای NavLink به‌صورت active / غیر active
  const getNavLinkClass = ({ isActive }: { isActive: boolean }) =>
    isActive ? "nav-item nav-link active" : "nav-item nav-link";

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white px-4 px-lg-5 py-3 py-lg-0">
      {/* سوییچ زبان */}
      <LanguageSwitcher />

      {/* لوگو (سمت چپ) */}

      {/* دکمهٔ موبایل (تُگل منو) */}
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarCollapse"
      >
        <span className="fa fa-bars" />
      </button>

      {/* بخش Collapsed لینک‌ها (وسط‌چین) */}
      <div
        className="collapse navbar-collapse justify-content-center"
        id="navbarCollapse"
      >
        <div className="navbar-nav mx-auto py-0">
          {/* لینک خانه */}
          <NavLink to="/" end className={getNavLinkClass}>
            {t("navigation.home")}
          </NavLink>
          {/* بقیه لینک‌ها */}
          <NavLink to="/about" className={getNavLinkClass}>
            {t("navigation.about")}
          </NavLink>
          {/* منوی کشویی محصولات */}
          <div className="nav-item dropdown">
            <span
              className={`nav-link dropdown-toggle ${isProductPage ? "active" : ""}`}
              data-bs-toggle="dropdown"
              role="button"
            >
              {t("navigation.products")}
            </span>
            {/* اینجا دقیقا همان .map قبلی شماست */}
            <div
              className={`dropdown-menu p-0 m-0 ${isRtl ? "text-end dropdown-menu-end" : "text-start"}`}
            >
              {categoryItem.map((item) => (
                <NavLink
                  key={item.Id}
                  to="/products"
                  state={item}
                  className="dropdown-item"
                >
                  {getLocalizedValue(item, "Name")}
                </NavLink>
              ))}
            </div>
          </div>

          {/* منوی کشویی محصولات */}
          <div className="nav-item dropdown">
            <span
              className={`nav-link dropdown-toggle ${isProductPage ? "active" : ""}`}
              data-bs-toggle="dropdown"
              role="button"
            >
              {t("navigation.education")}
            </span>
            {/* اینجا دقیقا همان .map قبلی شماست */}
            <div
              className={`dropdown-menu p-0 m-0 ${isRtl ? "text-end dropdown-menu-end" : "text-start"}`}
            >
              {trainingCategories && trainingCategories.map((value) => (
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

          <NavLink to="/catalogs" className={getNavLinkClass}>
            {t("navigation.catalogs")}
          </NavLink>
          <NavLink to="/gallery" className={getNavLinkClass}>
            {t("navigation.gallery")}
          </NavLink>
          <NavLink to="/NewsAndArticlesPage" className={getNavLinkClass}>
            {t("navigation.articles")}
          </NavLink>
          <NavLink to="/testimonials" className={getNavLinkClass}>
            {t("navigation.testimonials")}
          </NavLink>
          <NavLink to="/contact" className={getNavLinkClass}>
            {t("navigation.contact")}
          </NavLink>
        </div>

        <NavLink to="/" className="navbar-brand p-0 mx-3">
          <img
            src="assets/img/Logo.png"
            alt="محصول"
            style={{
              width: "6rem",
              height: "6rem",
              objectFit: "contain",
              border: "none",
              boxShadow: "none",
              outline: "none",
              background: "transparent",
              display: "block",
              margin: 0,
              padding: 0,
            }}
          />
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
