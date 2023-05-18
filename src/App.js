import react, { useEffect } from 'react';
import reactDOM from 'react-dom';
import { BrowserRouter, Switch, Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import Header from './pages/Header';
import MiddleLayer from './pages/middlelayer';
import Detail from './pages/detail';
import './styles.css'
import Footer from './pages/footer'
import News from './pages/news'
import WishlistData from './pages/watchlistdata'
import CookieConsent from './pages/cookieconsent';
import Login from './pages/login';
import axios from 'axios';
import InvestPorfolio from './pages/invest';
function App() {
  localStorage.setItem("whish", []);
  if (localStorage.getItem("loginAutentication")) {
    var array = JSON.parse(localStorage.getItem("loginAutentication"));

    if (array.hasOwnProperty("id")) {
      if (array.id != null) {
        const getWishlist = async () => {
          const response = await axios.get('https://cryptomarketstat.azurewebsites.net/getwishlist', { params: { "id": array.id } });
          localStorage.setItem("whish", JSON.stringify(response.data))
          const balance = await axios.get("https://cryptomarketstat.azurewebsites.net/wallet", { params: { "id": array.id } })
          localStorage.setItem("wallet", JSON.stringify(balance.data));
        }
        getWishlist();
      }
    }
    else {
      localStorage.setItem("whish", []);
      localStorage.setItem("wallet",JSON.stringify({totalFund:0,balance:0,invested:0}));
    }
  }
  else {
    localStorage.setItem("whish", []);
    localStorage.setItem("wallet",JSON.stringify({totalFund:0,balance:0,invested:0}));
  }

  return (
    <BrowserRouter >
      <div className="wrapper">
        <Header />
        <Routes>
          <Route path="/" element={
            <div className="content">
              <MiddleLayer />
              <Home />
            </div>
          }>
          </Route>
          <Route path="/:id" element={
            <div className="content">
              <MiddleLayer />
              <WishlistData />
            </div>
          }></Route>
          <Route path='/Details/:id'
            element={
              <>
                <Detail />
              </>
            }
          >
          </Route>

          <Route path='/login'
            element={
              <div className="content">
                <Login />
              </div>
            }
          ></Route>

          <Route path='/invest'
            element={
              <div className="content">
              <MiddleLayer />
              <InvestPorfolio/>
              </div>
            }
          ></Route>

          <Route path='/news'
            element={
              <div className="content">
                <MiddleLayer />
                <News />
              </div>
            }
          >
          </Route>

        </Routes>
        {/* <CookieConsent /> */}
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App;