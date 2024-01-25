"use client";
import { useEffect } from "react";
import { menuItems, site } from "./site";

const Navbar = () => {
  useEffect(() => {
    const init = async () => {
      const { Collapse, initTE } = await import("tw-elements");
      initTE({ Collapse });
    };
    init();
  }, []);


 
  return (
    <nav className="relative flex w-full items-center justify-between bg-sky-600 py-2 text-white shadow-lg hover:text-neutral-700 focus:text-neutral-700 dark:bg-neutral-600 dark:text-neutral-200 md:flex-wrap md:justify-start" data-te-navbar-ref>
      <div className="flex w-full flex-wrap items-center justify-start px-3">
      <a href="/" className="ml-2">
            <img src={site.logo.url} className="h-8 w-auto bg-white"   alt="Accueil" />
          </a>
        <div className="flex items-center">
          <button
            className="border-0 bg-transparent px-2 text-xl leading-none transition-shadow duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 dark:hover:text-white dark:focus:text-white lg:hidden"
            type="button"
            data-te-collapse-init
            data-te-target="#navbarSupportedContentY"
            aria-controls="navbarSupportedContentY"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="[&>svg]:w-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-7 w-7"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </span>
          </button>
        </div>

        <div className="!visible hidden grow basis-[100%] items-center lg:!flex lg:basis-auto mx-auto" id="navbarSupportedContentY" data-te-collapse-item>
          <ul className="mx-auto flex flex-col lg:flex-row" data-te-navbar-nav-ref>
          <a href="/" className="ml-2 lg:hidden">
            <img src="logo.png" className="h-8 w-auto" alt="Accueil" />
          </a>
            {/* Utiliser une boucle pour générer les éléments de la navbar */}
            {menuItems.map((menuItem, index) => (
              <li key={index} className={`${index > 0 ? 'mb-2 ' : ''}lg:mb-0 lg:pr-2`} data-te-nav-item-ref>
                <a
                  className={`block transition duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 dark:hover:text-white dark:focus:text-white lg:p-2 [&.active]:text-black/90`}
                  href={menuItem.route}
                  data-te-nav-link-ref
                  data-te-ripple-init
                  data-te-ripple-color="light"
                >
                  {menuItem.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
