import React, { useState } from "react";
import PageContainer from "./PageContainer";
import EditProducts from "./EditProducts";
import ProductsList from "./ProductsList";
import productsList from "../DAL/api";

const HomePage = () => {

  const [products, setProducts] = useState(productsList);
  const [currentProductId, setCurrentProductId] = useState(null);
  const [sortBy, setSortBy] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const handleDeleteProduct = (productId) => {
    const newProductsList = products.filter(
      (product) => product.id !== productId
    );
    setProducts(newProductsList);
  };
  
  return (
    <PageContainer setCurrentProductId={setCurrentProductId}
    searchTerm={searchTerm}
    setSearchTerm={setSearchTerm}
    setSortBy={setSortBy}
    >
      <ProductsList
        products={products}
        setCurrentProductId={setCurrentProductId}
        onDeleteProduct = {handleDeleteProduct}
        searchTerm={searchTerm}
        sortBy={sortBy}
      />
      <EditProducts
        products={products}
        setProducts={setProducts}
        currentProductId={currentProductId}
      />
    </PageContainer>
  );
};

export default HomePage;
