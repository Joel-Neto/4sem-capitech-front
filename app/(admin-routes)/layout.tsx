import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import React, { ReactNode } from "react";

import { nextAuthOptions } from "@/lib/nextAuthOptions";

interface IPrivateLayoutProps {
  children: ReactNode;
}

export default async function PrivateLayout({ children }: IPrivateLayoutProps) {
  const session = await getServerSession(nextAuthOptions);

  if (!session) {
    return redirect("/login");
  }

  return <>{children}</>;
}
