import React, { useState } from "react";
import styled from "styled-components";

import { productCategories } from "../shared/constant";
import { AppColor } from "../styles/theme";

const CategoryList = styled.ul`
  display: flex;
  align-items: center;

  overflow-x: auto;

  padding: 16px 0;
`;
const CategoryListItem = styled.li`
  margin-right: 10px;

  color: ${({ active }) => (active ? AppColor.main : AppColor.gray_main)};

  :first-child {
    margin-left: 10px;
  }
`;
const SubCategoryList = styled.ul``;
const SubCategoryListItem = styled.li``;

const ProductCategory = () => {
  const [currentCategory, setCurrentCategory] = useState(null);

  const onClickCategory = (key) => {
    setCurrentCategory(key);
  };

  return (
    <div>
      <CategoryList>
        {productCategories.map((item) => (
          <CategoryListItem
            key={item.categoryId}
            onClick={() => onClickCategory(item.categoryId)}
            active={currentCategory === item.categoryId}
          >
            {item.categoryName}
          </CategoryListItem>
        ))}
      </CategoryList>
      <SubCategoryList></SubCategoryList>
    </div>
  );
};
export default React.memo(ProductCategory);
