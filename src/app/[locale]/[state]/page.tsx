import { createPageRoutes, transformStateCity } from "@/src/utils/common";
import React from "react";

export const revalidate = 3600;

export async function generateStaticParams() {
  const { stateLists } = transformStateCity();
  return createPageRoutes(stateLists);
}

export default function StatePage({params: {locale}}: {params: {locale: string}}) {
  console.log({state: locale});
  return <div>StatePage - {locale}</div>;
}
