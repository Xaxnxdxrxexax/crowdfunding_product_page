"use client";
import Image from "next/image";
import { useState } from "react";

export default function HomePage() {
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);
  return (
    <main className="overflow-hidden bg-[#FAFAFA] pb-5">
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
        {/* black overlay */}
        <div
          className={`${
            isHamburgerOpen ? "block" : "hidden"
          } fixed left-0 top-0 z-10 h-screen w-screen bg-gradient-to-b from-[rgba(0,0,0,0.35)] to-[rgba(0,0,0,0.05)]`}
        ></div>
        <nav className="Fm:w-[78%] Fm:ml-40 Fm:mt-11 absolute left-0 top-0 mx-5 mt-8 flex w-[90%] items-center">
          <Image
            src={"/images/logo.svg"}
            alt="logo"
            width="128"
            height="20"
            className={isHamburgerOpen ? "z-10" : ""}
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
            className="Fm:invisible Fm:absolute Fm:top-0 z-10 ml-auto mr-2"
            onClick={() => setIsHamburgerOpen(!isHamburgerOpen)}
          />
          {isHamburgerOpen && (
            <div className="absolute top-10 z-10 mx-auto w-full rounded-2xl bg-white">
              <ul
                className="flex flex-col items-start gap-8 pt-6
               text-lg"
              >
                {["About", "Discover", "Get Started"].map((item) => (
                  <div key={item} className="w-full border-b-[1px]">
                    <li className="ml-7 pb-5 font-semibold hover:cursor-pointer">
                      {item}
                    </li>
                  </div>
                ))}
              </ul>
            </div>
          )}
          <ul className="Fm:visible Fm:static invisible absolute ml-auto flex items-center gap-8 font-medium text-white">
            {["About", "Discover", "Get Started"].map((item) => (
              <li key={item} className="hover:cursor-pointer">
                {item}
              </li>
            ))}
          </ul>
        </nav>
      </header>
      <section className="Fm:max-w-[730px] Fm:-translate-y-24 mx-auto flex w-[90%] -translate-y-12 transform flex-col items-center rounded-xl border bg-white pb-10 pl-8 pr-5">
        <Image
          src={"/images/logo-mastercraft.svg"}
          alt="logo mastercraft"
          width="56"
          height="56"
          className="-translate-y-1/2 transform"
        />
        <h1 className="text-center text-2xl font-bold">
          Mastercraft Bamboo Monitor Riser
        </h1>
        <h2 className="text-Fm-Dark-gray mt-5 text-center text-sm tracking-tight">
          A beautiful & handcrafted monitor stand to reduce neck and eye strain.
        </h2>
        <div className="mt-7 flex w-full gap-3">
          <button className="bg-Fm-Moderate-cyan hover:bg-Fm-Dark-cyan Fm:grow-0 grow rounded-full px-8 font-bold text-white hover:cursor-pointer">
            Back this project
          </button>
          <div className="Fm:ml-auto flex hover:cursor-pointer hover:opacity-60">
            <Image
              src={"/images/icon-bookmark.svg"}
              alt="bookmark"
              width="56"
              height="56"
              className="Fm:translate-x-1/2 Fm:transform"
            />
            <p className="Fm:visible Fm:static text-Fm-Dark-gray invisible absolute left-0 top-0 flex w-36 items-center rounded-r-full border bg-[#FAFAFA] pl-10 font-bold">
              Bookmark
            </p>
          </div>
        </div>
      </section>
      <section className="Fm:max-w-[730px] Fm:-translate-y-24 Fm:flex-row Fm:flex-wrap mx-auto my-8 flex w-[90%] -translate-y-12 transform flex-col items-center rounded-xl border bg-white px-8 py-10 ">
        <div className="Fm:w-1/4 Fm:text-left text-center">
          <p className="text-Fm-Black text-4xl font-bold">$89,914</p>
          <p className="text-Fm-Dark-gray mt-2">of $100,000 backed</p>
        </div>
        <div className="Fm:transform Fm:rotate-90 my-7 w-20 border-t-[1px]"></div>
        <div className="Fm:w-1/4 Fm:text-left text-center">
          <p className="text-Fm-Black text-4xl font-bold">5,007</p>
          <p className="text-Fm-Dark-gray mt-2">total backers</p>
        </div>
        <div className="Fm:transform Fm:rotate-90 my-7 w-20 border-t-[1px]"></div>
        <div className="Fm:w-1/4 Fm:text-left text-center">
          <p className="text-Fm-Black text-4xl font-bold">56</p>
          <p className="text-Fm-Dark-gray mt-2">days left</p>
        </div>
        <div className="mt-7 h-3 w-full rounded-full bg-[#f4f4f4]">
          <div
            className="bg-Fm-Moderate-cyan h-full rounded-full"
            style={{ width: "80%" }}
          ></div>
        </div>
      </section>
      <section className="Fm:max-w-[730px] Fm:-translate-y-24 Fm:pl-10 Fm:pr-12 mx-auto flex w-[90%] -translate-y-12 transform flex-col items-center rounded-xl border bg-white pb-10 pl-5 pr-4 pt-10">
        <h3 className="mb-5 w-full text-left text-xl font-bold">
          About this project
        </h3>
        <p className="text-Fm-Dark-gray  Fm:text-base Fm:mt-6 Fm:leading-7 text-sm leading-6">
          The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform
          that elevates your screen to a more comfortable viewing height.
          Placing your monitor at eye level has the potential to improve your
          posture and make you more comfortable while at work, helping you stay
          focused on the task at hand.
        </p>
        <p className="text-Fm-Dark-gray Fm:text-base Fm:mt-8 Fm:tracking-normal  Fm:leading-7 mr-2 mt-6 text-sm leading-6 tracking-tight">
          Featuring artisan craftsmanship, the simplicity of design creates
          extra desk space below your computer to allow notepads, pens, and USB
          sticks to be stored under the stand.
        </p>
        <aside className="Fm:flex Fm:flex-wrap Fm:justify-around Fm:pr-10 Fm:py-8 Fm:items-center mt-10 w-full rounded-xl border border-gray-300 pl-6 pt-6">
          <h4 className="Fm:text-xl text-sm font-bold">Bamboo Stand</h4>
          <p className="text-Fm-Moderate-cyan Fm:ml-auto Fm:text-base Fm:mb-0 mb-6 mt-1 text-sm font-semibold">
            Pledge $25 or more
          </p>
          <p className="text-Fm-Dark-gray Fm:text-base Fm:mr-0 Fm:my-5 Fm:leading-7 mr-3 text-sm leading-6">
            You get an ergonomic stand made of natural bamboo. You&apos;ve
            helped us launch our promotional campaign, and you&apos;ll be added
            to a special Backer member list.
          </p>
          <p className="text-Fm-Dark-gray Fm:self-stretch Fm:my-0 mb-7 mt-5 flex items-center">
            <span className="text-Fm-Black mr-2 text-3xl font-bold">101</span>{" "}
            left
          </p>
          <button className="bg-Fm-Moderate-cyan Fm:ml-auto Fm:my-0 hover:bg-Fm-Dark-cyan mb-6 h-[50px] rounded-full px-8 text-sm font-bold text-white">
            Select Reward
          </button>
        </aside>
        <aside className="Fm:flex Fm:flex-wrap Fm:justify-around Fm:pr-10 Fm:py-8 Fm:items-center mt-10 w-full rounded-xl border border-gray-300 pl-6 pt-6">
          <h4 className="Fm:text-xl text-sm font-bold">Bamboo Stand</h4>
          <p className="text-Fm-Moderate-cyan Fm:ml-auto Fm:text-base Fm:mb-0 mb-6 mt-1 text-sm font-semibold">
            Pledge $25 or more
          </p>
          <p className="text-Fm-Dark-gray Fm:text-base Fm:mr-0 Fm:my-5 Fm:leading-7 mr-3 text-sm leading-6">
            You get an ergonomic stand made of natural bamboo. You&apos;ve
            helped us launch our promotional campaign, and you&apos;ll be added
            to a special Backer member list.
          </p>
          <p className="text-Fm-Dark-gray Fm:self-stretch Fm:my-0 mb-7 mt-5 flex items-center">
            <span className="text-Fm-Black mr-2 text-3xl font-bold">101</span>{" "}
            left
          </p>
          <button className="bg-Fm-Moderate-cyan Fm:ml-auto Fm:my-0 mb-6 h-[50px] rounded-full px-8 text-sm font-bold text-white">
            Select Reward
          </button>
        </aside>
        <aside className="Fm:flex Fm:flex-wrap Fm:justify-around Fm:pr-10 Fm:py-8 Fm:items-center mt-10 w-full rounded-xl border border-gray-300 pl-6 pt-6 opacity-40">
          <h4 className="Fm:text-xl text-sm font-bold">Bamboo Stand</h4>
          <p className="text-Fm-Moderate-cyan Fm:ml-auto Fm:text-base Fm:mb-0 mb-6 mt-1 text-sm font-semibold">
            Pledge $25 or more
          </p>
          <p className="text-Fm-Dark-gray Fm:text-base Fm:mr-0 Fm:my-5 Fm:leading-7 mr-3 text-sm leading-6">
            You get an ergonomic stand made of natural bamboo. You&apos;ve
            helped us launch our promotional campaign, and you&apos;ll be added
            to a special Backer member list.
          </p>
          <p className="text-Fm-Dark-gray Fm:self-stretch Fm:my-0 mb-7 mt-5 flex items-center">
            <span className="text-Fm-Black mr-2 text-3xl font-bold">101</span>{" "}
            left
          </p>
          <button className="bg-Fm-Moderate-cyan Fm:ml-auto Fm:my-0 mb-6 h-[50px] rounded-full px-8 text-sm font-bold text-white">
            Select Reward
          </button>
        </aside>
      </section>
    </main>
  );
}
