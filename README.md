R7Storage
=========
[![TravisCI](http://img.shields.io/travis/r7com/R7Storage.svg?style=flat-square)](https://travis-ci.org/r7com/R7Storage)
[![Code Climate](http://img.shields.io/codeclimate/github/r7com/R7Storage.png?style=flat-square)](https://codeclimate.com/github/r7com/R7Storage)


### About
R7Storage is a little library for data storage in the client side.
It uses localStorage with fallback to cookies.


### Usage
* Clone the repo ```git clone git@github.com:r7com/R7Storage.git```


```javascript
	R7Storage.setItem("user", "Guilherme"); //return true
	R7Storage.setItem("user"); //return Error
	R7Storage.setItem(); //return Error

	R7Storage.getItem("user"); //return "Guilherme"
	R7Storage.getItem("user2"); //return false
	R7Storage.getItem(); //return Error

	R7Storage.deleteItem("user"); //return true
	R7Storage.deleteItem("userFail"); //return false
	R7Storage.deleteItem(); //return Error

	R7Storage.hasItem("user"); //return true
	R7Storage.hasItem("userFail"); //return false
	R7Storage.hasItem(); //return Error
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

