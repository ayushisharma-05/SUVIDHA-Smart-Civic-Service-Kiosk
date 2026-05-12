import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { InteractiveVideo } from "@/components/InteractiveVideo";
import { ChevronRight, MessageSquarePlus, Clock } from "lucide-react";

const galleryImages = [
  "/images/Screenshot 2026-04-30 121222.png",
  "/images/Screenshot 2026-04-30 121231.png",
  "/images/Screenshot 2026-04-30 121245.png",
  "/images/Screenshot 2026-04-30 121306.png",
  "/images/Screenshot 2026-04-30 121319.png",
  "/images/smart_city_2.png",
  "/images/urban_hub.png",
  "/images/digital_concept.png",
  "/images/electricity (2).png",
  "/images/gas.png",
  "/images/municipal.png",
  "/images/property.png",
  "/images/waste.png",
  "/images/water.png",
];

const Index = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-[calc(100vh-64px)] flex flex-col bg-transparent overflow-hidden font-sans">

      <div className="container relative z-10 pt-8 pb-10 h-full flex flex-col items-center justify-start overflow-hidden">
        
        {/* CENTERED TYPOGRAPHY */}
        <div className="animate-slide-up flex flex-col items-center text-center mb-6 mt-0">
          <h1 className="text-5xl md:text-6xl font-black tracking-tighter text-white leading-none drop-shadow-2xl">
            SUVIDHA
          </h1>
          <p className="text-[10px] md:text-xs font-bold text-white/80 tracking-[0.3em] uppercase mt-1.5">
            Smart Urban Virtual Interactive Digital Helpdesk
          </p>
          <div className="w-12 h-0.5 bg-white/40 mt-2 rounded-full" />
        </div>

        {/* DUAL PANEL */}
        <div className="grid grid-cols-2 gap-6 w-full flex-1 min-h-0">
          {/* LEFT: INTERACTIVE VIDEO */}
          <div className="animate-slide-up flex flex-col justify-start w-full">
            <div className="w-full aspect-video overflow-hidden rounded-2xl glass-panel bg-black/40">
              <InteractiveVideo
                src="/videos/What_is_a_smart_city__(720p).mp4"
                title="How to make our own city smart? What is a smart city"
              />
            </div>
          </div>

          {/* RIGHT: FADING GALLERY */}
          <div className="animate-slide-up flex flex-col justify-start w-full" style={{ animationDelay: "0.15s" }}>
            <div className="w-full aspect-video overflow-hidden rounded-2xl glass-panel bg-black/40 relative">
              {galleryImages.map((img, index) => (
                <img
                  key={img}
                  src={img}
                  alt={`Smart City ${index + 1}`}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${index === currentImageIndex ? "opacity-100" : "opacity-0"
                    }`}
                />
              ))}
              {/* Dot indicators */}
              <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-2 z-10">
                {galleryImages.map((_, i) => (
                  <div
                    key={i}
                    className={`h-1.5 rounded-full transition-all duration-500 ${i === currentImageIndex ? "w-6 bg-white" : "w-1.5 bg-white/40"
                      }`}
                  />
                ))}
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
            </div>
          </div>
        </div>

        {/* BOTTOM: ACTION DOCK */}
        <div className="w-full flex flex-col items-center gap-8 mt-auto pt-6 pb-6 animate-slide-up" style={{ animationDelay: "0.3s" }}>
          <div className="flex flex-wrap justify-center gap-6 w-[90%] max-w-5xl px-8 py-6 rounded-[2rem] glass-dock">
            <button
              onClick={() => navigate("/complaint")}
              className="kiosk-touch-target flex-1 max-w-[220px] flex items-center justify-center gap-3 glass-button text-white rounded-xl font-black text-xs tracking-widest transition-all hover:scale-105 active:scale-95"
            >
              <MessageSquarePlus className="w-5 h-5 text-saffron" />
              REGISTER COMPLAINT
            </button>

            <button
              onClick={() => navigate("/departments")}
              className="kiosk-touch-target animate-bounce-subtle flex-1 max-w-[320px] flex items-center justify-center gap-4 bg-gradient-to-r from-[#3D5FAD] to-[#192e59] hover:from-[#2D4A8A] hover:to-[#0f1d3a] text-white px-8 py-5 rounded-2xl font-black text-xl tracking-tight transition-all hover:scale-105 active:scale-95 shadow-[0_10px_40px_-10px_rgba(61,95,173,0.8)] border border-white/20"
            >
              ENTER KIOSK
              <ChevronRight className="w-7 h-7 group-hover:translate-x-1 transition-transform text-saffron" />
            </button>

            <button
              onClick={() => navigate("/track")}
              className="kiosk-touch-target flex-1 max-w-[220px] flex items-center justify-center gap-3 glass-button text-white rounded-xl font-black text-xs tracking-widest transition-all hover:scale-105 active:scale-95"
            >
              <Clock className="w-5 h-5 text-saffron" />
              TRACK REQUEST
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Index;
