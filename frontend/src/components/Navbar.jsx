// Navbar.jsx
import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../assets/Logos/singlelogo.png";
import { useLanguage } from "../context/LanguageContext";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { lang, toggleLang } = useLanguage();
  const isArabic = lang === "AR";

  // Translations
  const text = {
    EN: {
      home: "Home",
      about: "About Us",
      products: "Products",
      logistics: "Logistics",
      brand: "HASBANI",
      slogan: "Nature's Taste",
      switchLabel: "عربي",
    },
    AR: {
      home: "الصفحة الرئيسية",
      about: "من نحن",
      products: "المنتجات",
      logistics: "الخدمات اللوجستية",
      brand: "HASBANI",
      slogan: "Nature's Taste",
      switchLabel: "EN",
    },
  };

  const t = isArabic ? text.AR : text.EN;

  return (
    <nav
      className="w-full bg-white shadow-sm fixed top-0 left-0 z-50 transition-all duration-300"
      dir={isArabic ? "rtl" : "ltr"}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-20">
        {/* Logo & Name */}
        <div className={`flex items-center ${isArabic ? "flex-row-reverse" : ""}`}>
          <img
            src={logo}
            alt="Hasbani Logo"
            className="flex-none h-20 md:h-24 w-20 object-contain"
          />
          <div className={`${isArabic ? "text-right mr-2" : "text-left ml-2"}`}>
            <h1 className="mt-2 text-xl md:text-auto font-serif font-bold text-gray-900">
              {t.brand}
            </h1>
            <p className="md:text-auto text-gray-500 tracking-widest font-light">
              {t.slogan}
            </p>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className={`hidden md:flex items-center ${isArabic ? "space-x-reverse space-x-10" : "space-x-10"}`}>
          <Link to="/" className={`text-gray-800 hover:text-gray-600 ${isArabic ? "text-right" : ""}`}>
            {t.home}
          </Link>
          <Link to="/aboutus" className={`text-gray-800 hover:text-gray-600 ${isArabic ? "text-right" : ""}`}>
            {t.about}
          </Link>
          <Link to="/products" className={`text-gray-800 hover:text-gray-600 ${isArabic ? "text-right" : ""}`}>
            {t.products}
          </Link>
          <Link to="/logistics" className={`text-gray-800 hover:text-gray-600 ${isArabic ? "text-right" : ""}`}>
            {t.logistics}
          </Link>

          <span
            onClick={() => { toggleLang(); setMenuOpen(false); }}
            className="cursor-pointer font-light text-gray-700 hover:text-gray-500"
          >
            {isArabic ? "EN" : "عربي"}
          </span>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden flex items-center">
          <span
            onClick={() => { toggleLang(); setMenuOpen(false); }}
            className="mr-4 cursor-pointer font-light text-gray-700"
          >
            {isArabic ? "EN" : "عربي"}
          </span>
          <button onClick={() => setMenuOpen((s) => !s)} className="text-gray-700">
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
{menuOpen && (
  <div className="md:hidden bg-white border-t border-gray-200 shadow-sm" dir={isArabic ? "rtl" : "ltr"}>
    <div className={`flex flex-col space-y-3 py-4 px-4`}>
      <Link onClick={() => setMenuOpen(false)} to="/" className="text-gray-800 hover:text-gray-600">
        {t.home}
      </Link>
      <Link onClick={() => setMenuOpen(false)} to="/aboutus" className="text-gray-800 hover:text-gray-600">
        {t.about}
      </Link>
      <Link onClick={() => setMenuOpen(false)} to="/products" className="text-gray-800 hover:text-gray-600">
        {t.products}
      </Link>
      <Link onClick={() => setMenuOpen(false)} to="/logistics" className="text-gray-800 hover:text-gray-600">
        {t.logistics}
      </Link>
    </div>
  </div>
)}
    </nav>
  );
}
