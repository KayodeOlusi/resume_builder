import { useEffect, useState } from "react";

const useViewport = (): number => {
  const [viewport, setViewport] = useState<number>(0);

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [viewport]);

  const handleResize = (): void => {
    setViewport(window.innerWidth);
  };

  return viewport;
};

export default useViewport;
