"use client";
import { useEffect } from "react";
import { menuItems, site } from "./site";

const HeaderSimple = ({ photos }) => {
  useEffect(() => {
    const init = async () => {
      const { Tooltip, initTE } = await import("tw-elements");
      initTE({ Tooltip });
    };
    init();
  }, []);

  return (
    <header>
      <div className="bg-sky-200 px-6 py-1 text-center text-neutral-800 dark:bg-neutral-700 dark:text-neutral-200">
        <div className="flex flex-col  lg:flex-row first-letter:lg:justify-around  justify-center items-center">
          <div className="hidden md:block lg:self-start">
            <img
              src={site.Logo.url}
              className=" rounded-2xl w-10 mx-4  p-4 md:w-40 lg:w-96 h-auto "
              alt=""
            />
          </div>
          <div className="flex-col justify-center">
            <h1 className="mb-6 text-sky-600  text-5xl font-bold">
              Intervention 24h/24 7j/7
            </h1>
            <div className="flex flex-row justify-around items-center">
              <h3 className="mb-8 text-black text-3xl font-bold">
                Vannes - Pontivy- Locminé
              </h3>
              <a
                className="self-stop rounded-2xl h-10 bg-sky-600 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-sky-200 shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-lime-300 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-lime-200 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:text-green-900 focus:outline-none focus:ring-0 active:bg-lime-100 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
                data-te-ripple-init
                data-te-ripple-color="light"
                href="/contact"
                role="button"
              >
                Me contacter
              </a>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="container mx-auto px-5 py-2 lg:px-32 lg:pt-12 animate-slideRight">
          <div className="-m-1 flex flex-wrap md:-m-2">
            {/* Utiliser une boucle pour générer les éléments d'image */}
            {photos.map((photo, index) => (
              <div
                key={index}
                className="flex justify-center sm:w-full md:w-1/2 lg:w-1/4 flex-wrap"
              >
                <div className="w-full ">
                  <img
                    alt={photo.alt}
                    className="block h-full w-full  object-cover object-center"
                    src={`images/${photo.url}`}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

    </header>
  );
};

export default HeaderSimple;
