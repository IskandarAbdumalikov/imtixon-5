import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import NotFound from "./pages/NotFound/NotFound";
import SinglePage from "./pages/singlePage/SinglePage";
import { Fragment } from "react";
import Header from "./components/layouts/header/Header";
import Footer from "./components/layouts/footer/Footer";

const App = () => {
  return (
    <Fragment>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/singlePage/:id" element={<SinglePage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Fragment>
  );
};

export default App;
