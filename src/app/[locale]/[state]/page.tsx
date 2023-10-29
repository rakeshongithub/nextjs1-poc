import { createPageRoutes, transformStateCity } from "@/src/utils/common";
import React from "react";
import { notFound } from "next/navigation";

export const revalidate = 3600;

export async function generateStaticParams() {
  const { stateLists } = transformStateCity();
  return createPageRoutes(stateLists);
}

export default function StatePage({params: {locale, state}}: {params: {locale: string, state: string}}) {
  if(state !== "arizona") {
    notFound();
}
  return <div>StatePage - {state} - {locale}</div>;
}
