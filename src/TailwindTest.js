import React from "react";
import { BiHomeAlt2 } from "react-icons/bi";
import { ReactComponent as Icon } from "./Icon.svg";
import { ReactComponent as Logo } from "./practicelogo.svg";

function TailwindTest() {
  return (
    <>
      <nav className="w-64 border-r-partnerblue border-r flex justify-start flex-col h-screen pt-10 pr-5">
        <ul className="pl-10">
          <Logo className="mb-6" />
          <li className="font-primary text-white px-4 py-4 flex rounded-lg flex-row bg-partnerblue items-center pt-5 focus:bg-partnerblue hover:bg-partnerblue">
            {" "}
            <Icon className="mr-4" />
            Dashboard
          </li>
          <li className="font-primary flex flex-row items-center pt-10">
            {" "}
            <Icon className="mr-4" />
            Intakes
          </li>
          <li className="font-primary flex flex-row items-center pt-10">
            <Icon className="mr-4" />
            Practice
          </li>
        </ul>
      </nav>
    </>
  );
}

export default TailwindTest;
