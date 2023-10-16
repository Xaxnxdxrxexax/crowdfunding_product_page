"use client";
import Image from "next/image";
import { useState } from "react";

export default function HomePage() {
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);
  return (
    <main className="">
      <header className="relative flex items-center">
        <picture className="">
          <source
            srcSet="/images/image-hero-desktop.jpg"
            media="(min-width: 376px)"
          />
          <Image
            src={"/images/image-hero-mobile.jpg"}
            alt="hero"
            width={375}
            height={300}
            className="w-full"
          />
        </picture>
        <div
          className={`${
            isHamburgerOpen ? "block" : "hidden"
          } fixed left-0 top-0 h-screen w-screen bg-gradient-to-b from-[rgba(0,0,0,0.35)] to-[rgba(0,0,0,0.05)]`}
        ></div>
        <nav className="Fm:w-[78%] Fm:ml-40 Fm:mt-11 absolute left-0 top-0 mx-5 mt-8 flex w-[90%] items-center">
          <Image
            src={"/images/logo.svg"}
            alt="logo"
            width="128"
            height="20"
            className=""
          />
          <Image
            src={
              isHamburgerOpen
                ? "/images/icon-close-menu.svg"
                : "/images/icon-hamburger.svg"
            }
            alt="hamburger"
            width={isHamburgerOpen ? "14" : "16"}
            height="15"
            className="Fm:invisible Fm:absolute Fm:top-0 z-10 ml-auto"
            onClick={() => setIsHamburgerOpen(!isHamburgerOpen)}
          />
          {isHamburgerOpen && (
            <div className="absolute top-10 z-10 mx-auto w-full rounded-2xl bg-white">
              <ul className="mx-auto flex w-[90%] flex-col items-start gap-10 p-6 px-2 text-lg">
                {["About", "Discover", "Get Started"].map((item) => (
                  <li key={item} className="hover:cursor-pointer">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}
          <ul className="Fm:visible Fm:static invisible absolute ml-auto flex items-center gap-8 font-medium text-white">
            {["About", "Discover", "Get Started"].map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </nav>
      </header>
    </main>
  );
}
