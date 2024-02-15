"use client";
import ReactCountryFlag from "react-country-flag";

export default function Flags({ code }: { code: string }) {
  return <ReactCountryFlag className=" " svg countryCode={code} />;
}
