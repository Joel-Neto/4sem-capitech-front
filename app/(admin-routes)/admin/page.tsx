"use client";

import { useSession } from "next-auth/react";

export default function Admin() {
  const { data } = useSession();

  return <div>Olá, {data?.user.name}</div>;
}
