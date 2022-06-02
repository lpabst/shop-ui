import React, { useContext, useEffect } from "react";
import { getHomePageProducts } from "../../api/productsApi";
import { useActions } from "../../context/actions/actions";
import { productContext } from "../../context/reducers/productContext";

function Home() {
  const { state } = useContext(productContext);
  const actions = useActions();

  useEffect(() => {
    async function getHomePageProductsEffect() {
      const products = await getHomePageProducts();
      actions.product.setHomePageProducts(products);
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
