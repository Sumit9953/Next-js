import { notFound } from "next/navigation";
import React from "react";

const page = ({
  params,
}: {
  params: { productid: "String"; reviewsId: "String" };
}) => {
  if (parseInt(params.reviewsId) > 1000) {
    notFound();
  }
  return (
    <div>
      <h1>
        Prudct {params.productid} review {params.reviewsId}
      </h1>
    </div>
  );
};

export default page;
