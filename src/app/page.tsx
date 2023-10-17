"use client";
import Image from "next/image";
import { useState } from "react";
import fmData from "data.json";

export default function HomePage() {
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);
  const [isPledgeOpen, setIsPledgeOpen] = useState(false);
  const [projectData, setProjectData] = useState(fmData[0]);
  const [currentPledge, setCurrentPledge] = useState<null | string>(null);
  const [isSuccessful, setIsSuccessful] = useState(false);
  const [amountPledged, setAmountPledged] = useState<null | number>(null);

  const { title, total, totalBackers, daysLeft, favorite, pledges, backed } =
    projectData!;

  return (
    <main className="relative overflow-hidden bg-[#FAFAFA] pb-5">
      <header className="relative flex items-center Fm:mx-auto Fm:max-w-[1440px]">
        <picture>
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
        <div
          className={`${
            isPledgeOpen ? "block" : "hidden"
          } fixed left-0 top-0 z-20 h-screen w-screen bg-[rgba(0,0,0,0.35)]`}
        ></div>
        <nav className="absolute left-0 top-0 mx-5 mt-8 flex w-[90%] items-center Fm:ml-40 Fm:mt-11 Fm:w-[78%]">
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
            className="z-10 ml-auto mr-2 Fm:invisible Fm:absolute Fm:top-0"
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

          <ul className="invisible absolute ml-auto flex items-center gap-8 font-medium text-white Fm:visible Fm:static">
            {["About", "Discover", "Get Started"].map((item) => (
              <li key={item} className="hover:cursor-pointer">
                {item}
              </li>
            ))}
          </ul>
        </nav>
      </header>
      <section className="mx-auto flex w-[90%] -translate-y-12 transform flex-col items-center rounded-xl border bg-white pb-10 pl-8 pr-5 Fm:max-w-[730px] Fm:-translate-y-24">
        <Image
          src={"/images/logo-mastercraft.svg"}
          alt="logo mastercraft"
          width="56"
          height="56"
          className="-translate-y-1/2 transform"
        />
        <h1 className="text-center text-2xl font-bold">{title}</h1>
        <h2 className="mt-5 text-center text-sm tracking-tight text-Fm-Dark-gray">
          A beautiful & handcrafted monitor stand to reduce neck and eye strain.
        </h2>
        <div className="mt-7 flex w-full gap-3">
          <button
            className="grow rounded-full bg-Fm-Moderate-cyan px-8 font-bold text-white hover:cursor-pointer hover:bg-Fm-Dark-cyan Fm:grow-0"
            onClick={() => setIsPledgeOpen(true)}
          >
            Back this project
          </button>
          <div
            className="flex hover:cursor-pointer hover:opacity-60 Fm:ml-auto"
            onClick={() => {
              setProjectData((projectData) => ({
                ...projectData!,
                favorite: !projectData!.favorite,
              }));
            }}
          >
            <Image
              src={
                favorite
                  ? "/images/icon-bookmarked.svg"
                  : "/images/icon-bookmark.svg"
              }
              alt="bookmark"
              width="56"
              height="56"
              className="Fm:translate-x-1/2 Fm:transform"
            />
            <p
              className={`invisible absolute left-0 top-0 flex w-36 items-center rounded-r-full border bg-[#FAFAFA] pl-8 font-bold text-Fm-Dark-gray Fm:visible Fm:static ${
                favorite && "text-Fm-Moderate-cyan"
              }`}
            >
              {favorite ? "Bookmarked" : "Bookmark"}
            </p>
          </div>
        </div>
      </section>
      <section className="mx-auto my-8 flex w-[90%] -translate-y-12 transform flex-col items-center rounded-xl border bg-white px-8 py-10 Fm:max-w-[730px] Fm:-translate-y-24 Fm:flex-row Fm:flex-wrap ">
        <div className="text-center Fm:w-1/4 Fm:text-left">
          <p className="text-4xl font-bold text-Fm-Black">
            ${backed.toLocaleString()}
          </p>
          <p className="mt-2 text-Fm-Dark-gray">
            of ${total.toLocaleString()} backed
          </p>
        </div>
        <div className="my-7 w-20 border-t-[1px] Fm:rotate-90 Fm:transform"></div>
        <div className="text-center Fm:w-1/4 Fm:text-left">
          <p className="text-4xl font-bold text-Fm-Black">
            {totalBackers.toLocaleString()}
          </p>
          <p className="mt-2 text-Fm-Dark-gray">total backers</p>
        </div>
        <div className="my-7 w-20 border-t-[1px] Fm:rotate-90 Fm:transform"></div>
        <div className="text-center Fm:w-1/4 Fm:text-left">
          <p className="text-4xl font-bold text-Fm-Black">{daysLeft}</p>
          <p className="mt-2 text-Fm-Dark-gray">days left</p>
        </div>
        <div className="mt-7 h-3 w-full overflow-hidden rounded-full bg-[#f4f4f4]">
          <div
            className="h-full rounded-full bg-Fm-Moderate-cyan"
            style={{
              width: `${(backed / total) * 100}%`,
            }}
          ></div>
        </div>
      </section>
      <section className="mx-auto flex w-[90%] -translate-y-12 transform flex-col items-center rounded-xl border bg-white pb-10 pl-5 pr-4 pt-10 Fm:max-w-[730px] Fm:-translate-y-24 Fm:pl-10 Fm:pr-12">
        <h3 className="mb-5 w-full text-left text-xl font-bold">
          About this project
        </h3>
        <p className="text-sm  leading-6 text-Fm-Dark-gray Fm:mt-6 Fm:text-base Fm:leading-7">
          The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform
          that elevates your screen to a more comfortable viewing height.
          Placing your monitor at eye level has the potential to improve your
          posture and make you more comfortable while at work, helping you stay
          focused on the task at hand.
        </p>
        <p className="mr-2 mt-6 text-sm leading-6  tracking-tight text-Fm-Dark-gray Fm:mt-8 Fm:text-base Fm:leading-7 Fm:tracking-normal">
          Featuring artisan craftsmanship, the simplicity of design creates
          extra desk space below your computer to allow notepads, pens, and USB
          sticks to be stored under the stand.
        </p>
        {/* list pledges */}
        {Object.entries(pledges)
          .slice(1)
          .map(([key, value]) => {
            const { title, description, minPledge, amountLeft } = value;
            return (
              <aside
                className={`mt-10 w-full rounded-xl border border-gray-300 pl-6 pt-6 Fm:flex Fm:flex-wrap Fm:items-center Fm:justify-around Fm:py-8 Fm:pr-10 ${
                  amountLeft === 0 && "opacity-40"
                }`}
                key={key}
              >
                <h4 className="text-sm font-bold Fm:text-xl">{title}</h4>
                <p className="mb-6 mt-1 text-sm font-semibold text-Fm-Moderate-cyan Fm:mb-0 Fm:ml-auto Fm:text-base">
                  Pledge ${minPledge} or more
                </p>
                <p className="mr-3 text-sm leading-6 text-Fm-Dark-gray Fm:my-5 Fm:mr-0 Fm:text-base Fm:leading-7">
                  {description}
                </p>
                <p className="mb-7 mt-5 flex items-center text-Fm-Dark-gray Fm:my-0 Fm:self-stretch">
                  <span className="mr-2 text-3xl font-bold text-Fm-Black">
                    {amountLeft}
                  </span>{" "}
                  left
                </p>
                <button
                  className={`mb-6 h-[50px] rounded-full bg-Fm-Moderate-cyan px-8 text-sm font-bold text-white hover:bg-Fm-Dark-cyan Fm:my-0 Fm:ml-auto ${
                    amountLeft === 0 && "bg-Fm-Dark-gray"
                  }`}
                  disabled={amountLeft === 0}
                  onClick={() => {
                    setCurrentPledge(key);
                    setIsPledgeOpen(true);
                  }}
                >
                  {amountLeft === 0 ? "Out of Stock" : "Select Reward"}
                </button>
              </aside>
            );
          })}
      </section>
      {/* pledge modal */}
      {isPledgeOpen && (
        <div className="absolute left-0 top-0 flex h-screen w-screen items-center justify-center">
          <div className="absolute top-32 z-20 mx-auto w-[90%] rounded-xl bg-white px-6 pb-8 pt-5 Fm:max-w-[740px] Fm:p-12">
            <div className="">
              <h2 className="text-xl font-bold">Back this project</h2>
              <Image
                src={"/images/icon-close-modal.svg"}
                alt="close"
                width="15"
                height="15"
                onClick={() => setIsPledgeOpen(false)}
                className="absolute right-6 top-6 cursor-pointer Fm:right-12 Fm:top-12 Fm:w-max"
              />
              <p className="mb-7 mt-8 text-sm leading-6 text-Fm-Dark-gray">
                Want to support us in bringing Mastercraft Bamboo Monitor Riser
                out in the world?
              </p>
              {/* no reward */}
              {Object.entries(pledges)
                .slice(0, 1)
                .map(([key, value]) => {
                  const { title, description, minPledge, amountLeft } = value;
                  return (
                    <div
                      className={`mb-7 flex flex-wrap items-center gap-x-5 gap-y-0 rounded-xl border-[1px] border-gray-300 px-7 py-8 ${
                        key === currentPledge && "border-Fm-Dark-cyan"
                      }`}
                      key={key}
                    >
                      <div
                        className={`flex h-6 w-6 items-center justify-center rounded-full border-[1px]`}
                      >
                        {key === currentPledge && (
                          <div className="h-3 w-3 rounded-full bg-Fm-Moderate-cyan"></div>
                        )}
                      </div>
                      <div className="Fm:flex Fm:gap-3">
                        <p
                          className="text-sm font-bold hover:cursor-pointer hover:text-Fm-Moderate-cyan"
                          onClick={() => {
                            setCurrentPledge(key);
                          }}
                        >
                          {title}
                        </p>
                      </div>
                      <p className="mb-3 mt-7 text-sm leading-6 text-Fm-Dark-gray Fm:order-4 Fm:mt-3 Fm:pl-11">
                        {description}
                      </p>

                      {key === currentPledge && (
                        <div className="order-last w-full pt-6 Fm:flex Fm:flex-wrap">
                          <div className="w-full border-t-[1px] pb-6 Fm:grow"></div>
                          <p className="w-full pb-4 text-center text-Fm-Dark-gray Fm:w-auto Fm:self-center Fm:pb-0">
                            Enter your pledge
                          </p>
                          <div className="flex w-full justify-between gap-3 Fm:ml-auto Fm:w-auto Fm:max-w-[220px]">
                            <input
                              type="number"
                              placeholder={minPledge.toString()}
                              min={minPledge}
                              value={amountPledged?.toString()}
                              onChange={(e) => {
                                setAmountPledged(Number(e.target.value));
                              }}
                              className="w-1/2 rounded-full border p-3 font-bold text-black"
                              style={{
                                backgroundImage: "url(images/icon-dollar.svg)",
                                backgroundSize: "10px",
                                backgroundPosition: "30% 53%",
                                backgroundRepeat: "no-repeat",
                                paddingLeft: "40px",
                              }}
                            />
                            <button
                              className="w-1/2 rounded-full border bg-Fm-Moderate-cyan p-3 px-7 text-sm font-bold text-white hover:cursor-pointer"
                              onClick={() => {
                                if (amountPledged! > minPledge) {
                                  setProjectData((projectData) => {
                                    return {
                                      ...projectData!,
                                      backed:
                                        projectData!.backed + amountPledged!,
                                      totalBackers:
                                        projectData!.totalBackers + 1,
                                      pledges: {
                                        ...projectData!.pledges,
                                        [key]: {
                                          ...value,
                                          amountLeft: amountLeft! - 1,
                                        },
                                      },
                                    };
                                  });
                                  setIsSuccessful(true);
                                  setIsPledgeOpen(false);
                                  setAmountPledged(null);
                                } else {
                                  alert(
                                    `For the ${title} you need to pledge at least ${minPledge}`,
                                  );
                                }
                              }}
                            >
                              Continue
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              {/* rest of the rewards */}
              {Object.entries(pledges)
                .slice(1)
                .map(([key, value]) => {
                  const { title, description, minPledge, amountLeft } = value;
                  return (
                    <div
                      className={`mb-7 flex flex-wrap items-center gap-x-5 gap-y-0 rounded-xl border-[1px] border-gray-300 px-7 py-8  ${
                        amountLeft === 0 && "opacity-40"
                      } ${key === currentPledge && "border-Fm-Dark-cyan"}`}
                      key={key}
                    >
                      <div
                        className={`flex h-6 w-6 items-center justify-center rounded-full border-[1px]`}
                      >
                        {key === currentPledge && (
                          <div className="h-3 w-3 rounded-full bg-Fm-Moderate-cyan"></div>
                        )}
                      </div>
                      <div className="Fm:flex Fm:gap-3">
                        <p
                          className="text-sm font-bold hover:cursor-pointer hover:text-Fm-Moderate-cyan"
                          onClick={() => {
                            if (amountLeft !== 0) {
                              setCurrentPledge(key);
                            }
                          }}
                        >
                          {title}
                        </p>
                        <p className="text-sm text-Fm-Moderate-cyan">
                          Pledge ${minPledge} or more
                        </p>
                      </div>
                      <p className="mb-3 mt-7 text-sm leading-6 text-Fm-Dark-gray Fm:order-4 Fm:mt-3 Fm:pl-11">
                        {description}
                      </p>
                      <p className="flex items-center text-Fm-Dark-gray Fm:order-3 Fm:my-0 Fm:ml-auto Fm:self-stretch">
                        <span className="mr-2 text-lg font-bold text-Fm-Black">
                          {amountLeft}
                        </span>{" "}
                        left
                      </p>
                      {key === currentPledge && (
                        <div className="order-last w-full pt-6 Fm:flex Fm:flex-wrap">
                          <div className="w-full border-t-[1px] pb-6 Fm:grow"></div>
                          <p className="w-full pb-4 text-center text-Fm-Dark-gray Fm:w-auto Fm:self-center Fm:pb-0">
                            Enter your pledge
                          </p>
                          <div className="flex w-full justify-between gap-3 Fm:ml-auto Fm:w-auto Fm:max-w-[220px]">
                            <input
                              type="number"
                              placeholder={minPledge.toString()}
                              min={minPledge}
                              value={amountPledged?.toString()}
                              onChange={(e) => {
                                setAmountPledged(Number(e.target.value));
                              }}
                              className="w-1/2 rounded-full border p-3 font-bold text-black"
                              style={{
                                backgroundImage: "url(images/icon-dollar.svg)",
                                backgroundSize: "10px",
                                backgroundPosition: "30% 53%",
                                backgroundRepeat: "no-repeat",
                                paddingLeft: "40px",
                              }}
                            />
                            <button
                              className="w-1/2 rounded-full border bg-Fm-Moderate-cyan p-3 px-7 text-sm font-bold text-white"
                              onClick={() => {
                                if (amountPledged! > minPledge) {
                                  setProjectData((projectData) => {
                                    return {
                                      ...projectData!,
                                      backed:
                                        projectData!.backed + amountPledged!,
                                      totalBackers:
                                        projectData!.totalBackers + 1,
                                      pledges: {
                                        ...projectData!.pledges,
                                        [key]: {
                                          ...value,
                                          amountLeft: amountLeft! - 1,
                                        },
                                      },
                                    };
                                  });
                                  setIsSuccessful(true);
                                  setIsPledgeOpen(false);
                                  setAmountPledged(null);
                                } else {
                                  alert(
                                    `For the ${title} you need to pledge at least $${minPledge}`,
                                  );
                                }
                              }}
                            >
                              Continue
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      )}
      {isSuccessful && (
        <div className="absolute left-0 top-0 z-20 flex h-screen w-screen items-center justify-center bg-[rgba(0,0,0,0.35)]">
          <div className="mx-6 flex w-full flex-col items-center justify-center rounded-xl bg-white px-6 pt-8 Fm:max-w-xl">
            <Image
              src={"/images/icon-check.svg"}
              alt="check"
              width="64"
              height="64"
              className="mx-auto"
            />
            <h2 className="my-8 text-center text-xl font-bold">
              Thanks for your support!
            </h2>
            <p className="text-center text-sm leading-6 text-Fm-Dark-gray">
              Your pledge brings us one step closer to sharing Mastercraft
              Bamboo Monitor Riser worldwide. You will get an email once our
              campaign is completed.
            </p>
            <button
              className="my-10 rounded-full bg-Fm-Moderate-cyan px-7  py-3 font-bold text-white"
              onClick={() => setIsSuccessful(false)}
            >
              Got it!
            </button>
          </div>
        </div>
      )}
    </main>
  );
}
