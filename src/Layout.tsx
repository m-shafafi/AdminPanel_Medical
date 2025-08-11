import { useEffect, useState } from "react";
import { Outlet } from "react-router";
import i18n from "./i18n";
import React from "react";
import ApiConfigSingleton from "business/api-config-singleton.ts";
type LoadDependencies = {
  themeReady: boolean;
  configReady: boolean;
  showIframe: boolean;
};

export default function Layout() {
  const [loadDependencies, setLoadDependencies] = useState<LoadDependencies>({
    themeReady: false,
    configReady: false,
    showIframe: false
  });

useEffect(() => {
  fetch("/app-config.json")
    .then((res) => res.json())
    .then((apiConf) => {
      ApiConfigSingleton.initiateApiConfig(apiConf.serviceUrls);
      setLoadDependencies((prevValue) => ({
        ...prevValue,
        configReady: true
      }));
    });
}, []);



  // useEffect(() => {
  //   const lang = i18n.language;
  //   const isRTL = lang === "fa-IR" || lang === "ar-GB";
  //   document.documentElement.lang = lang;
  //   document.documentElement.dir = isRTL ? "rtl" : "ltr";
  // }, [i18n.language]);

   useEffect(() => {
    const currentLang = i18n.language;
    const dir = currentLang === "fa" || currentLang === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = currentLang;
    document.documentElement.dir = dir;
  }, [i18n.language]);

  if (!loadDependencies.configReady) {
    // می‌تونی اینجا یه لودینگ نمایش بدی یا null برگردونی تا config لود بشه
    return <div>در حال بارگذاری تنظیمات...</div>;
  }

  return (
    <>
      <Outlet />
    </>
  );
}

