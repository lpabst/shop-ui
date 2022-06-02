import { ProductActions } from "./productActions";
import { ModalActions } from "./modalActions";
import { UserActions } from "./userActions";

class Actions {
  user;
  modal;

  constructor({ userDispatch, modalDispatch, productDispatch }) {
    this.user = new UserActions(this, userDispatch);
    this.modal = new ModalActions(this, modalDispatch);
    this.product = new ProductActions(this, productDispatch);
  }
}

/* 
Global State Actions API. This is an experiment, but here is the thought process behind this: 
- App.jsx instantiates the actions class with all of the dispatches used throughout the app
- components interact with global state actions by using useActions(). Dispatches are abstracted into well named functions that make it clear what they do
- all updates to global state reducers should happen through this api. All network calls should happen behind this api, with appropriate results being saved on global state. Long story short, components interact with global state through this api, 
- each action file should only directly modify it's own corresponding reducer, and calls to update other reducers should be encapsulated in that reducer's action class. i.e. if a method in the userActions file needs to update user state and modal state, it can dispatch to udpate its own state, then call a method in the modalActions file that dispatches to update modal state
*/
let actionsInstance;
export function useActions() {
  if (!actionsInstance) {
    throw Error(
      "useActions not initiated. Please init in App.jsx and pass in all context dispatches"
    );
  }
  return actionsInstance;
}

export function setupUseActions(dispatches) {
  if (!actionsInstance) {
    if (
      !dispatches.userDispatch ||
      !dispatches.modalDispatch ||
      !dispatches.productDispatch
    ) {
      throw Error(
        "You must provide all dispatch types when instantiating global actions"
      );
    }
    actionsInstance = new Actions(dispatches);
  }
  return actionsInstance;
}
