export default function(Vue) {
  Vue.global = {
    setUser(user) {
      localStorage.setItem("_user", JSON.stringify(user));
    },

    setAccounts(enrolled_accounts) {
      localStorage.setItem(
        "_enrolled_accounts",
        JSON.stringify(enrolled_accounts)
      );
    },

    setAccount(view_account) {
      localStorage.setItem("_view_account", JSON.stringify(view_account));
    },

    getUser() {
      return JSON.parse(localStorage.getItem("_user"));
    },

    getEnrolledAccounts() {
      return JSON.parse(localStorage.getItem("_enrolled_accounts"));
    },
    getAccount() {
      return JSON.parse(localStorage.getItem("_view_account"));
    },

    destroyGlobal() {
      localStorage.removeItem("_user");
      localStorage.removeItem("_enrolled_accounts");
      localStorage.removeItem("_view_account");
    }
  };

  Object.defineProperties(Vue.prototype, {
    $global: {
      get() {
        return Vue.global;
      }
    }
  });
}
