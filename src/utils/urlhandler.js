import { useLocation } from "react-router-dom";

export function UseLastPathname() {
    const location = useLocation();
    const pathSegments = location.pathname.split('/');
    return pathSegments[pathSegments.length - 1];
  }