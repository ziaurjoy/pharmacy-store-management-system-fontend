"use client";
import { useState } from "react";
import Link from "next/link";
export default function Header({
  mobileHandlerMenu,
  menuAreaHandler,
  // dropDownMenuHandler,
  // dropdownMenu,
  // settingShow,
}) {
  const [settingShow, setSettingshow] = useState("nav-link dropdown-toggle");
  const [dropdownMenu, setDropdownMenu] = useState("dropdown-menu");

  function dropDownMenuHandler() {
    if (
      dropdownMenu === "dropdown-menu" &&
      settingShow === "nav-link dropdown-toggle"
    ) {
      setSettingshow("nav-link dropdown-toggle show");
      setDropdownMenu("dropdown-menu show");
    } else {
      setSettingshow("nav-link dropdown-toggle");
      setDropdownMenu("dropdown-menu");
    }
  }

  return (
    <div className='header-area'>
      <div className='row'>
        <div className='col-4'>
          <div className='title'>
            <h2>
              {" "}
              <span onClick={mobileHandlerMenu} className='mob'>
                <i className='fa fa-bars' aria-hidden='true'></i>
              </span>
              <span onClick={menuAreaHandler} className='menuwidth'>
                <i className='fa fa-bars' aria-hidden='true'></i>
              </span>{" "}
            </h2>
          </div>
        </div>
        <div className='col-8'>
          <div className='notification'>
            <ul>
              <li className='dropdown notifica'>
                <a
                  className='nav-link dropdown-toggle'
                  href='#'
                  id='navbarDropdown'
                  role='button'
                  data-bs-toggle='dropdown'
                  aria-expanded='false'>
                  <i className='fa fa-envelope-o' aria-hidden='true'></i>{" "}
                  <span className='num'>2</span>{" "}
                </a>

                <ul className='dropdown-menu' aria-labelledby='navbarDropdown'>
                  <li>
                    <a className='dropdown-item' href='#'>
                      Action
                    </a>
                  </li>
                  <li>
                    <a className='dropdown-item' href='#'>
                      Another action
                    </a>
                  </li>

                  <li>
                    <a className='dropdown-item' href='#'>
                      Action
                    </a>
                  </li>
                  <li>
                    <a className='dropdown-item' href='#'>
                      Another action
                    </a>
                  </li>

                  <li>
                    <a className='dropdown-item' href='#'>
                      Action
                    </a>
                  </li>
                  <li>
                    <a className='dropdown-item' href='#'>
                      Another action
                    </a>
                  </li>

                  <li className='footer'>
                    <a href='#'>See All Messages</a>
                  </li>
                </ul>
              </li>
              <li className='dropdown' onClick={dropDownMenuHandler}>
                <a
                  className={settingShow}
                  href='#'
                  id='navbarDropdown1'
                  role='button'
                  data-bs-toggle='dropdown'
                  aria-expanded='false'>
                  <i className='fa fa-cog' aria-hidden='true'></i>{" "}
                </a>

                <ul
                  id='navbarSetting'
                  className={dropdownMenu}
                  aria-labelledby='navbarDropdown1'>
                  <li>
                    <a className='dropdown-item' href='#'>
                      <i className='fa fa-user' aria-hidden='true'></i> profile
                    </a>
                  </li>
                  <li>
                    <a className='dropdown-item' href='#'>
                      <i className='fa fa-cog' aria-hidden='true'></i> Setting
                    </a>
                  </li>
                  <li>
                    <Link className='dropdown-item' href='/login'>
                      <i className='fa fa-sign-out' aria-hidden='true'></i>{" "}
                      logout
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
