
import React from "react";
import { Link } from "react-router-dom"; // ✅ Fix import

type Props = {
  title: string | "" ;
  txtTitleBanner?: string | "" | null;
  txtDescBanner?: string | "" | null;
  menu: MenuItem[] | null;
  imgBanner:string |"";
  textAlignTxt?: React.CSSProperties["textAlign"];

};
// تقریباً چیزی شبیه این است:
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
  url: string |"";
  desc: string |"";
};

const Header = (props: Props) => {
  return (
    <div className="container-fluid ">
      {/* <div className="ls-slide-backgrounds"> */}

<div className="ls-bg-wrap">
    <img src={props.imgBanner} className="ls-slide-backgrounds" />
</div>   
  <div className="banner-text " style={{ maxWidth: '900px',textAlign:props.textAlignTxt }}>
        <h3 className=" display-3 TitleBanner mb-5 wow fadeInDown" data-wow-delay="0.1s">
          {props.txtTitleBanner}
        </h3>
        <h6 className="DescBanner">{props.txtDescBanner}</h6>
        </div>

      <div className="banner-text container text-center py-5" style={{ maxWidth: '900px',textAlign:props.textAlignTxt}}>
        <h3 className=" display-3 mb-4 wow fadeInDown" data-wow-delay="0.1s">
          {props.title}
        </h3>
        <ol className="breadcrumb justify-content-center mb-0 wow fadeInDown" data-wow-delay="0.3s">
    {props.menu?.map((item, index) => (
  <li key={index} className="inline-block">
    <Link to={item.url} className="nav-item link-dark active">
      {item.desc}
    </Link>
    {index < (props.menu?.length ?? 0) - 1 && (
      <span className="mx-2 text-gray-400">/</span>
    )}
  </li>
))}


          
        </ol>
      </div>
    </div>
        // </div>
  );
};

export default Header;
