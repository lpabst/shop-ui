import { createAccount, logout } from "../../api/userApi";
import { userActions } from "../reducers/userContext";

export class UserActions {
  actions;
  dispatch;

  constructor(actions, dispatch) {
    this.actions = actions;
    this.dispatch = dispatch;

    // React doesn't bind "this" to the class... :vomit: I guess I need typescript or something
    this.setUserSession = this.setUserSession.bind(this);
    this.logout = this.logout.bind(this);
    this.setSignInError = this.setSignInError.bind(this);
    this.setCreateAccountErrors = this.setCreateAccountErrors.bind(this);
    this.createAccount = this.createAccount.bind(this);
  }

  async setUserSession(userSession) {
    this.dispatch({
      type: userActions.SET_USER_SESSION,
      value: userSession,
    });
  }

  async logout() {
    await logout();
    this.dispatch({
      type: userActions.USER_LOGGED_OUT,
    });
  }

  setSignInError(error) {
    this.dispatch({
      type: userActions.SET_SIGN_IN_ERROR,
      value: error,
    });
  }

  setCreateAccountErrors(errors) {
    this.dispatch({
      type: userActions.SET_CREATE_ACCOUNT_ERRORS,
      value: errors,
    });
  }

  async createAccount(accountInfo) {
    try {
      await createAccount(accountInfo);
      this.actions.modal.showVerifyAccountModal();
    } catch (e) {
      this.actions.user.setCreateAccountErrors(["Unexpected server error"]);
    }
  }
}
