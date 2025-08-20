import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { NavLink, useLocation } from "react-router-dom";
import i18n from "i18n";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import useGetAllTrainingCategories from "hooks/useGetAllTrainingCategories";
import useGetAllCategoryProduct from "hooks/useGetAllCategoryProduct";
import TrainingCategoriesListResponse from "common/entities/Education/TrainingCategoriesListResponse";
import CategoryProductListResponse from "common/entities/Product/CategoryProductListResponse";
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
  const isRtl = i18n.language === "fa-IR" || i18n.language === "ar-GB";
  console.log({ isRtl })
  const { data: trainingData } = useGetAllTrainingCategories();
  const [trainingCategories, setTrainingCategories] = useState<TrainingCategoriesListResponse[]>([]);

  const { data: categoryProduct } = useGetAllCategoryProduct();
  const [productCategories, setProductCategories] = useState<CategoryProductListResponse[]>([]);

  useEffect(() => {
    console.log({ trainingData })
    console.log({ categoryProduct })
    if ((trainingData as TrainingCategoriesListResponse[])?.length) setTrainingCategories(trainingData as TrainingCategoriesListResponse[]);
    if ((categoryProduct as CategoryProductListResponse[])?.length) setProductCategories(categoryProduct as CategoryProductListResponse[]);
  }, [trainingData, categoryProduct]);

  const [anchorElProducts, setAnchorElProducts] = useState<null | HTMLElement>(null);
  const [anchorElEducation, setAnchorElEducation] = useState<null | HTMLElement>(null);
  const [mobileMenuAnchor, setMobileMenuAnchor] = useState<null | HTMLElement>(null);

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>, type: "products" | "education") => {
    if (type === "products") setAnchorElProducts(event.currentTarget);
    if (type === "education") setAnchorElEducation(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorElProducts(null);
    setAnchorElEducation(null);
    setMobileMenuAnchor(null);
  };

  const navLinks = [
    { label: t("navigation.home"), to: "/" },
    { label: t("navigation.about"), to: "/about" },
    { label: t("navigation.catalogs"), to: "/catalogs" },
    { label: t("navigation.gallery"), to: "/gallery" },
    { label: t("navigation.articles"), to: "/NewsAndArticlesPage" },
    { label: t("navigation.testimonials"), to: "/testimonials" },
    { label: t("navigation.contact"), to: "/contact" },
  ];

  return (
    <AppBar position="sticky" color="default" elevation={3}>
      <Toolbar sx={{ justifyContent: "space-between" }}>
        {/* Logo */}
        <NavLink to="/">
          <img
            src="https://zhubinshahyad.com/media/Files/img/Logo.png"
            alt="Logo"
            style={{ width: 64, height: 64, objectFit: "contain" }}
          />
        </NavLink>

        {/* Desktop Menu */}
        <Box sx={{
          display: "block",                // مثل flex
          flexDirection: "row-reverse",   // مثل flex-row-reverse
          textAlign: "right",             // مثل text-right
          gap: 2,                         // فاصله بین آیتم‌ها (مثل gap-4)
        }}>
          {navLinks.map((link) => (
            <Button
              key={link.to}
              component={NavLink}
              to={link.to}
              sx={{ color: "text.primary" }}
            >
              {link.label}
            </Button>
          ))}

          {/* Products Dropdown */}
          <Button
            onClick={(e) => handleMenuOpen(e, "products")}
            sx={{ color: "text.primary" }}
          >
            {t("navigation.products")}
          </Button>
          <Menu
            anchorEl={anchorElProducts}
            open={Boolean(anchorElProducts)}
            onClose={handleMenuClose}
            anchorOrigin={{ vertical: "bottom", horizontal: isRtl ? "right" : "left" }}
            transformOrigin={{ vertical: "top", horizontal: isRtl ? "right" : "left" }}
          >
            {productCategories.map((val) => (
              <MenuItem
                key={val.id}
                component={NavLink}
                to="/products"
                state={val}
                onClick={handleMenuClose}
              >
                {getLocalizedValue(val, "name")}
              </MenuItem>
            ))}
          </Menu>

          {/* Education Dropdown */}
          <Button
            onClick={(e) => handleMenuOpen(e, "education")}
            sx={{ color: "text.primary" }}
          >
            {t("navigation.education")}
          </Button>
          <Menu
            anchorEl={anchorElEducation}
            open={Boolean(anchorElEducation)}
            onClose={handleMenuClose}
            anchorOrigin={{ vertical: "bottom", horizontal: isRtl ? "right" : "left" }}
            transformOrigin={{ vertical: "top", horizontal: isRtl ? "right" : "left" }}
          >
            {trainingCategories.map((value) => (
              <MenuItem
                key={value.id}
                component={NavLink}
                to="/education"
                state={value}
                onClick={handleMenuClose}
              >
                {value.name}
              </MenuItem>
            ))}
          </Menu>

          {/* Language Switcher */}
          <LanguageSwitcher />
        </Box>

        {/* Mobile Menu */}
        <Box sx={{ display: { xs: "flex", md: "none" } }}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={(e) => setMobileMenuAnchor(e.currentTarget)}
          >
            <MenuIcon />
          </IconButton>
          <Menu
            anchorEl={mobileMenuAnchor}
            open={Boolean(mobileMenuAnchor)}
            onClose={handleMenuClose}
          >
            {navLinks.map((link) => (
              <MenuItem
                key={link.to}
                component={NavLink}
                to={link.to}
                onClick={handleMenuClose}
              >
                {link.label}
              </MenuItem>
            ))}
            {/* Products and Education can be nested here if needed */}
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
