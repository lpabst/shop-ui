import React, { useContext, useEffect } from "react";
import { getHomePageProducts } from "../../api/productsApi";
import { productActions, productContext } from "../../context/productContext";

function Home() {
  const { state, dispatch } = useContext(productContext);

  useEffect(() => {
    async function getHomePageProductsEffect() {
      const products = await getHomePageProducts();
      dispatch({
        type: productActions.SET_HOME_PAGE_PRODUCTS,
        value: products,
      });
    }
    getHomePageProductsEffect();
  }, []);

  return (
    <div className="home">
      {state.homePageProducts.map((product) => (
        <div className="product" key={product.id}>
          {product.name}
        </div>
      ))}
    </div>
  );
}

export default Home;
