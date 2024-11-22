"use client";

import { useSession } from "next-auth/react";

export default function Dashboard() {
  const session = useSession();

  try {
    if (!session) {
      console.log("can't get session");
    }
  } catch (e) {
    console.log(e);
  }

  console.log("sessionsss: ", session);

  return <div className="h-[80vh]">Hi There</div>;
}
