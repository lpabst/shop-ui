import { productActions } from "../reducers/productContext";

export class ProductActions {
  actions;
  dispatch;

  constructor(actions, dispatch) {
    this.actions = actions;
    this.dispatch = dispatch;

    // React doesn't bind "this" to the class... :vomit: I guess I need typescript or something
    this.setHomePageProducts = this.setHomePageProducts.bind(this);
  }

  setHomePageProducts(products) {
    this.dispatch({
      type: productActions.SET_HOME_PAGE_PRODUCTS,
      value: products,
    });
  }
}
