import { useEffect, useState } from "react";

const useViewport = (): number => {
  const [viewport, setViewport] = useState<number>(window.innerWidth);

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
