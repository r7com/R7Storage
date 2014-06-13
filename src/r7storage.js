/*jslint nomen: true, white: true*/
/*global $, _, window, document, localStorage, unescape, escape*/

/**
* R7Storage handles data storage in the client side,
* by using localstorage with fallbacks using cookies!
*
* Browser support: IE6+
*
*
* @example
* 	R7Storage.set("user", "Guilherme"); //return true
* 	R7Storage.set("user"); //return Error
* 	R7Storage.set(); //return Error
*
*  	R7Storage.get("user"); //return "Guilherme"
* 	R7Storage.get("user2"); //return false
* 	R7Storage.get(); //return Error
*
*   R7Storage.delete("user"); //return true
*   R7Storage.delete("userFail"); //return false
*   R7Storage.delete(); //return Error
*
*		R7Storage.has("user"); //return true
*   R7Storage.has("userFail"); //return false
*   R7Storage.has(); //return Error
*
*
* @main R7Storage
* @author Guilherme Pontes
* @class R7Storage
* @constructor
*/
var R7Storage = (function(){
	"use strict";

	var application = {

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
     * @method set
     * @param {String} key
     * @param {String} value
     * @return {Boolean} Saved or not
    **/
		set: function(key, value) {
			if(!key || typeof value === "undefined") {
				throw new Error("R7Storage.set(key, value): You need to enter the {key} and the {value}!");
			}

			//replace the value of the key by deleting itself first
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

		/**
     * Get a value from a key that have been saved before
     *
     * @method get
     * @param {String} key
     * @return {String}
    **/
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

		/**
     * Delete a value saved using the key
     *
     * @method delete
     * @param {String} key
     * @return {Boolean} Deleted or not
    **/
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

		/**
     * Verify if the key exists
     *
     * @method has
     * @param {String} key
     * @return {Boolean} Has the key or not
    **/
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