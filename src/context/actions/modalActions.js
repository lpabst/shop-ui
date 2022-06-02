import { modalActions } from "../reducers/modalContext";

export class ModalActions {
  actions;
  dispatch;

  constructor(actions, dispatch) {
    this.actions = actions;
    this.dispatch = dispatch;

    // React doesn't bind "this" to the class... :vomit: I guess I need typescript or something
    this.closeBaseModal = this.closeBaseModal.bind(this);
    this.showSignInModal = this.showSignInModal.bind(this);
    this.showVerifyAccountModal = this.showVerifyAccountModal.bind(this);
    this.showForgotPasswordModal = this.showForgotPasswordModal.bind(this);
    this.closeSignInModal = this.closeSignInModal.bind(this);
    this.clearSignInModalErrors = this.clearSignInModalErrors.bind(this);
  }

  closeBaseModal() {
    this.dispatch(modalActions.CLOSE_BASE_MODAL);
  }

  showSignInModal() {
    console.log(this);
    this.dispatch(modalActions.SHOW_SIGN_IN_MODAL);
  }

  showVerifyAccountModal() {
    this.dispatch(modalActions.SHOW_VERIFY_ACCOUNT_MODAL);
  }

  showForgotPasswordModal() {
    this.dispatch(modalActions.SHOW_FORGOT_PASSWORD_MODAL);
  }

  closeSignInModal() {
    this.dispatch(modalActions.CLOSE_BASE_MODAL);
    this.clearSignInModalErrors();
  }

  clearSignInModalErrors() {
    this.actions.user.setSignInError("");
    this.actions.user.setCreateAccountErrors([]);
  }
}
