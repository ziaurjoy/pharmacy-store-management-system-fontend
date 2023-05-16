"use client";
import Link from "next/link";
import { useState } from "react";

export default function Nav({ hideItem }) {
  const [activeMenu, setActiveMenu] = useState("");

  const [activeSubMenu, setActiveSubMenu] = useState("");

  const handleParentMenuClick = (menu) => {
    if (activeMenu === menu) {
      setActiveMenu(""); // Hide the sub-menu if it's already active
    } else {
      setActiveMenu(menu); // Show the clicked sub-menu
    }
  };

  const handleSubmMenuClick = (subMenu) => {
    if (activeSubMenu === subMenu) {
      setActiveSubMenu(""); // Hide the sub-menu if it's already active
    } else {
      setActiveSubMenu(subMenu); // Show the clicked sub-menu
    }
  };
  return (
    <nav className='menu'>
      <ul>
        <li>
          <Link className='active' href='/'>
            <i className='fa fa-tachometer' aria-hidden='true'></i>{" "}
            <span className={hideItem}>Dashboard </span>
          </Link>
        </li>
        {/* ==============================menu======================================= */}
        <li>
          <a
            href='#'
            onClick={() => handleParentMenuClick("accounts")}
            className={activeMenu === "accounts" ? "active" : ""}>
            <i className='fa fa-address-book-o' aria-hidden='true'></i>{" "}
            <span className={hideItem}> Accounts </span>{" "}
            <span className='drop-icon'>
              <i className='fa fa-angle-down' aria-hidden='true'></i>
            </span>
          </a>
          <ul
            style={{
              display: activeMenu === "accounts" ? "block" : "none",
            }}
            className='sub-menu'>
            <li>
              <a href='#'>Chart of Account</a>
            </li>
            <li>
              <a href='#'>Balance Adjustment</a>
            </li>
            <li>
              <a href='#'>Cash Adjustment</a>
            </li>
            <li>
              <a href='#'>Bank Adjustment</a>
            </li>
            <li>
              <a
                href='#'
                onClick={() => handleSubmMenuClick("voucher")}
                className={activeSubMenu.class}>
                Voucher{" "}
                <span className='drop-icon'>
                  <i className='fa fa-angle-down' aria-hidden='true'></i>
                </span>
              </a>
              <ul
                style={{
                  display: activeSubMenu === "voucher" ? "block" : "none",
                }}
                className='sub-sub'>
                <li>
                  <a href='#'>Cash Book</a>
                </li>
                <li>
                  <a href='#'>Bank Book</a>
                </li>
                <li>
                  <a href='#'>General Ledger</a>
                </li>
                <li>
                  <a href='#'>Trial Balance</a>
                </li>
                <li>
                  <a href='#'>Profit Loss</a>
                </li>
                <li>
                  <a href='#'>Cash Flow</a>
                </li>
                <li>
                  <a href='#'>Coa Print</a>
                </li>
              </ul>
            </li>
          </ul>
        </li>

        <li>
          <a
            href='#'
            onClick={() => handleParentMenuClick("hrm")}
            className={activeMenu === "hrm" ? "active" : ""}>
            <i className='fa fa-address-book-o' aria-hidden='true'></i>{" "}
            <span className={hideItem}> HRM </span>{" "}
            <span className='drop-icon'>
              <i className='fa fa-angle-down' aria-hidden='true'></i>
            </span>
          </a>
          <ul
            style={{
              display: activeMenu === "hrm" ? "block" : "none",
            }}
            className='sub-menu'>
            <li>
              <li>
                <a
                  href='#'
                  onClick={() => handleSubmMenuClick("employee")}
                  className={activeSubMenu === "employee" ? "active" : ""}>
                  Employee{" "}
                  <span className='drop-icon'>
                    <i className='fa fa-angle-down' aria-hidden='true'></i>
                  </span>
                </a>
                <ul
                  style={{
                    display: activeSubMenu === "employee" ? "block" : "none",
                  }}
                  className='sub-sub'>
                  <li>
                    <a href='#'>Add New Employee</a>
                  </li>
                  <li>
                    <a href='#'>Employee List</a>
                  </li>
                </ul>
              </li>
            </li>
            <li>
              <Link href='/customer-add'>Add New Customer</Link>
            </li>
            <li>
              <Link href='/customer-list'>Customer List</Link>
            </li>
            <li>
              <a href='#'>Bank Adjustment</a>
            </li>
          </ul>
        </li>
        {/* ==============================menu======================================= */}
      </ul>
    </nav>
  );
}
