import React, { useEffect } from "react";
import "./App.css";

import { Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Loading from "./components/Loading";
import MessageBox from "./components/MessageBox";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import DetailsPage from "./pages/DetailsPage";
import HomePage from "./pages/HomePage";
import Reviews from "./pages/Reviews";
import ProfilePage from "./pages/ProfilePage";

import { useDispatch, useSelector } from "react-redux";
import { selectAppLoading } from "./store/appState/selectors";
import { getUserWithStoredToken } from "./store/user/actions";
import Footer from "./components/Footer";

function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectAppLoading);

  useEffect(() => {
    dispatch(getUserWithStoredToken());
  }, [dispatch]);

  return (
    <div>
      <Navigation />
      <MessageBox />
      <div>
        <div className="main">
          {isLoading ? <Loading /> : null}
          <Routes>
            <Route path="/signup" element={<SignUp />} />
            <Route path="/details/:id" element={<DetailsPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/reviews" element={<Reviews />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route exact path="/" element={<HomePage />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
