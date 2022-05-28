import React from "react";
import styled from "styled-components";

import PageLayout from "../components/PageLayout";
import ProductCategory from "../components/ProductCategory";

const Product = () => {
  return (
    <PageLayout>
      <ProductCategory />
      상품 목록 영역
    </PageLayout>
  );
};

export default React.memo(Product);
