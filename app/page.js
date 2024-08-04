"use client";
import { useContext } from "react";
import { Context } from "./provider/ContextProvider";

export default function Home() {
  const value = useContext(Context);
  console.log(value);

  return <div>Mukta</div>;
}
