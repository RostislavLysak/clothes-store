"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const navlinks = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Catalog",
    href: "/catalog",
  },
];

export default function Layout({ children }: React.PropsWithChildren) {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (window.scrollY > lastScrollY) {
      setShow(false);
    } else {
      setShow(true);
    }

    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);

    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);
  
  return (
    <>
      <header
        className={`fixed top-0 z-10 flex w-full border-b p-4 backdrop-blur-md transition-all duration-500 ${
          !show && "-top-24"
        }`}
      >
        <Image
          src="/vercel.svg"
          alt="Vercel Logo"
          className="dark:invert m-4"
          width={100}
          height={24}
          priority
        />
        {navlinks.map((item) => (
          <Link
            key={item.title}
            href={item.href}
            className="hover:-translate-y-0.5 p-2 m-2"
          >
            {item.title}
          </Link>
        ))}
      </header>
      <main className="mt-32">{children}</main>
      {/* <footer className="border-t p-12 text-sm mt-8">
        <p>Copyright {`\u00A9 ${new Date().getFullYear()}`}</p>
      </footer> */}
    </>
  );
}
