import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import NotFound from "./pages/NotFound/NotFound";
import SinglePage from "./pages/singlePage/SinglePage";
import { Fragment } from "react";
import Header from "./components/layouts/header/Header";
import Footer from "./components/layouts/footer/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Admin from "./pages/admin/Admin";
import Auth from "./pages/auth/Auth";
import Login from "./pages/login/Login";

const App = () => {
  return (
    <Fragment>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/singlePage/:id" element={<SinglePage />} />
        <Route path="/register" element={<Login />} />
        <Route path="/" element={<Auth />}>
          <Route path="admin" element={<Admin />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
      <ToastContainer />
    </Fragment>
  );
};

export default App;
