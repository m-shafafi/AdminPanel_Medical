// components/LanguageSwitcher.tsx
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const languages = [
  { code: "fa-IR", label: "FA", flag: "🇮🇷" },
  { code: "en-GB", label: "EN", flag: "🇬🇧" },
  { code: "ar-GB", label: "AR", flag: "🇸🇦" },
];

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [lang, setLang] = useState(i18n.language);

  useEffect(() => {
    const isRTL = lang === "fa-IR" || lang === "ar-GB";
    document.documentElement.dir = isRTL ? "ltr" : "rtl";
    document.documentElement.lang = lang;
  }, [lang]);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedLang = e.target.value;
    i18n.changeLanguage(selectedLang);
    localStorage.setItem("i18nextLng", selectedLang);
    setLang(selectedLang);
  };

  return (
    <div className="relative inline-block">
      <select
  value={lang}
  onChange={handleChange}
  className="appearance-none bg-transparent px-3 py-1 text-blue-950 focus:outline-none border-none"
  style={{ fontSize: "1rem" }}
>
  {languages.map(({ code, label, flag }) => (
    <option key={code} value={code}>
      {flag} {label}
    </option>
  ))}
</select>

    </div>
  );
};

export default LanguageSwitcher;