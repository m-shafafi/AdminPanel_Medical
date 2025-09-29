import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import useMediaQuery from "@mui/material/useMediaQuery";

const languages = [
  { code: "fa-IR", label: "FA", flag: "🇮🇷" },
  { code: "en-GB", label: "EN", flag: "🇬🇧" },
  { code: "ar-GB", label: "AR", flag: "🇸🇦" },
];

interface Props {
  onSelect?: () => void; // برای موبایل: بستن منو بعد انتخاب
}

const LanguageSwitcher: React.FC<Props> = ({ onSelect }) => {
  const { i18n } = useTranslation();
  const [lang, setLang] = useState(i18n.language);
  const isMobile = useMediaQuery("(max-width:960px)"); // xs + sm + md

  useEffect(() => {
    const isRTL = lang === "fa-IR" || lang === "ar-GB";
    document.documentElement.dir = isRTL ? "rtl" : "ltr";
    document.documentElement.lang = lang;
  }, [lang]);

  const handleChange = (code: string) => {
    i18n.changeLanguage(code);
    localStorage.setItem("i18nextLng", code);
    setLang(code);
    if (onSelect) onSelect();
  };

  if (isMobile) {
    // حالت موبایل: دکمه‌های پرچم
    return (
      <Box sx={{ display: "flex", justifyContent: "center", gap: 1, my: 1 }}>
        {languages.map(({ code, label, flag }) => (
          <Button
            key={code}
            onClick={() => handleChange(code)}
            variant={lang === code ? "contained" : "outlined"}
            sx={{ minWidth: 50, fontSize: "1rem", fontWeight: "bold", borderRadius: 1 }}
          >
            {flag} {label}
          </Button>
        ))}
      </Box>
    );
  }

  // حالت وب: سلکت
  return (
    <select
      value={lang}
      onChange={(e) => handleChange(e.target.value)}
      className="appearance-none bg-transparent px-3 py-1 text-blue-950 focus:outline-none border-none"
      style={{ fontSize: "1rem" }}
    >
      {languages.map(({ code, label, flag }) => (
        <option key={code} value={code}>
          {flag} {label}
        </option>
      ))}
    </select>
  );
};

export default LanguageSwitcher;
