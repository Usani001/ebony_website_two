import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import AboutUsDesktop from "./pages/AboutUsDesktop";
import { useEffect } from "react";
import HomePageDesktop from "./pages/HomePageDesktop";
import ProductDesktop from "./pages/ProductDesktop";
import ContactPageDesktop from "./pages/ContactPageDesktop";
function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/aboutPage" element={<AboutUsDesktop />} />
      <Route path="/homePage" element={<HomePageDesktop />} />
      <Route path="/productPage" element={<ProductDesktop />} />
      <Route path="/contactPage" element={<ContactPageDesktop />} />
    </Routes>
  );
}
export default App;
