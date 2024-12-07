import React, { useEffect } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import Header from "./components/Header";
import { useDispatch } from "react-redux";
import { getGenres, getWatchList } from "./redux/actions";
import Detail from "./pages/Details";
import OverView from "./pages/Details/detail/OverView";
import Trailers from "./pages/Details/detail/Trailers";

import Similar from "./pages/Details/detail/Similar";
import WatchList from "./pages/Favorites";
import Footer from "./components/Footer";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGenres());
    dispatch(getWatchList());
  }, []);

  return (
    <div className="pt-5 md:pt-8 lg:px-15 xl:px-20 app-container">
      <BrowserRouter>
        <Header />
        <div className="content-wrap z-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movie/:id" element={<Detail />}>
              <Route index element={<Navigate to="overview" />} />
              <Route
                index
                path="/movie/:id/overview"
                element={<OverView key={"overview"} />}
              />
              <Route
                path="/movie/:id/trailers"
                element={<Trailers key={"trailers"} />}
              />
              <Route
                path="/movie/:id/similar"
                element={<Similar key={"similar"} />}
              />
            </Route>
            <Route path="/watchlist" element={<WatchList />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
