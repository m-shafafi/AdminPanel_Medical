import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import i18n from "i18n";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import useGetAllTrainingCategories from "hooks/useGetAllTrainingCategories";
import useGetAllCategoryProduct from "hooks/useGetAllCategoryProduct";
import TrainingCategoriesListResponse from "common/entities/Education/TrainingCategoriesListResponse";
import CategoryProductListResponse from "common/entities/Product/CategoryProductListResponse";
import LanguageSwitcher from "../LanguageSwitcher";

const getLocalizedValue = (item: CategoryProductListResponse, field: "name") => {
  switch (i18n.language) {
    case "en-GB": return item[`${field}_EN`];
    case "ar-GB": return item[`${field}_AR`];
    default: return item[`${field}_FA`];
  }
};

const Navbar = () => {
  const { t } = useTranslation();
  const isRtl = i18n.language === "fa-IR" || i18n.language === "ar-GB";

  const { data: trainingData } = useGetAllTrainingCategories();
  const [trainingCategories, setTrainingCategories] = useState<TrainingCategoriesListResponse[]>([]);
  const { data: categoryProduct } = useGetAllCategoryProduct();
  const [productCategories, setProductCategories] = useState<CategoryProductListResponse[]>([]);

  useEffect(() => {
    if (trainingData?.length) setTrainingCategories(trainingData as TrainingCategoriesListResponse[]);
    if (categoryProduct?.length) setProductCategories(categoryProduct as CategoryProductListResponse[]);
  }, [trainingData, categoryProduct]);

  const [anchorProducts, setAnchorProducts] = useState<null | HTMLElement>(null);
  const [anchorEducation, setAnchorEducation] = useState<null | HTMLElement>(null);
  const [mobileAnchor, setMobileAnchor] = useState<null | HTMLElement>(null);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const [mobileEducationOpen, setMobileEducationOpen] = useState(false);

  const handleOpen = (event: React.MouseEvent<HTMLElement>, type: "products" | "education") => {
    if (type === "products") setAnchorProducts(event.currentTarget);
    if (type === "education") setAnchorEducation(event.currentTarget);
  };
  const handleClose = () => { setAnchorProducts(null); setAnchorEducation(null); setMobileAnchor(null); };

  const navLinks = [
    { label: t("navigation.home"), to: "/" },
    { label: t("navigation.about"), to: "/about" },
    { label: t("navigation.catalogs"), to: "/catalogs" },
    { label: t("navigation.gallery"), to: "/gallery" },
    { label: t("navigation.articles"), to: "/NewsAndArticlesPage" },
    { label: t("navigation.contact"), to: "/contact" },
  ];

  return (
    <AppBar position="sticky" elevation={6} sx={{ backgroundColor: "white", borderRadius: 2, px: { xs: 2, md: 4 }, py: 1, boxShadow: "0 4px 12px rgba(0,0,0,0.08)" }}>
      <Toolbar sx={{ justifyContent: "space-between" }}>
        {/* Logo */}
        <NavLink to="/">
          <img src="https://zhubinshahyad.com/media/Files/img/Logo.png" alt="Logo" style={{ width: 72, height: 72, objectFit: "contain" }} />
        </NavLink>

        {/* Desktop Menu */}
        <Box sx={{ display: { xs: "none", md: "flex" }, gap: 3, alignItems: "center", flexDirection: isRtl ? "row" : "row-reverse" }}>
          {navLinks.map(link => (
            <Button key={link.to} component={NavLink} to={link.to}
              sx={{ color: "text.primary", fontWeight: 500, textTransform: "none", transition: "all 0.3s", "&:hover": { color: "primary.main", transform: "scale(1.05)" } }}>
              {link.label}
            </Button>
          ))}

          <Button sx={{ fontWeight: 500 }} onClick={(e) => handleOpen(e, "products")}>{t("navigation.products")}</Button>
          <Menu anchorEl={anchorProducts} open={Boolean(anchorProducts)} onClose={handleClose} 
            PaperProps={{ sx: { borderRadius: 2, px: 1, py: 1, boxShadow: "0 8px 20px rgba(0,0,0,0.1)" } }}
            anchorOrigin={{ vertical: "bottom", horizontal: isRtl ? "left" : "right" }}
            transformOrigin={{ vertical: "top", horizontal: isRtl ? "left" : "right" }}>
            {productCategories?.map(item => (
              <MenuItem key={item.id} component={NavLink} to="/products" state={item} sx={{ "&:hover": { backgroundColor: "primary.light" } }} onClick={handleClose}>
                {getLocalizedValue(item, "name")}
              </MenuItem>
            ))}
          </Menu>

          <Button sx={{ fontWeight: 500 }} onClick={(e) => handleOpen(e, "education")}>{t("navigation.education")}</Button>
          <Menu anchorEl={anchorEducation} open={Boolean(anchorEducation)} onClose={handleClose}
            PaperProps={{ sx: { borderRadius: 2, px: 1, py: 1, boxShadow: "0 8px 20px rgba(0,0,0,0.1)" } }}
            anchorOrigin={{ vertical: "bottom", horizontal: isRtl ? "left" : "right" }}
            transformOrigin={{ vertical: "top", horizontal: isRtl ? "left" : "right" }}>
            {trainingCategories?.map(item => (
              <MenuItem key={item.id} component={NavLink} to="/education" state={item} sx={{ "&:hover": { backgroundColor: "primary.light" } }} onClick={handleClose}>
                {item.name}
              </MenuItem>
            ))}
          </Menu>

          <LanguageSwitcher />
        </Box>

        {/* Mobile Hamburger Menu */}
        <Box sx={{ display: { xs: "flex", md: "none" } }}>
          <IconButton onClick={(e) => setMobileAnchor(e.currentTarget)}><MenuIcon /></IconButton>
          <Menu anchorEl={mobileAnchor} open={Boolean(mobileAnchor)} onClose={handleClose}
            PaperProps={{ sx: { borderRadius: 2, px: 2, py: 2, minWidth: 220, boxShadow: "0 8px 20px rgba(0,0,0,0.15)" } }}>
            {navLinks?.map(link => (
              <MenuItem key={link.to} component={NavLink} to={link.to} onClick={handleClose}>{link.label}</MenuItem>
            ))}

            {/* Products accordion */}
            <MenuItem onClick={() => setMobileProductsOpen(prev => !prev)}>{t("navigation.products")}</MenuItem>
            <Collapse in={mobileProductsOpen} timeout="auto" unmountOnExit>
              {productCategories?.map(item => (
                <MenuItem key={item.id} component={NavLink} to="/products" state={item} onClick={handleClose} sx={{ pl: 4 }}>
                  {getLocalizedValue(item, "name")}
                </MenuItem>
              ))}
            </Collapse>

            {/* Education accordion */}
            <MenuItem onClick={() => setMobileEducationOpen(prev => !prev)}>{t("navigation.education")}</MenuItem>
            <Collapse in={mobileEducationOpen} timeout="auto" unmountOnExit>
              {trainingCategories?.map(item => (
                <MenuItem key={item.id} component={NavLink} to="/education" state={item} onClick={handleClose} sx={{ pl: 4 }}>
                  {item.name}
                </MenuItem>
              ))}
            </Collapse>
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
