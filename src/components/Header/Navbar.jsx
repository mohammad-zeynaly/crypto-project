import React, { Component } from "react";
import "./Navbar.css";

class Navbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isTheme: false,
      isDropdownMenu: false,
      isMenuList: false,
    };
  }

  // change Theme Dark And Light
  themeClickHandler() {
    const mainTheme = (this.state.isTheme = !this.state.isTheme);

    this.setState({
      isTheme: mainTheme,
    });
    console.log(this.props.isTheme(mainTheme));
  }

  //Click Show Dropdown down Menu
  menuClickHandler() {
    const changeDropdown = (this.state.isDropdownMenu =
      !this.state.isDropdownMenu);

    this.setState({
      isDropdownMenu: changeDropdown,
    });
  }

  menuListShow() {
    const changeMenu = (this.state.isMenuList = !this.state.isMenuList);

    this.setState({
      isMenuList: changeMenu,
    });

    console.log(this.state.isMenuList);
  }

  render() {
    return (
      <nav className="nav">
        <div className="container">
          <div className="nav__wrapper">
            <a href="#" className="nav__brand">
              <img
                className="nav__brand-img"
                src="./assets/images/logo-crypto.png"
                alt="logo image"
              />
              <span className="nav__brand-title">کریپتو</span>
            </a>

            <ul className={`menu ${this.state.isMenuList ? "menu--open" : ""}`}>
              <li className="menu__item">
                <a href="#home" className="menu__link">
                  خانه
                </a>
              </li>
              <li className="menu__item">
                <a href="#features" className="menu__link">
                  ویژگی ها
                </a>
              </li>
              <li className="menu__item">
                <a href="#roadmap" className="menu__link">
                  نقشه راه
                </a>
              </li>
              <li className="menu__item menu__item--down">
                <a href="#" className="menu__link menu__link--down">
                  صفحات
                  <svg
                    className="menu__down-icon"
                    width="20px"
                    height="20px"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14 7L9 12L14 17"
                      stroke="#637381"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </a>
                <ul className="dropdown-menu ">
                  <li className="dropdown-menu__item">
                    <a href="#" className="dropdown-menu__link">
                      صفحه وبلاگ
                    </a>
                  </li>
                  <li className="dropdown-menu__item">
                    <a href="#" className="dropdown-menu__link">
                      {" "}
                      صفحه جزئیات وبلاگ
                    </a>
                  </li>
                  <li className="dropdown-menu__item">
                    <a href="#" className="dropdown-menu__link">
                      صفحه فروش توکن
                    </a>
                  </li>
                  <li className="dropdown-menu__item">
                    <a href="#" className="dropdown-menu__link">
                      صفحه پشتیبانی
                    </a>
                  </li>
                  <li className="dropdown-menu__item">
                    <a href="#" className="dropdown-menu__link">
                      صفحه ورود
                    </a>
                  </li>
                  <li className="dropdown-menu__item">
                    <a href="#" className="dropdown-menu__link">
                      صفحه ثبت نام
                    </a>
                  </li>
                </ul>
              </li>
              <li
                onClick={this.menuClickHandler.bind(this)}
                className={`menu__item menu__item-mobile--down ${
                  this.state.isDropdownMenu ? "menu__item-mobile--open" : ""
                }`}
              >
                <a href="#" className="menu__link menu__link--down">
                  صفحات
                  <svg
                    className="menu__down-icon"
                    width="20px"
                    height="20px"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14 7L9 12L14 17"
                      stroke="#637381"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </a>
                <ul
                  className={`dropdown-mobile-menu ${
                    this.state.isDropdownMenu
                      ? "dropdown-mobile-menu--open"
                      : ""
                  }`}
                >
                  <li className="dropdown-menu__item">
                    <a href="#" className="dropdown-menu__link">
                      صفحه وبلاگ
                    </a>
                  </li>
                  <li className="dropdown-menu__item">
                    <a href="#" className="dropdown-menu__link">
                      {" "}
                      صفحه جزئیات وبلاگ
                    </a>
                  </li>
                  <li className="dropdown-menu__item">
                    <a href="#" className="dropdown-menu__link">
                      صفحه فروش توکن
                    </a>
                  </li>
                  <li className="dropdown-menu__item">
                    <a href="#" className="dropdown-menu__link">
                      صفحه پشتیبانی
                    </a>
                  </li>
                  <li className="dropdown-menu__item">
                    <a href="#" className="dropdown-menu__link">
                      صفحه ورود
                    </a>
                  </li>
                  <li className="dropdown-menu__item">
                    <a href="#" className="dropdown-menu__link">
                      صفحه ثبت نام
                    </a>
                  </li>
                  <li className="menu__item dropdown-menu__item--last">
                    <a href="#contact" className="menu__link">
                      پشتیبانی
                    </a>
                  </li>
                </ul>
              </li>
              <li className="menu__item">
                <a href="#contact" className="menu__link">
                  پشتیبانی
                </a>
              </li>
            </ul>

            <div className="nav__links">
              <div
                className="nav-dark__btn"
                onClick={this.themeClickHandler.bind(this)}
              >
                <span
                  className={`nav__moon ${
                    !this.state.isTheme ? "nav-dark__btn--active" : ""
                  }`}
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    stroke="#B5B3BC"
                    fill="#B5B3BC"
                  >
                    <path d="M4.50663 3.2267L3.30663 2.03337L2.36663 2.97337L3.55996 4.1667L4.50663 3.2267ZM2.66663 7.00003H0.666626V8.33337H2.66663V7.00003ZM8.66663 0.366699H7.33329V2.33337H8.66663V0.366699ZM13.6333 2.97337L12.6933 2.03337L11.5 3.2267L12.44 4.1667L13.6333 2.97337ZM11.4933 12.1067L12.6866 13.3067L13.6266 12.3667L12.4266 11.1734L11.4933 12.1067ZM13.3333 7.00003V8.33337H15.3333V7.00003H13.3333ZM7.99996 3.6667C5.79329 3.6667 3.99996 5.46003 3.99996 7.6667C3.99996 9.87337 5.79329 11.6667 7.99996 11.6667C10.2066 11.6667 12 9.87337 12 7.6667C12 5.46003 10.2066 3.6667 7.99996 3.6667ZM7.33329 14.9667H8.66663V13H7.33329V14.9667ZM2.36663 12.36L3.30663 13.3L4.49996 12.1L3.55996 11.16L2.36663 12.36Z"></path>
                  </svg>
                </span>
                <span
                  className={`nav__flicker ${
                    this.state.isTheme ? "nav-dark__btn--active" : ""
                  }`}
                >
                  <svg
                    width="13"
                    height="15"
                    viewBox="0 0 13 15"
                    stroke="#B5B3BC"
                    fill="#B5B3BC"
                  >
                    <path d="M10.6111 12.855C11.591 12.1394 12.3151 11.1979 12.7723 10.1623C10.4824 10.4065 8.1342 9.46314 6.67948 7.47109C5.22476 5.47905 5.04093 2.95516 5.97054 0.848179C4.84491 0.968503 3.72768 1.37162 2.74781 2.08719C-0.224105 4.25747 -0.874706 8.43084 1.29558 11.4028C3.46586 14.3747 7.63923 15.0253 10.6111 12.855Z"></path>
                  </svg>
                </span>
              </div>
              <a href="#" className="nav__link">
                ورود
              </a>
              <div
                className={`menu__btn ${
                  this.state.isMenuList ? "menu-open__line--close" : ""
                }`}
                onClick={this.menuListShow.bind(this)}
              >
                {/*menu-open__line--close*/}
                <span className=" menu-open__line"></span>
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
