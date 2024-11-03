import { details } from "@/public/details";
import Link from "next/link";
import React from "react";

export default function AboutUs() {
  console.log(details);
  return (
    <div className="p-4 mx-[20vw] text-center">
      <h2 className="text-2xl my-3">AboutUs</h2>
      <div className="flex flex-col gap-5">
        {details.map((employee) => (
          <Link className="p-2 text-white bg-blue-400 hover:bg-blue-500" href={`about-us/${employee.id}`}>{employee.name}</Link>
        ))}
      </div>
    </div>
  );
}
