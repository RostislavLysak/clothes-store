"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";
import linking from "@/routes/linking";
import { useRouter } from "next/navigation";
import useScrollHeader from "@/hooks";

const navlinks = [
  {
    title: "Home",
    href: linking.dashboard.root,
  },
  {
    title: "Catalog",
    href: linking.catalog.index,
  },
];

export default function AuthLayout({ children }: React.PropsWithChildren) {
  const { show } = useScrollHeader();

  const { data: session, status } = useSession();
  const router = useRouter();

  console.log("AUTH", session, status);

  useEffect(() => {
    if (status === "unauthenticated") {
      router.replace(linking.auth.login);
    }
  }, [status]);

  if (status === "loading") {
    return "Loading...";
  }

  return (
    <>
      <header
        className={`fixed top-0 z-10 flex justify-between w-full border-b p-4 backdrop-blur-md transition-all duration-500 ${
          !show && "-top-24"
        }`}
      >
        <nav className="flex">
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
        </nav>
        <button
          className="text-gray-900 border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
          onClick={() => signOut()}
        >
          Sign Out
        </button>
      </header>
      <main className="mt-32">{children}</main>
      {/* <footer className="border-t p-12 text-sm mt-8">
        <p>Copyright {`\u00A9 ${new Date().getFullYear()}`}</p>
      </footer> */}
    </>
  );
}
