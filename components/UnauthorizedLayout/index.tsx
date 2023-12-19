"use client";

import { useEffect } from "react";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import linking from "@/routes/linking";
import useScrollHeader from "@/hooks";

export default function UnauthorizedhLayout({
  children,
}: React.PropsWithChildren) {
    const { show } = useScrollHeader();

  const { status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "authenticated") {
      router.replace(linking.dashboard.root);
    }
  }, [status]);

  if (status === "loading") {
    return "Loading...";
  }

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
        {/* {navlinks.map((item) => (
          <Link
            key={item.title}
            href={item.href}
            className="hover:-translate-y-0.5 p-2 m-2"
          >
            {item.title}
          </Link>
        ))} */}
      </header>
      <main className="mt-32">{children}</main>
      {/* <footer className="border-t p-12 text-sm mt-8">
        <p>Copyright {`\u00A9 ${new Date().getFullYear()}`}</p>
      </footer> */}
    </>
  );
}
