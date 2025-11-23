import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";
import Logo from "../assets/Logos/singlelogo.png";
import WhatsLogo from "../assets/Logos/whatsLogo.png";
import { useLanguage } from "../context/LanguageContext"; 

const Footer = () => {
  const { lang } = useLanguage();
  const isArabic = lang === "AR";

  // ✅ Text for both languages
  const text = {
    EN: {
      brand: "HASBANI",
      slogan: "Nature’s Taste",
      quote: "From the heart of Hasbaya to the world — nature’s purity, shared with care.",
      navigation: "Navigation",
      home: "Home",
      about: "About Us",
      products: "Our Products",
      address: "Address",
      location: "Hasbaya, South Lebanon",
      postal: "Main Street, Postal Code: 1704",
      follow: "Follow Us",
      contact: "Get in Touch",
      email: "Email",
      phone: "Phone",
      rights: `© ${new Date().getFullYear()} Hasbani Nature’s Taste — All Rights Reserved`,
    },
    AR: {
      brand: "HASBANI",
      slogan: "Nature's Taste",
      quote: "من قلب حاصبيا إلى العالم — نقاء الطبيعة نشاركه بكل حب.",
      navigation: "التنقل",
      home: "الصفحة الرئيسية",
      about: "من نحن",
      products: "منتجاتنا",
      address: "العنوان",
      location: "حاصبيا، جنوب لبنان",
      postal: "الشارع الرئيسي، الرمز البريدي: ١٧٠٤",
      follow: "تابعنا",
      contact: "تواصل معنا",
      email: "البريد الإلكتروني",
      phone: "الهاتف",
      rights: `© ${new Date().getFullYear()} HASBANI Nature's Taste — جميع الحقوق محفوظة`,
    },
  };

  const t = isArabic ? text.AR : text.EN;

  return (
    <footer
      className={`relative bg-[#414A38] text-[#DDE3C1] py-6 px-6 md:px-20 overflow-hidden ${
        isArabic ? "text-right" : "text-left"
      }`}
      dir={isArabic ? "rtl" : "ltr"} // ✅ Switch direction dynamically
    >
      {/* Decorative glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(200,230,180,0.08),transparent_70%)] pointer-events-none"></div>

      {/* Footer Content */}
      <div className="relative flex flex-col md:flex-row md:items-start gap-8 z-10">

      {/* Logo + Text */}
      <div className="flex flex-col items-center mb-4 md:flex-2">
        <img
          src={Logo}
          alt="Hasbani Logo"
          className="h-16 sm:h-16 md:h-20 lg:h-24 w-auto drop-shadow-[0_0_20px_rgba(200,230,180,0.5)]"
        />
        <h2 className="text-l md:text-xl tracking-widest lg:text-xl font-bold font-serif text-[#DDE3C1] drop-shadow-lg mt-2">
          {t.brand}
        </h2>
        <span className="text-xs italic tracking-widest text-[#BFD18B]">
          {t.slogan}
        </span>
        <p className="text-sm italic leading-relaxed max-w-xs text-[#CFE3A8] mt-2 text-center">
          {t.quote}
        </p>
      </div>

{/* Navigation */}
<div className="flex flex-col md:flex-1">
  <h3 className="text-lg mb-4 font-serif font-semibold text-[#BFD18B] tracking-widest border-b border-[#BFD18B]/30 pb-1">
    {t.navigation}
  </h3>
  <a href="/" className="hover:text-[#DDE3C1] transition-colors mb-1">
    {t.home}
  </a>
  <a href="/aboutus" className="hover:text-[#DDE3C1] transition-colors mb-1">
    {t.about}
  </a>
  <a href="/products" className="hover:text-[#DDE3C1] transition-colors mb-1">
    {t.products}
  </a>
  <a href="/logistics" className="hover:text-[#DDE3C1] transition-colors">
    {lang === "EN" ? "Logistics" : "الخدمات اللوجستية"}
  </a>
</div>

        {/* Address */}
        <div className="flex flex-col md:flex-1">
          <h3 className="text-lg mb-4 font-serif font-semibold text-[#BFD18B] tracking-wide border-b border-[#BFD18B]/30 pb-1">
            {t.address}
          </h3>
          <p className="text-[#CFE3A8]">{t.location}</p>
          <p className="text-[#CFE3A8]">{t.postal}</p>
        </div>

        {/* Follow Us */}
<div className="flex flex-col md:flex-1">
  <h3 className="text-lg mb-4 font-serif font-semibold text-[#BFD18B] tracking-wide border-b border-[#BFD18B]/30 pb-1">
    {t.follow}
  </h3>
  <div
    className={`flex ${isArabic ? "flex-row-reverse justify-end" : "justify-start"} gap-4 text-2xl`}
  >
    <a
      href="https://www.facebook.com/share/14Lse2WwsEg/?mibextid=wwXIfr"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-[#DDE3C1] transition-colors"
      aria-label="Facebook"
    >
      <FaFacebook />
    </a>
    <a
      href="#"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-[#DDE3C1] transition-colors"
      aria-label="LinkedIn"
    >
      <FaLinkedin />
    </a>
    <a
      href="https://www.instagram.com/hasbani_natures_taste"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-[#DDE3C1] transition-colors"
      aria-label="Instagram"
    >
      <FaInstagram />
    </a>
  </div>
</div>

        {/* Get in Touch */}
        <div className="flex flex-col md:flex-1 relative">
          <h3 className="text-lg mb-4 font-primary font-semibold text-[#BFD18B] tracking-wide border-b border-[#BFD18B]/30 pb-1">
            {t.contact}
          </h3>
<div className="flex flex-col gap-2">
  <div className="flex items-center">
    <FaEnvelope className={`${isArabic ? "ml-2" : "mr-2"} text-[#DDE3C1]`} />
    <a
      href="mailto:omashasara@gmail.com"
      className="hover:underline text-[#CFE3A8]"
    >
      info@hasbani-lb.com
    </a>
  </div>
  <div className="flex items-center">
    <FaPhone className={`${isArabic ? "ml-2" : "mr-2"} text-[#DDE3C1]`} />
    <a
      href="tel:+96176571047"
      className="hover:underline text-[#CFE3A8]"
      dir="ltr"
    >
      +961 81 484 753
    </a>
  </div>
</div>


{/* WhatsApp Icon */}
<div className={`absolute top-20 ${isArabic ? "left-0" : "right-0"} z-20`}>
  <a
    href="https://wa.me/96181484753"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Chat on WhatsApp"
    className="hover:scale-110 transition-transform duration-300"
  >
    <img
      src={WhatsLogo}
      alt="WhatsApp"
      className="w-12 h-12 rounded-full bg-[#CFE3A8] shadow-lg p-1"
    />
  </a>
</div>

        </div>
      </div>

      {/* Bottom Line */}
      <div className="relative mt-4 pt-2 border-t border-[#BFD18B]/20 text-center text-sm text-[#CFE3A8] tracking-wide z-10">
        {t.rights}
      </div>
    </footer>
  );
};

export default Footer;
