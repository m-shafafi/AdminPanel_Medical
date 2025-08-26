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
    <Box className="!relative !w-full" sx={{ minHeight: props.height ?? "300px" }}>
      {/* تصویر */}
      <img
        src={props.imgBanner}
        alt="Banner"
        className="!w-full !h-full !object-cover"
        style={{ maxHeight: props.height ?? "500px" }}
      />

      {/* overlay نیمه شفاف */}
      <Box
        className="absolute top-0 left-0 w-full h-full"
        sx={{ backgroundColor: "rgba(0,0,0,0.4)" }}
      />

      {/* متن روی تصویر */}
      {(props.txtTitleBanner || props.txtDescBanner) && (
        <Box
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 text-white"
          sx={{ maxWidth: "90%", textAlign: props.textAlignTxt ?? "center" }}
        >
          {/* عنوان */}
          {props.txtTitleBanner && (
            <Typography
              variant="h2"
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4"
            >
              {props.txtTitleBanner}
            </Typography>
          )}

          {/* Breadcrumb */}
          {props.menu && (
            <Box className="flex flex-wrap justify-center md:justify-start mb-2">
              {props.menu.map((item, index) => (
                <Box
                  key={index}
                  className="flex items-center text-white hover:text-blue-400"
                >
                  <Link to={item.url} className="hover:underline font-medium">
                    {item.desc}
                  </Link>
                  {index !== (props.menu?.length ?? 0) - 1 && (
                    <span className="mx-2 text-gray-300">/</span>
                  )}
                </Box>
              ))}
            </Box>
          )}

          {/* توضیح */}
          {props.txtDescBanner && (
            <Typography variant="body1" className="text-center md:text-left">
              {props.txtDescBanner}
            </Typography>
          )}
        </Box>
      )}
    </Box>
  );
};

export default Header;
