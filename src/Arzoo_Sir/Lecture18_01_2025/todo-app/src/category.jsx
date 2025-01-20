import React from 'react'

const Category = () => {
  return (
    <div>
      props.cat.cat_name
    </div>
    {<Product item = {props.cat.items}>}
  );
};

export default Category
