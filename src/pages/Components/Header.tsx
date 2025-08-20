import React from "react";
import { Link } from "react-router-dom";

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
  height?: string;
  width?: string;
};

const Header = (props: Props) => {
  return (
    <div className="container-fluid p-0">
      <div className="position-relative w-100">
        <img
          src={props.imgBanner}
          alt="Banner"
          className="w-100 img-fluid"
          style={{
            minHeight: "200px",
            maxHeight: props.height ?? "400px",
            objectFit: "cover",
            width: props.width ?? "100%",
          }}
        />

        {(props.txtTitleBanner || props.txtDescBanner) && (
          <div
            className="position-absolute top-50 start-50 translate-middle text-white text-center p-2 p-md-3"
            style={{
              maxWidth: "90%",
              textAlign: props.textAlignTxt,
              textShadow: "2px 2px 6px rgba(0,0,0,0.7)",
            }}
          >
            {props.txtTitleBanner && (
              <>
                <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
                  {props.txtTitleBanner}
                </h1>
                {props.menu && (
                  <ol className="breadcrumb justify-content-center mb-2">
                    {props.menu.map((item, index) => (
                      <li key={index} className="breadcrumb-item">
                        <Link to={item.url} className="link-light">
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
              <h6 className="fw-light fs-6">{props.txtDescBanner}</h6>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
