"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import { redirect, useRouter } from "next/navigation";
// import { redirect } from "next/navigation";
import { useEffect, useState } from "react";

const Login = () => {
  const router = useRouter();
  const [err, setErr] = useState("");
  const [state, setState] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    // try {
    const user = await signIn("credentials", {
      ...state,
      redirect: false,
    });

    //   if (!user?.ok) {
    //     throw new Error("User not found");
    //   }

    //   router.push("/");
    // } catch (e) {
    //   setErr(e?.message);
    // }
    // const user = await signIn("credentials", { ...state, redirect: false });

    user?.ok ? router.push("/") : setErr("User not found");
    // if(user?.ok) {
    //   router.push('/')
    // }

    // if (!user?.ok) {
    //   setErr("User not found");
    // }

    // router.push('/')

    // redirect("/catalog/");

    // redirect("/catalog/hoodie");

    // await signIn('github', {email: state.email, callbackUrl: 'http://localhost:3000/catalog'})
  };

  const handleChange = (e: any) => {
    setState({ ...state, [`${e.target.name}`]: e.target.value });
  };

  // console.log("Session", session);

  // if (session) {
  //   return (
  //     <>
  //       {/* Signed in as {session} <br /> */}
  //       <button onClick={() => signOut()}>Sign out</button>
  //     </>
  //   );
  // }

  return (
    <>
      {err && <p className="mb-2 text-lg text-center text-red-700">{err}</p>}
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center justify-center"
      >
        <input
          className="p-2 m-2 w-64 text-black rounded-md"
          type="text"
          name="email"
          value={state.email}
          onChange={handleChange}
        />
        <input
          className="p-2 m-2 w-64 text-black rounded-md"
          type="text"
          name="password"
          value={state.password}
          onChange={handleChange}
        />
        <button className="px-2 py-1 mt-2 border rounded-md" type="submit">
          Sign In
        </button>
      </form>
    </>
  );
};

export default Login;
