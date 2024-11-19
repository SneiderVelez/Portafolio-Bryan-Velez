import { useEffect, useState } from "react";

const useScreenSize = () => {
  const [screenSize, setScreenSize] = useState({
    sm: false,
    md: false,
    lg: true,
    xl: false,
    xl2: false,
    xl3: false,
    desktop: false,
    mobile: false,
  });

  useEffect(() => {
    const checkScreenSize = () => {
      const width = window.innerWidth;
      setScreenSize({
        mobile: width < 640,
        sm: width >= 640 && width < 768,
        md: width >= 768 && width < 1024,
        lg: width >= 1024 && width < 1280,
        xl: width >= 1280 && width < 1536,
        xl2: width >= 1536 && width < 1920,
        xl3: width >= 1920,
        desktop: width >= 1024,
      });
    };

    checkScreenSize();

    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return screenSize;
};

export default useScreenSize;
