import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

type TextAlign =
  | "left"
  | "right"
  | "center"
  | "justify"
  | "start"
  | "end"
  | "initial"
  | "inherit";

type MenuItem = {
  url: string;
  desc: string;
};

type Props = {
  title: string;
  txtTitleBanner?: string | null;
  txtDescBanner?: string | null;
  menu: MenuItem[] | null;
  imgBanner: string;
  textAlignTxt?: TextAlign;
};

const Header = (props: Props) => {
  return (
    <div className="container-fluid p-0">
      {/* بخش تصویر بنر */}
      <div className="position-relative w-100">
        <img
          src={props.imgBanner}
          alt="Banner"
          className="w-100 img-fluid"
          style={{ maxHeight: "400px", objectFit: "cover" }}
        />

        {/* متن روی بنر */}
        {(props.txtTitleBanner || props.txtDescBanner) && (
          <div
            className="position-absolute top-50 start-50 translate-middle text-white text-center p-3"
            style={{
              maxWidth: "900px",
              textAlign: props.textAlignTxt,
              textShadow: "2px 2px 6px rgba(0,0,0,0.7)",
            }}
          >
            {props.txtTitleBanner && (
              <>
              <h3 className="display-5 mb-3">{props.txtTitleBanner}</h3>
                {props.menu && (
          <ol className="breadcrumb justify-content-center mb-0">
            {props.menu.map((item, index) => (
              <li key={index} className="breadcrumb-item">
                <Link to={item.url} className="link-dark">
                  {item.desc}
                </Link>
                {index < (props.menu?.length ?? 0) - 1 && (
      <span className="mx-2 text-gray-400">/</span>
    )}
              </li>
            ))}
          </ol>
        )}
        </>
            )}
            {props.txtDescBanner && (
              <h6 className="fw-light">{props.txtDescBanner}</h6>
            )}
          </div>
        )}
      </div>


    </div>
  );
};

export default Header;
