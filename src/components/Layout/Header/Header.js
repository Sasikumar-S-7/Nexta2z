"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation"; // Correct import for the App Router
import HeaderTop from "./HeaderTop";
import SolutionsDropdown from "./SolutionDropdown";
import logo from "../../../image/logo.png";

const Header = () => {
  const [isClient, setIsClient] = useState(false); // Client-side check
  const pathname = usePathname(); // Using usePathname from next/navigation

  useEffect(() => {
    setIsClient(true); // Set to true after the component is mounted on the client
  }, []);

  const isHomePage = isClient ? pathname === "/" : false;

  const [navClass, setNavClass] = useState(
    isHomePage
      ? "navbar navbar-expand-lg navbar-dark bg-transparent position-fixed w-100"
      : "navbar navbar-expand-lg navbar-dark bg-light shadow w-100 color"
  );

  const [showSolutionsDropdown, setShowSolutionsDropdown] = useState(false);

  useEffect(() => {
    const updateNavClass = () => {
      setNavClass(
        window.scrollY > 10
          ? "navbar navbar-expand-lg navbar-dark bg-light position-fixed w-100 shadow-sm top-0 color"
          : isHomePage
          ? "navbar navbar-expand-lg navbar-dark bg-transparent position-fixed w-100"
          : "navbar navbar-expand-lg navbar-dark bg-light shadow w-100 color"
      );
    };

    updateNavClass();
    window.addEventListener("scroll", updateNavClass);
    return () => window.removeEventListener("scroll", updateNavClass);
  }, [isHomePage]);

  const menuItems = [
    {
      title: "Products",
      links: [
        { name: "Whatsapp", path: "/whatsapp-api/", icon: "💬" },
        { name: "RCS Service", path: "/rcs-sms/", icon: "📱" },
        { name: "Bulk SMS", path: "/bulk-sms/", icon: "✉️" },
        { name: "Bulk Voice Call", path: "/voice-call/", icon: "📞" },
      ],
    },
    {
      title: "Resources",
      links: [
        { name: "Service", path: "/services/", icon: "🛠️" },
        { name: "Faq", path: "/faq/", icon: "❓" },
        { name: "Blog", path: "/blogs/", icon: "📰" },
      ],
    },
    {
      title: "Company",
      links: [
        { name: "About Us", path: "/about-us/", icon: "🏢" },
        { name: "Contact", path: "/contact/", icon: "📞" },
        { name: "Career", path: "/career/", icon: "💼" },
      ],
    },
  ];

  return (
    <>
      <HeaderTop />
      <header>
        <nav className={navClass} style={{ zIndex: 1000 }}>
          <div className="container w-100">
            <Link className="navbar-brand" href="/">
              <Image src={logo} alt="Logo" style={{ width:"100%",height: "60px" }} />
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasNavbar"
              aria-controls="offcanvasNavbar"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="offcanvas offcanvas-start bg-light w-75"
              tabIndex="-1"
              id="offcanvasNavbar"
              aria-labelledby="offcanvasNavbarLabel"
            >
              <div className="offcanvas-header">
                <Link href="/">
                  <Image src={logo} alt="Logo" style={{ height: "60px" }} />
                </Link>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                ></button>
              </div>
              <div className="offcanvas-body">
                <ul className="navbar-nav me-auto mb-lg-0 ms-2">
                  {/* Products Menu */}
                  <li key="products" className="nav-item dropdown me-2">
                    <Link
                      className="nav-link dropdown-toggle"
                      href="#"
                      role="button"
                      aria-expanded="false"
                    >
                      Products
                    </Link>
                    <ul className="dropdown-menu shadow">
                      {menuItems[0].links.map((link, linkIndex) => (
                        <li key={linkIndex}>
                          <Link
                            className={`dropdown-item ${
                              pathname === link.path ? "active" : ""
                            }`}
                            href={link.path}
                          >
                            <span className="me-2">{link.icon}</span>
                            {link.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </li>

                  {/* Solutions Dropdown */}
                  <li
                    className="nav-item dropdown me-2"
                    onMouseEnter={() => setShowSolutionsDropdown(true)}
                    onMouseLeave={() => setShowSolutionsDropdown(false)}
                  >
                    <span className="nav-link dropdown-toggle" role="button">
                      Solutions
                    </span>
                    {showSolutionsDropdown && <SolutionsDropdown />}
                  </li>

                  {/* Remaining Menu Items */}
                  {menuItems.slice(1).map((menu, index) => (
                    <li key={index} className="nav-item dropdown me-2">
                      <Link
                        className="nav-link dropdown-toggle"
                        href="#"
                        role="button"
                        aria-expanded="false"
                      >
                        {menu.title}
                      </Link>
                      <ul className="dropdown-menu shadow">
                        {menu.links.map((link, linkIndex) => (
                          <li key={linkIndex}>
                            <Link
                              className={`dropdown-item ${
                                pathname === link.path ? "active" : ""
                              }`}
                              href={link.path}
                            >
                              <span className="me-2">{link.icon}</span>
                              {link.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </li>
                  ))}
                </ul>

                <div className="btn-header gap-3">
                  <Link
                    href="/try-for-free/"
                    className="btn btn-primary px-4 buton fw-bold pt-2"
                  >
                    Try For Free
                  </Link>
                  <Link
                    href="/request-demo/"
                    className="btn btn-outline-primary px-4 buton fw-bold pt-2"
                  >
                    Request Demo
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
