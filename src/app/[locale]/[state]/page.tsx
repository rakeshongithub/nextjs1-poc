import { createPageRoutes, transformStateCity } from "@/src/utils/common";
import React from "react";

export const revalidate = 3600;

export async function generateStaticParams() {
  const { stateLists } = transformStateCity();
  return createPageRoutes(stateLists);
}

export default function StatePage({ params }: any) {
  console.log(params);
  return <div>StatePage</div>;
}
