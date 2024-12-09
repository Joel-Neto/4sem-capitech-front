"use client";

import { useEffect } from "react";
import Hotjar from "@hotjar/browser";

const HOTJAR_ID = 5234029;
const HOTJAR_VERSION = 6;

const HotjarInitializer = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      Hotjar.init(HOTJAR_ID, HOTJAR_VERSION);
    }
  }, []);

  return null;
};

export default HotjarInitializer;
