// Here are more informations about the scroll restoration of React Router
// https://reactrouter.com/web/guides/scroll-restoration

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname]);

  return null;
}