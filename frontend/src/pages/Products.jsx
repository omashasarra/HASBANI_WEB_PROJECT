import React from "react";
import { useLanguage } from "../context/LanguageContext.jsx";
import heroImage from "../assets/ProductsPage/products.png";

// Bestseller Products
import ExtraOliveOil from "../assets/products/EXTRAVIRGIN.png";
import VirginOliveOil from "../assets/products/VIRGINOIL.png";
import Honey from "../assets/products/Honey.png";

// Other products
import Olives from "../assets/products/OLIVES.png";
import PomMol from "../assets/products/PomegranateMOLASES.png";
import Labneh from "../assets/products/labneh.png";
import DriedFigs from "../assets/products/DriedFigs.png";
import GrapeLeaves from "../assets/products/Grapeeleaves.png";
import Makdous from "../assets/products/Makdous.png";
import CucPickles from "../assets/products/Cucumber.png";
import GrapeMolasses from "../assets/products/GrapeMolasses.png";
import AppleVinger from "../assets/products/Apple.png";
import Apricot from "../assets/products/DriedApricot.png";
import ApriJam from "../assets/products/ApricotJam.png";
import productspage from "../assets/ProductsPage/productspage.png"

const Products = () => {
  const { lang } = useLanguage();

  return (
    <div
      className={`pt-20 pb-20 min-h-screen bg-[#FAF8F5] bg-[url('/src/assets/bgleaves.svg')] bg-repeat-y bg-auto ${
        lang === "AR" ? "text-right" : "text-left"
      }`}
      dir={lang === "AR" ? "rtl" : "ltr"}
    >
<div className="relative w-full">
  {/* Mobile Image */}
  <img
    src={productspage} // mobile image
    alt={lang === "EN" ? "Hero" : "الصورة "}
    className="block md:hidden w-auto object-contain h-auto max-h-[80vh] mx-auto"
  />

  {/* Desktop Image */}
  <img
    src={heroImage} // desktop image
    alt={lang === "EN" ? "Hero" : "الصورة "}
    className="hidden md:block w-auto object-contain h-auto max-h-[80vh] mx-auto"
  />
</div>

      {/* ===== PRODUCTS CONTAINER ===== */}
      <div className="w-full max-w-6xl mx-auto px-4 mt-12 mb-20 space-y-12">

        {/* ===== PRODUCT CARD #1 ===== */}
        <div className="bg-[#E7EDE9] rounded-2xl shadow-lg p-6 md:p-10 flex flex-col md:flex-row items-center justify-between relative overflow-hidden">
        <div
          className={`order-2 md:order-1 relative z-10 mb-4 md:mb-0 ${lang === "EN" ? "text-left md:w-1/3" : "text-center md:w-1/3"}`}
          dir={lang === "EN" ? "ltr" : "rtl"}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold leading-tight text-gray-900">
            {lang === "EN" ? "Extra Virgin Olive Oil" : "زيت الزيتون البكر الممتاز"}
          </h2>
        </div>
          <div className="order-1 md:order-2 flex justify-center md:w-1/3 relative z-10 mb-4 md:mb-0">
            <img
              src={ExtraOliveOil}
              alt={lang === "EN" ? "Extra Virgin Olive Oil" : "اكتب النص هنا"}
              className="max-w-full w-auto drop-shadow-2xl transition-transform duration-300 hover:scale-105"
            />
          </div>
          <div className="order-3 md:order-3 text-gray-700 leading-relaxed text-[14px] sm:text-[15px] md:text-base md:w-1/3 relative z-10">
            {lang === "EN" ? (
              <>
                This isn’t just olive oil — it’s the taste of Hasbaya’s hills, where the
                land is shaped by all four seasons. Our extra virgin olive oil proudly
                hits below 0.8% acidity — the gold standard that sets true extra virgin
                apart. It delivers a flavor that’s smooth, rich, and bold. It’s perfect
                for salads, dressings, or drizzling, packed with natural taste and health
                benefits. Available in <b>250ml, 500ml, 1L, 5L, 16L</b>, or custom sizes
                on request.
              </>
            ) : (
              <>
                <p>
                  ليس مجرد زيت زيتون — بل هو طعم تلال حاصبيا، حيث تتناغم الأرض مع فصول السنة الأربعة .
                  زيت الزيتون البكر الممتاز HASBANI يتميّز بحموضة أقل من 0.8 % — وهو المعيار الذهبي الذي
                  يحدد جودة البكر الممتاز الحقيقي .
                </p>
                <p>
                  يتمتع بنكهة سلسة، غنية وقوية، مثالي للسلطات، الصلصات، أو للتزيين، مع فوائد صحية طبيعية .
                </p>
                <p>
                  الأحجام المتوفّرة: 250 مل، 500 مل، 1 لتر، 5 لتر، 16 لتر، أو حسب الطلب
                </p>
              </>
            )}
          </div>
        </div>

        {/* ===== PRODUCT CARD #2 ===== */}
        <div className="bg-[#E7EDE9] rounded-2xl shadow-lg p-6 md:p-10 flex flex-col md:flex-row items-center justify-between relative overflow-hidden">
          <div className="order-2 md:order-1 text-left md:w-1/3 relative z-10 mb-4 md:mb-0">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold leading-tight text-gray-900">
              {lang === "EN" ? "Virgin Olive Oil" : "زيت الزيتون البكر"}
            </h2>
          </div>
          <div className="order-1 md:order-2 flex justify-center md:w-1/3 relative z-10 mb-4 md:mb-0">
            <img
              src={VirginOliveOil}
              alt={lang === "EN" ? "Virgin Olive Oil" : "اكتب النص هنا"}
              className="max-w-full w-auto drop-shadow-2xl transition-transform duration-300 hover:scale-105"
            />
          </div>
          <div className="order-3 md:order-3 text-gray-700 leading-relaxed text-[14px] sm:text-[15px] md:text-base md:w-1/3 relative z-10">
            {lang === "EN" ? (
              <>
                <p>Acidity between 0.8% and 2%, offering a smooth, rich taste that reflects the balance between nature’s strength and subtlety.</p>
                <p>Ideal for everyday cooking, roasting, and light sautéing — bringing warmth, flavor, and natural goodness to every dish.</p>
                <p>Available in <b>250ml, 500ml, 1L, 5L, 16L</b>, or other sizes upon request.</p>
              </>
            ) : (
              `زيت الزيتون البكر HASBANI حموضته بين 0.8 % و 2 %، طعم سلس وغني. مثالي للطهي اليومي،
                التحميص، والقلي الخفيف، ليضيف دفءً ونكهة وفوائد طبيعية لكل طبق .
                الأحجام المتوفرة: 250 مل، 500 مل، 1 ل، 5 ل، 16 ل، أو حسب الطلب.
                `
            )}
          </div>
        </div>

        {/* ===== PRODUCT CARD #3 ===== */}
        <div className="bg-[#E7EDE9] rounded-2xl shadow-lg p-6 md:p-10 flex flex-col md:flex-row items-center justify-between relative overflow-hidden">
          <div
            className={`order-2 md:order-1 relative z-10 mb-4 md:mb-0 ${lang === "EN" ? "text-left md:w-1/3" : "text-center md:w-1/3"}`}
            dir={lang === "EN" ? "ltr" : "rtl"}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold leading-tight text-gray-900">
              {lang === "EN" ? "Honey" : "عسل"}
            </h2>
          </div>
          <div className="order-1 md:order-2 flex justify-center md:w-1/3 relative z-10 mb-4 md:mb-0">
            <img
              src={Honey}
              alt={lang === "EN" ? "Honey Jar" : "عسل"}
              className="max-w-full w-auto drop-shadow-2xl transition-transform duration-300 hover:scale-105"
            />
          </div>
          <div className="order-3 md:order-3 text-gray-700 leading-relaxed text-[14px] sm:text-[15px] md:text-base md:w-1/3 relative z-10">
            {lang === "EN" ? (
              <>
                <p>
                  Raw and pure from the cleanest beehives, HASBANI honey is rich in
                  antioxidants, enzymes, and nutrients that boost immunity and support
                  overall health. Perfect for active lifestyles — use it pre- or
                  post-workout, in shakes, tea, toast, dressings, or desserts. Choose from a
                  variety of flavors like <b>thistle, lemon blossom, oak, lavender, Shandib, and more.</b>
                </p>
              </>
            ) : (
               <>
                <p>
                  عسل HASBANI طبيعي خام يجسّد صفاء الطبيعة المتوسطيّة بطعمه الأصيل وغناه بالعناصر الحيوية
                  ومضادات الأكسدة التي تعزز المناعة وتمنح طاقة طبيعية نقية .
                </p>
                <p>
                  بفضل قوامه الذهبي وطابعه الفاخر، يُضفي لمسة من التميّز على المشروبات الساخنة، الشاي، المخبوزات،
                  الصلصات، والحلويات، كما يمكن الاستمتاع به يوميا ا ضمن أسلوب حياة صحي ومتوازن .
                </p>
                <p>
                  يتوفر بنكهات راقية مستوحاة من الطبيعة اللبنانية مثل الشوكيات، زهر الليمون، البلوط، الخزامى، والشنديب
                  وغيرها.
                </p>
              </>
            )}
          </div>
        </div>

        {/* ===== OTHER PRODUCTS GRID ===== */}
        <div className="w-full max-w-6xl mx-auto mt-12 mb-20 grid grid-cols-1 sm:grid-cols-2 gap-8">

          {[
            { 
              img: Olives, 
              title: { EN: "Olives", AR: "زيتون" }, 
              desc: { EN: "Rich in antioxidants and healthy fats, our olives support heart health and reduce inflammation. Perfect as a snack, in salads, or as part of Mediterranean dishes.",
                      AR: `زيتون HASBANI غني بمضادات الأكسدة والدهون الصحية، يدعم صحة القلب ويقلل الالتهابات. مثالي
          كوجبة خفيفة، في السلطات، أو ضمن أطباق البحر الأبيض المتوسط.
          ` }
            },
            { 
              img: PomMol, 
              title: { EN: "Pomegranate Molasses", AR: "دبس الرمان" }, 
              desc: { EN: "Packed with vitamins and antioxidants, pomegranate molasses aids digestion and boosts immunity. Ideal for dressings, marinades, or drizzling over roasted vegetables and meats.",
                      AR: `غني بالفيتامينات ومضادات الأكسدة، يساعد على الهضم ويعزز المناعة، مع توازن مثالي بين الحلاوة
                        والحموضة. يضفي لمسة مميزة على الصلصات، التتبيلات، الخضار واللحوم المشوية، ليمنح كل طبق طابعا
                          فريدًا من النكهة المتوسطيّة الأصيلة.
                          ` }
            },
            { 
              img: Labneh, 
              title: { EN: "Labneh", AR: "اللبنة" }, 
              desc: { EN: "High in protein and probiotics, labneh supports digestive health. Serve it as a spread, dip, or part of breakfast and mezze plates.", 
                      AR: `غنية بالبروتين والبروبيوتيك، تدعم صحة الجهاز الهضمي. تُقدَّم كطبق اساسي في وجبات الفطور وأطباق
          المقبلات .
          ` }
            },
            { 
              img: DriedFigs, 
              title: { EN: "Dried Figs", AR: "التين المجفف" }, 
              desc: { EN: "Full of fiber, vitamins, and minerals, figs improve digestion and support bone health. Perfect as a snack, in desserts, or added to salads.",
                      AR: `التين المجفف HASBANI غني بالألياف والفيتامينات والمعادن، يحسن الهضم ويدعم صحة العظام. مثالي
          كوجبة خفيفة، في الحلويات، أو ضمن السلطات.
          ` }
            },
            { 
              img: GrapeLeaves, 
              title: { EN: "Grape Leaves", AR: "ورق العنب" }, 
              desc: { EN: "Rich in fiber, vitamins, and antioxidants, grape leaves aid digestion and heart health. Commonly used for stuffing with rice, meat, or vegetables (dolma).",
                      AR: `غني بالألياف والفيتامينات ومضادات الأكسدة، يدعم الهضم وصحة القلب. يُستخدم عادةً للحشوات بالأرز ،
          اللحم أو الخضار (ورق عنب محشي) . متعارف عليه في كافة الدول العربية.
          ` }
            },
            { 
              img: Makdous, 
              title: { EN: "Makdous", AR: "المكدوس" }, 
              desc: { EN: "Pickled eggplants stuffed with walnuts and red pepper, rich in fiber, healthy fats, and antioxidants. Served as a mezze, appetizer, or side dish.",
                      AR: `باذنجان مخلل محشو بالجوز والفليفلة الحمراء، غني بالألياف والدهون الصحية ومضادات الأكسدة. يُقدَّم
          كمقبلات أو طبق جانبي .
          ` }
            },
            { 
              img: CucPickles, 
              title: { EN: "Cucumber Pickles", AR: "مخلل الخيار" }, 
              desc: { EN: "Good source of probiotics and antioxidants, supporting gut health. Perfect as a side, snack, or salad ingredient.",
                      AR: `مخلل الخيار HASBANI ، مصدر جيد للبروبيوتيك ومضادات الأكسدة، يدعم صحة الأمعاء. مثالي
          كمقبلات أو في السلطات .
          ` }
            },
            { 
              img: GrapeMolasses, 
              title: { EN: "Grape Molasses", AR: "دبس العنب" }, 
              desc: { EN: "Concentrated in vitamins and minerals, grape molasses boosts energy and digestion. Used in baking, dressings, or drizzled over desserts.",
                      AR: `غني بالفيتامينات والمعادن، يعزز الطاقة والهضم. يُستخدم في الحلويات أو الصلصات أو كتحلية طبيعية.` }
            },
            { 
              img: AppleVinger, 
              title: { EN: "Apple Vinegar", AR: "خل التفاح" }, 
              desc: { EN: "Packed with acetic acid and antioxidants, apple vinegar supports digestion and metabolism. Ideal for dressings, marinades, or a health tonic.",
                      AR: `خل التفاح HASBANI غني بحمض الأسيتيك ومضادات الأكسدة، يدعم الهضم والتمثيل الغذائي. مثالي
          للصلصات، للتتبيلات والمشروبات الصحية .
          ` }
            },
            { 
              img: Apricot, 
              title: { EN: "Dried Apricot", AR: "المشمش المجفف" }, 
              desc: { EN: "Packed with fiber and antioxidants, dried apricots support digestion and skin health. A convenient snack, perfect for trail mixes or baking.",
                      AR: `غني بالألياف ومضادات الأكسدة التي تدعم الهضم وتعزز صحة البشرة. يعد وجبة خفيفة مثالية، ويمكن
          إضافته الى لخليط أو الحلويات لمنخها لمسة طبيعيّة ولذيذة.
          ` }
            }
          ].map((prod, idx) => (
            <div key={idx} className="bg-[#E7EDE9] rounded-2xl shadow-lg p-6 flex flex-col items-center text-center">
              <img src={prod.img} alt={prod.title.EN} className="pt-8 w-auto mb-4" />
              <h3 className="mt-8 text-2xl font-serif font-semibold leading-tight text-gray-900">
                {lang === "EN" ? prod.title.EN : prod.title.AR}
              </h3>
              <p className="text-gray-700 text-sm md:text-base">
                {lang === "EN" ? prod.desc.EN : prod.desc.AR}
              </p>
            </div>
          ))}

        </div>

        {/* ===== PRODUCT CARD - APRICOT JAM ===== */}
        <div className="bg-[#E7EDE9] rounded-2xl shadow-lg p-4 md:p-8 flex flex-col md:flex-row items-center justify-between relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/src/assets/leafPattern.svg')] bg-no-repeat bg-right-top opacity-10 pointer-events-none"></div>

          <div className="order-2 md:order-1 text-left md:w-1/4 relative z-10 mb-4 md:mb-0">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold leading-tight text-gray-900">
              {lang === "EN" ? "Apricot Jam" : "مربى المشمش"}
            </h2>
          </div>

          <div className="order-1 md:order-2 flex justify-center md:w-1/3 relative z-10 mb-4 md:mb-0">
            <img
              src={ApriJam}
              alt={lang === "EN" ? "Apricot Jam" :"مربى المشمش"}
              className="w-auto drop-shadow-2xl transition-transform duration-300 hover:scale-105"
            />
          </div>

          <div className="order-3 md:order-3 text-gray-700 leading-relaxed text-[14px] sm:text-[15px] md:text-base md:w-1/3 space-y-2 relative z-10">
            <p>
              {lang === "EN"
                ? "Rich in natural sweetness and vitamin C, apricot jam adds a fruity boost to breakfasts and desserts. Delicious on toast, pastries, or as a glaze."
                : `مربى المشمش HASBANI غني بالحلاوة الطبيعية وفيتامين C ، يضيف لمسة فواكه غنية بالنكهة للإفطار
                  والحلويات. لذيذ على الخبز، المعجنات أو كطبقة تزيين تضفي رونقًا وذوقًا فريدًا.
                  ` 
                }
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
