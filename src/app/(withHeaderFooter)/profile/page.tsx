"use client";

import React, { Suspense } from "react";
import ProfilePage from "@/lib/pages/ProfilePage/ui/ProfilePage/ProfilePage";
import { useSearchParams } from "next/navigation";

const Page = () => {
  const searchParams = useSearchParams();
  const isCreator = searchParams.get("profile") === "org";

  return <ProfilePage isCreator={isCreator}></ProfilePage>;
};

const PageSuspenseWrapper = () => {
  return (
    <Suspense>
      <Page />
    </Suspense>
  );
};

export default PageSuspenseWrapper;
