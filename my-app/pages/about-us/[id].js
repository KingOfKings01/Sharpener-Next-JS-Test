import { useRouter } from "next/router";
import React from "react";

const details = [
  { id: 1, name: "Yash", role: "Senior Developer" },
  { id: 2, name: "Vaibhav", role: "Backend Developer" },
  { id: 3, name: "Suresh", role: "Frontend Developer" },
];

export default function Details() {
  const router = useRouter();
  const id = router.query.id;

  return (
    <div className="text-2xl text-center mt-10">
      {details.find((employee) => employee.id === parseInt(id)) ? (
        <div>
          <h2>
            {details[id - 1].name} {details[id - 1].role}
          </h2>
        </div>
      ) : (
        <h2>Developer doesn't exist</h2>
      )}
    </div>
  );
}
