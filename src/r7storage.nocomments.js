var R7Storage = (function(){
  "use strict";

  var application = {
    supportsLocalStorage: function() {
      try {
        return (window.localStorage !== 'undefined');
      } catch(e){
        return false;
      }
    },

    set: function(key, value) {
      if(!key || typeof value === "undefined") {
        throw new Error("R7Storage.set(key, value): You need to enter the {key} and the {value}!");
      }

      if(this.has(key)) {
        this.delete(key);
      }

      if(!this.supportsLocalStorage()) {
        document.cookie = escape(key) + "=" + escape(value) + "; expires=Tue, 19 Jan 2038 03:14:07 GMT; path=/";
      } else {
        localStorage.setItem(key, value);
      }

      return true;
    },

    get: function(key) {
      if(!key) {
        throw new Error("R7Storage.get(key): You need to enter the {key}!");
      }

      if (!this.has(key)) {
        return false;
      }

      var keyReturned;

      if(!this.supportsLocalStorage()) {
        keyReturned = unescape(document.cookie.replace(new RegExp("(?:^|.*;\\s*)" + escape(key).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=\\s*((?:[^;](?!;))*[^;]?).*"), "$1"));
      } else {
        keyReturned = localStorage.getItem(key);
      }

      return keyReturned;
    },

    delete: function(key) {
      if(!key) {
        throw new Error("R7Storage.delete(key): You need to enter the {key}!");
      }

      if (!this.has(key)) {
        return false;
      }

      if(!this.supportsLocalStorage()) {
        document.cookie = escape(key) + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";
      } else {
        localStorage.removeItem(key);
      }

      return true;
    },

    has: function(key) {
      if(!key) {
        throw new Error("R7Storage.has(key): You need to enter the {key}!");
      }

      var hasKey;

      if(!this.supportsLocalStorage()) {
        hasKey = (new RegExp("(?:^|;\\s*)" + escape(key).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=")).test(document.cookie);
      } else {
        hasKey = localStorage.hasOwnProperty(key);
      }

      return hasKey;
    }
  };

  return application;
}());