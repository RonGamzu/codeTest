import React from "react";

const ProductItem = ({ product, setCurrentProductId, onDelete }) => {
  return (
    <div
      className="productItemContainer"
      key={product.id}
      onClick={() => setCurrentProductId(product.id)}
    >
      <img
        src="https://ynet-images1.yit.co.il/picserver5/wcm_upload/2020/04/05/B1KtLz11DPI/POY_2020_RGB_5cm.jpg"
        width="20%"
        height="18%"
        alt="product image"
      />

      <div>
        <h3>{product.name}</h3>
        <p>{product.description}</p>
      </div>
      <button
        className="deleteButton"
        onClick={() => {
          onDelete(product.id);
        }}
      >
        Delete
      </button>
    </div>
  );
};

export default ProductItem;
