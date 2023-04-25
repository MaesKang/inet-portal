export default function(Vue) {
  let authenticatedUser = {};


  Vue.auth = {
    setToken (token, expiration) {
        localStorage.setItem('token',token)
        localStorage.setItem('expiration',expiration)
    },
//store token and expiration variable
    getToken () {
        var token = localStorage.getItem('token');
        var expiration = localStorage.getItem('expiration');

        if( ! token || ! expiration)
        return null

        if(Date.now() > parseInt(expiration)){
          this.destroyToken()
          return null
        } else
        return token
    },
//destroys token to log out from application
    destroyToken() {
      localStorage.removeItem('token')
      localStorage.removeItem('expiration')
    },


    isAuthenticated () {
      if(this.getToken())
        return true
      else
        return false
    },

    setAuthenticatedUser(data) {
      authenticatedUser = data;
    },

    getAuthenticatedUser() {
      return authenticatedUser;
    }

  }

  Object.defineProperties(Vue.prototype,{
    $auth:{
      get:() => {
        return Vue.auth
      }
    }
  })

}
