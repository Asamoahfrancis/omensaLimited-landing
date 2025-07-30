import { Button } from "./ui/button";
import { useEffect, useRef, useState } from "react";

export default function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoError, setVideoError] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      const handleLoadedData = () => {
        console.log("Video loaded successfully");
        setVideoLoaded(true);
        setVideoError(false);
      };

      const handleError = (e: Event) => {
        console.error("Video failed to load:", e);
        setVideoError(true);
        setVideoLoaded(false);
      };

      const handleLoadStart = () => {
        console.log("Video loading started");
      };

      const handleCanPlay = () => {
        console.log("Video can play");
        video.play().catch((err) => {
          console.error("Video play failed:", err);
        });
      };

      video.addEventListener("loadeddata", handleLoadedData);
      video.addEventListener("error", handleError);
      video.addEventListener("loadstart", handleLoadStart);
      video.addEventListener("canplay", handleCanPlay);

      // Force load
      video.load();

      return () => {
        video.removeEventListener("loadeddata", handleLoadedData);
        video.removeEventListener("error", handleError);
        video.removeEventListener("loadstart", handleLoadStart);
        video.removeEventListener("canplay", handleCanPlay);
      };
    }
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen dark-gray text-white flex items-center justify-center"
    >
      <div className=""></div>

      {/* Video Background */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        style={{ display: videoError ? "none" : "block" }}
      >
        <source src="./IMG_6216_2.mp4" type="video/mp4" />
        <source src="./IMG_6216_2.webm" type="video/webm" />
        Your browser does not support the video tag.
      </video>

      {/* Fallback background - show when video fails or hasn't loaded */}
      <div
        className={`absolute inset-0 bg-cover bg-center transition-opacity duration-500 ${
          videoError || !videoLoaded ? "opacity-100" : "opacity-0"
        }`}
        style={{
          backgroundImage: `url('./maxifit_image.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
        }}
      ></div>

      <div className="relative max-w-7xl mx-auto px-4 text-yellow-100 sm:px-6 lg:px-8 z-20">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Industrial Plumbing Solutions
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-yellow-100">
            Providing premium gate valves, HDPE fittings, and hydraulic
            equipment to mining, water, and oil companies worldwide
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => scrollToSection("products")}
              className="omensa-red text-white px-8 py-4 text-lg font-semibold hover:bg-red-700 shadow-lg"
              size="lg"
            >
              View Products
            </Button>
            <Button
              onClick={() => scrollToSection("contact")}
              variant="outline"
              className="border-2 border-white px-8 py-4 text-lg font-semibold  hover:text-omensa-red text-[var(--omensa-red)] hover:text-white bg-white hover:bg-[var(--omensa-red)]"
              size="lg"
            >
              Request Quote
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
