import React from "react";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

type MenuItem = {
  url: string;
  desc: string;
};

type Props = {
  txtTitleBanner?: string;
  txtDescBanner?: string;
  menu?: MenuItem[];
  imgBanner: string;
  textAlignTxt?: "left" | "center" | "right";
  height?: string;
};

const Header = (props: Props) => {
  return (
    <Box
      className="relative w-full"
      sx={{ height: props.height ?? { xs: "250px", sm: "350px", md: "500px" } }}
    >
      {/* تصویر */}
      <img
        src={props.imgBanner}
        alt="Banner"
        className="w-full h-full object-cover"
      />

      {/* overlay نیمه شفاف */}
      <Box
        className="absolute top-0 left-0 w-full h-full"
      />

      {/* متن روی تصویر */}
      {(props.txtTitleBanner || props.txtDescBanner) && (
        <Box
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          sx={{ maxWidth: "90%", textAlign: props.textAlignTxt ?? "center" }}
        >
          {/* عنوان */}
          {props.txtTitleBanner && (
            <Typography
              variant="h2"
              sx={{
                fontWeight: 800,
                color: "black",
                mb: 1,
                fontSize: { xs: "1.5rem", sm: "2.5rem", md: "3rem" },
              }}
            >
              {props.txtTitleBanner}
            </Typography>
          )}

          {/* Breadcrumb */}
          {props.menu && (
            <Box
              className="flex flex-wrap justify-center md:justify-start gap-2 mb-2"
            >
              {props.menu?.map((item, index) => (
                <Box
                  key={index}
                  className="flex items-center !text-blue-950 hover:text-blue-700"
                  sx={{ fontWeight: 600 }}
                >
                  <Link to={item.url} className="hover:underline !text-blue-950">
                    {item.desc}
                  </Link>
                  {index !== (props.menu?.length ?? 0) - 1 && <span className="mx-1">/</span>}
                </Box>
              ))}
            </Box>
          )}

          {/* توضیح */}
          {props.txtDescBanner && (
            <Typography
              variant="body1"
              sx={{
                fontFamily: "'Vazirmatn', sans-serif", // فونت فارسی زیبا
                fontWeight: 700,                        // Bold
                fontSize: { xs: ".7rem", md: "1.2rem" }, // اندازه Responsive
                color: "#0f172a",                        // جایگزین text-blue-950
                textAlign: { xs: "center", md: props.textAlignTxt ?? "left" },
                lineHeight: 1.4,                        // فاصله خطوط بهتر
                letterSpacing: "0.5px",                 // فاصله حروف بهتر
              }}
            >
              {props.txtDescBanner}
            </Typography>

          )}
        </Box>
      )}
    </Box>
  );
};

export default Header;
