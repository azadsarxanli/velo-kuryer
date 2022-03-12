import React from "react";

function Header() {
  return (
    <header>
      <div className="logo">
        <h3>VELOKURYER</h3>
      </div>
      <nav className="nav-header">
        <ul>
          <li>Тарифы</li>
          <li>FAQ</li>
          <li>Виды доставок</li>
          <li className="phone">
            <i>
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.01 12.38C15.78 12.38 14.59 12.18 13.48 11.82C13.13 11.7 12.74 11.79 12.47 12.06L10.9 14.03C8.07 12.68 5.42 10.13 4.01 7.2L5.96 5.54C6.23 5.26 6.31 4.87 6.2 4.52C5.83 3.41 5.64 2.22 5.64 0.99C5.64 0.45 5.19 0 4.65 0H1.19C0.65 0 0 0.24 0 0.99C0 10.28 7.73 18 17.01 18C17.72 18 18 17.37 18 16.82V13.37C18 12.83 17.55 12.38 17.01 12.38Z"
                  fill="#4D744F"
                />
              </svg>
            </i>{" "}
            (+994 50) 202 17 52
          </li>
          <li className="language">
            RU
            <i>
              <svg
                width="7"
                height="4"
                viewBox="0 0 7 4"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.8225 0L3.5 2.47233L6.1775 0L7 0.761134L3.5 4L0 0.761134L0.8225 0Z"
                  fill="white"
                />
              </svg>
            </i>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;