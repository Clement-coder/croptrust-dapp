"use client";

import { Toaster } from "react-hot-toast";

export default function ToastProvider({ children }) {
  return (
    <>
      {children}
      <Toaster position="top-right" reverseOrder={false} />
    </>
  );
}
