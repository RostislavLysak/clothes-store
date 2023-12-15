import React from "react";

export default function loading() {
  return (
    <div className="flex justify-center items-center fixed top-0 left-0 w-full min-h-screen backdrop-blur-md z-50">
      <div className="w-20 h-20 border-8 border-sky-500 border-t-8 border-t-gray-500 rounded-full animate-spin" />
    </div>
  );
}
