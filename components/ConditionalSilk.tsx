"use client";

import { usePathname } from "next/navigation";
import Silk from "./Silk";

const HIDDEN_ON = ["/about"];

export default function ConditionalSilk() {
  const pathname = usePathname();
  if (HIDDEN_ON.includes(pathname)) return null;
  return <Silk speed={5.9} scale={0.5} color="#252526" noiseIntensity={0.6} rotation={0} />;
}
