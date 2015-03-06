/*jslint nomen: true, white: true*/
/*global window, document, unescape, escape*/

/**
* R7Storage handles data storage in the client side,
* by using localstorage with fallbacks using cookies!
*
* Browser support: IE6+
*
*
* @example
*   R7Storage.setItem("user", "Guilherme"); //return true
*   R7Storage.setItem("user"); //return Error
*   R7Storage.setItem(); //return Error
*
*   R7Storage.getItem("user"); //return "Guilherme"
*   R7Storage.getItem("user2"); //return false
*   R7Storage.getItem(); //return Error
*
*   R7Storage.deleteItem("user"); //return true
*   R7Storage.deleteItem("userFail"); //return false
*   R7Storage.deleteItem(); //return Error
*
*   R7Storage.hasItem("user"); //return true
*   R7Storage.hasItem("userFail"); //return false
*   R7Storage.hasItem(); //return Error
*
*
* @main R7Storage
* @author Guilherme Pontes
* @class R7Storage
* @constructor
*/
var R7Storage = R7Storage || (function(){
  'use strict';

  var contains = function(arr, value){
    return !!~arr.indexOf(value);
  };

  var application = {

   /**
     * Set the tecnology that will be used to
     * store data.
     *
     * @property type
     * @default ""
     * @type String
     * @return {Boolean} Has feature or not
    **/
    type: '',

   /**
     * Set the tecnology that will be used
     * store data.
     *
     * @method use
     * @return {Boolean} Has feature or not
    **/
    use: function(type){
      var supportedTypes = ['cookies', 'localStorage'];

      if(type && contains(supportedTypes, type)) {
        application.type = type;
      }
    },

    /**
     * Feature detection of localStorage.
     * This method helps the application to make it work in any browser,
     * detecting if the user have localStorage, if he's not using a browser
     * that do not have this feature, it will use cookies instead.
     *
     * @method supportsLocalStorage
     * @return {Boolean} Has feature or not
    **/
    supportsLocalStorage: function() {
      try {
        return (window.localStorage !== 'undefined');
      } catch(e){
        return false;
      }
    },

    /**
     * Set a value that you can retrieve later
     * even when you refreshing the page!
     *
     * @method setItem
     * @param {String} key
     * @param {String} value
     * @return {Boolean} Saved or not
    **/
    setItem: function(key, value) {
      if(!key || typeof value === 'undefined') {
        throw new Error('R7Storage.set(key, value): You need to enter the {key} and the {value}!');
      }

      //replace the value of the key by deleting itself first
      if(this.hasItem(key)) {
        this.deleteItem(key);
      }

      if(!this.supportsLocalStorage() || this.type === 'cookies') {
        var cookies = escape(key) + '=' + escape(value) + '; expires=Tue, 19 Jan 2038 03:14:07 GMT; path=/';

        if(cookies.length > 4090) {
          throw new Error('R7Storage.set(): Storage is out of memory. Try adding less data.');
        }

        document.cookie = cookies;
      } else {
        localStorage.setItem(key, value);
      }

      return true;
    },

    /**
     * Get a value from a key that have been saved before
     *
     * @method getItem
     * @param {String} key
     * @return {String}
    **/
    getItem: function(key) {
      if(!key) {
        throw new Error('R7Storage.getItem(key): You need to enter the {key}!');
      }

      if (!this.hasItem(key)) {
        return false;
      }

      var keyReturned;

      if(!this.supportsLocalStorage() || this.type === 'cookies') {
        keyReturned = unescape(document.cookie.replace(new RegExp('(?:^|.*;\\s*)' + escape(key).replace(/[\-\.\+\*]/g, '\\$&') + '\\s*\\=\\s*((?:[^;](?!;))*[^;]?).*'), '$1'));
      } else {
        keyReturned = localStorage.getItem(key);
      }

      return keyReturned;
    },

    /**
     * Delete a value saved using the key
     *
     * @method deleteItem
     * @param {String} key
     * @return {Boolean} Deleted or not
    **/
    deleteItem: function(key) {
      if(!key) {
        throw new Error('R7Storage.deleteItem(key): You need to enter the {key}!');
      }

      if (!this.hasItem(key)) {
        return false;
      }

      if(!this.supportsLocalStorage() || this.type === 'cookies') {
        document.cookie = escape(key) + '=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/';
      } else {
        localStorage.removeItem(key);
      }

      return true;
    },

    /**
     * Verify if the key exists
     *
     * @method hasItem
     * @param {String} key
     * @return {Boolean} Has the key or not
    **/
    hasItem: function(key) {
      if(!key) {
        throw new Error('R7Storage.has(key): You need to enter the {key}!');
      }

      var hasKey;

      if(!this.supportsLocalStorage() || this.type === 'cookies') {
        hasKey = (new RegExp('(?:^|;\\s*)' + escape(key).replace(/[\-\.\+\*]/g, '\\$&') + '\\s*\\=')).test(document.cookie);
      } else {
        hasKey = localStorage.hasOwnProperty(key);
      }

      return hasKey;
    }
  };

  return application;
}());
