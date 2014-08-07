R7Storage
=========
[![TravisCI](https://travis-ci.org/r7com/R7Storage.svg?branch=master)](https://travis-ci.org/r7com/R7Storage)
[![Code Climate](https://codeclimate.com/github/r7com/R7Storage.png)](https://codeclimate.com/github/r7com/R7Storage)


### About
R7Storage is a little library for data storage in the client side.
It uses localStorage with fallback to cookies.


### Usage
* Clone the repo ```git clone git@github.com:r7com/R7Storage.git```


```javascript
	R7Storage.setItem("user", "Guilherme"); //return true
	R7Storage.setItem("user"); //return Error
	R7Storage.setItem(); //return Error

	R7Storage.get("user"); //return "Guilherme"
	R7Storage.get("user2"); //return false
	R7Storage.get(); //return Error

	R7Storage.deleteItem("user"); //return true
	R7Storage.deleteItem("userFail"); //return false
	R7Storage.deleteItem(); //return Error

	R7Storage.has("user"); //return true
	R7Storage.has("userFail"); //return false
	R7Storage.has(); //return Error
```

### Browser Support
* Internet Explorer: **6+**
* Chrome: **All versions**
* Firefox: **All versions**

### Contribute
* **Fork it!**
* Create your feature branch: git checkout -b my-new-feature
* Commit your changes: git commit -A 'Add some feature'
* Push to the branch: git push origin my-new-feature
* **Submit a pull request :D**

### Running tests
* Run ```npm install```
* Run ```gulp test```

### Building file
* Run ```npm install```
* Run ```gulp build```

