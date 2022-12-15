import React, { useState, useEffect } from "react";
import Input from "../commons/Input";

const EditProducts = ({ products, setProducts, currentProductId }) => {
  const currentProduct = products.find(
    (product) => product.id === currentProductId
  );

  const [productName, setProductName] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [productPrice, setProductPrice] = useState("");

  useEffect(() => {
    if (!currentProduct) {
      setProductName("");
      setProductDescription("");
      setProductPrice("");
    } else {
      setProductName(currentProduct.name);
      setProductDescription(currentProduct.description);
      setProductPrice(currentProduct.price);
    }
  }, [currentProductId, currentProduct]);

  const productToSubmitId = currentProduct
    ? currentProduct.id
    : products.length + 1;
  const now = new Date();
  const handleSubmit = (e) => {
    const productToSubmit = {
      creationTime: now.getTime(),
      id: productToSubmitId,
      name: productName,
      description: productDescription,
      price: Number(productPrice),
    };
    e.preventDefault();
    if (!currentProduct) {
      setProducts((prevState) => [...prevState, productToSubmit]);
    } else {
      const newProducts = products;
      newProducts[newProducts.indexOf(currentProduct)] = productToSubmit;
      setProducts([...newProducts]);
    }
  };

  return (
    <fieldset className="editProductsContainer">
      <img
        src="https://ynet-images1.yit.co.il/picserver5/wcm_upload/2020/04/05/B1KtLz11DPI/POY_2020_RGB_5cm.jpg"
        width="20%"
        height="18%"
        alt="product image"
      />
      <legend>{productName} Details </legend>
      <form className="formClass" onSubmit={handleSubmit}>
        <div className="inputContainer">
          <Input
            label="Name"
            id="productName"
            placeholder="Product Name"
            value={productName}
            onChange={setProductName}
          />
        </div>
        <div className="inputContainer">
          <label to="description">Description</label>
          <textarea
            id="description"
            placeholder="Product Name"
            value={productDescription}
            onChange={(e) => setProductDescription(e.target.value)}
          />
        </div>
        <div className="inputContainer">
          <Input
            label="Price"
            id="price"
            placeholder="Product Price"
            type="number"
            min={1}
            value={productPrice}
            onChange={setProductPrice}
          />
        </div>
        <Input type="submit" value="Save" className="submitButton" />
      </form>
    </fieldset>
  );
};

export default EditProducts;
