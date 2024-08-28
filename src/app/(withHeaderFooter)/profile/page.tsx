"use client";

import React from "react";
import ProfilePage from "@/lib/pages/ProfilePage/ui/ProfilePage/ProfilePage";
import { useSearchParams } from "next/navigation";
import { serialize } from "v8";

const Page = () => {
  const searchParams = useSearchParams();
  const isCreator = searchParams.get("profile") === "org";

  return <ProfilePage isCreator={isCreator}></ProfilePage>;
};

export default Page;
