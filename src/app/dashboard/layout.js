"use client";
import { useState } from "react";

import Nav from "../component/nav";
import LogoMobileView from "../component/logoMobileView";
import User from "../component/user";
import Header from "../component/header";
import LogoDesktopView from "../component/logoDesktopView";

export default function DashboardLayout({ children }) {
  const [menuArea, setMenuArea] = useState("menu-area fixed-menu");
  const [mainContent, setMainContent] = useState("main-contents");
  const [hideItem, setHideItem] = useState("hide-item");
  const [showLogo, setShowLogo] = useState("small-logo");

  function mobileHandlerMenu(envent) {
    setMenuArea("menu-area mobile");
    envent.stopPropagation();
  }

  function mobileHandlerClose() {
    setMenuArea("menu-area");
  }

  function menuAreaHandler() {
    if (
      menuArea === "menu-area fixed-menu" &&
      mainContent === "main-contents" &&
      hideItem === "hide-item" &&
      showLogo === "small-logo"
    ) {
      setMenuArea("menu-area fixed-menu menu-full");
      setMainContent("main-contents menu-full-body");
      setHideItem("show-item");
      setShowLogo("small-logo show-logo");
    } else {
      setMenuArea("menu-area fixed-menu");
      setMainContent("main-contents");
      setHideItem("hide-item");
      setShowLogo("small-logo");
    }
  }

  return (
    <>
      {/* <!-- loader --> */}
      {/* <div className='loaders'>
        <div className='loader'></div>
      </div> */}
      {/* <!-- loader --> */}

      {/* <!-- main-area --> */}
      <section className='main-area'>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-12 p-0'>
              {/* <!-- menu --> */}
              <div className={menuArea}>
                <div onClick={mobileHandlerClose} className='closes'>
                  <i className='fa fa-times' aria-hidden='true'></i>
                </div>
                {/* <!-- logo Destop-view--> */}
                <LogoDesktopView showLogo={showLogo} />
                {/* <!-- logo Destop-view--> */}
                {/* <!-- user --> */}
                <User />
                {/* <!-- user --> */}
                <Nav hideItem={hideItem} />
                {/* <!-- menu --> */}
              </div>
              {/* <!-- main-contents --> */}
              <div className={mainContent}>
                {/* <!-- logo --> */}
                <LogoMobileView showLogo={showLogo} />
                {/* <!-- logo --> */}

                {/* <!-- header-area --> */}
                <Header
                  mobileHandlerMenu={mobileHandlerMenu}
                  menuAreaHandler={menuAreaHandler}
                />
                {/* <!-- header-area --> */}

                {/* <!-- main-contents --> */}
                {children}
                {/* <!-- main-contents --> */}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- main-area --> */}
    </>
  );
}
