"use client";

import { useParams } from "next/navigation";
import { Suspense } from "react";

const OrganizationIdPage = () => {
  const { organizationId } = useParams();
  console.log(organizationId);

  return (
    <div className="w-full mb-20">OrganizationIdPage , {organizationId} </div>
  );
};

export default OrganizationIdPage;
