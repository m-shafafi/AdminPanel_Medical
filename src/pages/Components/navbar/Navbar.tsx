import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import i18n from "i18n";
import {
  AppBar,
  Toolbar,
  IconButton,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  Collapse,
  Box,
  Button,
  Menu,
  MenuItem,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
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
    default:
      return item[`${field}_FA`];
  }
};

const Navbar = () => {
  const { t } = useTranslation();
  const isRtl = i18n.language === "fa-IR" || i18n.language === "ar-GB";
  const location = useLocation();

  const { data: trainingData } = useGetAllTrainingCategories();
  const [trainingCategories, setTrainingCategories] = useState<TrainingCategoriesListResponse[]>([]);
  const { data: categoryProduct } = useGetAllCategoryProduct();
  const [productCategories, setProductCategories] = useState<CategoryProductListResponse[]>([]);

  useEffect(() => {
    if (trainingData?.length) setTrainingCategories(trainingData as TrainingCategoriesListResponse[]);
    if (categoryProduct?.length) setProductCategories(categoryProduct as CategoryProductListResponse[]);
  }, [trainingData, categoryProduct]);

  // Mobile Drawer
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [educationOpen, setEducationOpen] = useState(false);

  // Desktop Menu Anchors
  const [anchorProducts, setAnchorProducts] = useState<null | HTMLElement>(null);
  const [anchorEducation, setAnchorEducation] = useState<null | HTMLElement>(null);

  const otherLinks = [
    { label: t("navigation.catalogs"), to: "/catalogs" },
    { label: t("navigation.gallery"), to: "/gallery" },
    { label: t("navigation.articles"), to: "/NewsAndArticlesPage" },
    { label: t("navigation.about"), to: "/about" },
    { label: t("navigation.contact"), to: "/contact" },
  ];
  const navItemStyle = (isActive: boolean) => ({
    fontSize: "18px",
    fontWeight: isActive ? 700 : 500,
    color: isActive ? "#1976d2" : "black",
    textDecoration: "none",
    "&:hover": { color: "#1976d2" },
  });
  return (
    <>
      {/* AppBar */}
      <AppBar position="sticky" sx={{ backgroundColor: "white", boxShadow: "0 4px 12px rgba(0,0,0,0.08)" }}>
        <Toolbar
          className={isRtl ? "mr-6" : "ml-6"}
          sx={{ display: "flex", justifyContent: "space-between", minHeight: 80 }}
        >
          {/* Mobile Menu Button */}
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton onClick={() => setDrawerOpen(true)}>
              <MenuIcon />
            </IconButton>
          </Box>

          {/* Logo همیشه وسط موبایل */}
          <Box
            component="img"
            src="https://zhubinshahyad.com/media/Files/img/Logo.png"
            alt="Logo"
            sx={{
              display: { xs: "flex", md: "none" },
              width: 70,
              height: 70,
              objectFit: "cover",
            }}
          />

          {/* Desktop Links */}
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 3, alignItems: "center", direction: isRtl ? "rtl" : "ltr" }}>
            {/* Home */}
            <NavLink to="/" style={{ textDecoration: "none" }}>
              <Box
                sx={{
                  color: location.pathname === "/" ? "#1976d2" : "black",
                  fontWeight: location.pathname === "/" ? 700 : 500,
                  "&:hover": { color: "#1976d2" },
                }}
              >
                {t("navigation.home")}
              </Box>
            </NavLink>

            {/* Products */}
            <Box

              sx={{
                cursor: "pointer",
                ...navItemStyle(location.pathname === "/products"),
              }}
              onClick={(e) => setAnchorProducts(e.currentTarget)}
            >
              {t("navigation.products")}
            </Box>
            <Menu
              anchorEl={anchorProducts}
              open={Boolean(anchorProducts)}
              onClose={() => setAnchorProducts(null)}
              anchorOrigin={{ vertical: "bottom", horizontal: isRtl ? "right" : "left" }}
              transformOrigin={{ vertical: "top", horizontal: isRtl ? "right" : "left" }}
            >
              {productCategories.map(item => {
                const isActive = location.pathname === "/products" && location.state?.id === item.id;
                return (
                  <MenuItem
                    key={item.id}
                    component={NavLink}
                    to="/products"
                    state={item}
                    onClick={() => setAnchorProducts(null)}
                    sx={navItemStyle(location.pathname === "/products" && location.state?.id === item.id)}

                  >
                    {getLocalizedValue(item, "name")}
                  </MenuItem>
                );
              })}
            </Menu>

            {/* Education */}
            <Box
              sx={{
                cursor: "pointer",
                ...navItemStyle(location.pathname === "/education"),
              }}
              onClick={(e) => setAnchorEducation(e.currentTarget)}
            >
              {t("navigation.education")}
            </Box>
            <Menu
              anchorEl={anchorEducation}
              open={Boolean(anchorEducation)}
              onClose={() => setAnchorEducation(null)}
              anchorOrigin={{ vertical: "bottom", horizontal: isRtl ? "right" : "left" }}
              transformOrigin={{ vertical: "top", horizontal: isRtl ? "right" : "left" }}
            >
              {trainingCategories.map(item => {
                const isActive = location.pathname === "/education" && location.state?.id === item.id;
                return (
                  <MenuItem
                    key={item.id}
                    component={NavLink}
                    to="/education"
                    state={item}
                    onClick={() => setAnchorEducation(null)}
                    sx={navItemStyle(location.pathname === "/products" && location.state?.id === item.id)}

                  >
                    {item.name}
                  </MenuItem>
                );
              })}
            </Menu>

            {/* Other Links */}
            {otherLinks.map(link => {
              const isActive = location.pathname === link.to;
              return (
                <NavLink key={link.to} to={link.to} style={{ textDecoration: "none" }}>
                  <Box sx={navItemStyle(isActive)}>{link.label}</Box>
                </NavLink>
              );
            })}
          </Box>

          {/* LanguageSwitcher + Logo */}
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <LanguageSwitcher />
            <Box
              component="img"
              src="https://zhubinshahyad.com/media/Files/img/Logo.png"
              alt="Logo"
              sx={{ width: 100, height: 100, objectFit: "cover" }}
            />
          </Box>
        </Toolbar>

      </AppBar>

      {/* Mobile Drawer */}

      <Drawer
        anchor={isRtl ? "right" : "left"}
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        PaperProps={{ sx: { width: 250, direction: isRtl ? "rtl" : "ltr" } }}
      >

        <Box sx={{ px: 2, py: 1 }}>
          <LanguageSwitcher onSelect={() => setDrawerOpen(false)} />
        </Box>
        <List>
          {/* Home */}
          <ListItemButton
            component={NavLink}
            to="/"
            onClick={() => setDrawerOpen(false)}
            sx={{
              color: location.pathname === "/" ? "#1976d2" : "black",
              fontWeight: location.pathname === "/" ? 500 : 400,
            }}
          >
            <ListItemText primary={t("navigation.home")} />
          </ListItemButton>

          {/* Products */}
          <ListItemButton onClick={() => setProductsOpen(!productsOpen)}>
            <ListItemText primary={t("navigation.products")} />
            <ExpandMoreIcon sx={{ transform: productsOpen ? "rotate(180deg)" : "rotate(0deg)", transition: "0.25s" }} />
          </ListItemButton>
          <Collapse in={productsOpen} timeout="auto" unmountOnExit>
            {productCategories.map(item => (
              <ListItemButton
                key={item.id}
                component={NavLink}
                to="/products"
                state={item}
                onClick={() => setDrawerOpen(false)}
                sx={{ pl: 4, color: location.pathname === "/products" && location.state?.id === item.id ? "#1976d2" : "black" }}
              >
                <ListItemText primary={getLocalizedValue(item, "name")} />
              </ListItemButton>
            ))}
          </Collapse>

          {/* Education */}
          <ListItemButton onClick={() => setEducationOpen(!educationOpen)}>
            <ListItemText primary={t("navigation.education")} />
            <ExpandMoreIcon sx={{ transform: educationOpen ? "rotate(180deg)" : "rotate(0deg)", transition: "0.25s" }} />
          </ListItemButton>
          <Collapse in={educationOpen} timeout="auto" unmountOnExit>
            {trainingCategories.map(item => (
              <ListItemButton
                key={item.id}
                component={NavLink}
                to="/education"
                state={item}
                onClick={() => setDrawerOpen(false)}
                sx={{ pl: 4, color: location.pathname === "/education" && location.state?.id === item.id ? "#1976d2" : "black" }}
              >
                <ListItemText primary={item.name} />
              </ListItemButton>
            ))}
          </Collapse>

          {/* Other Links */}
          {otherLinks.map(link => (
            <ListItemButton
              key={link.to}
              component={NavLink}
              to={link.to}
              onClick={() => setDrawerOpen(false)}
              sx={{
                color: location.pathname === link.to ? "#1976d2" : "black",
                fontWeight: location.pathname === link.to ? 500 : 400,
              }}
            >
              <ListItemText primary={link.label} />
            </ListItemButton>
          ))}
        </List>
      </Drawer>
    </>
  );
};

export default Navbar;
