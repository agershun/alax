
/**
 UMD envelope 
 */

(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], factory);
    } else if (typeof exports === 'object') {
        module.exports = factory();
    } else {
        root.alax = factory();
    }
}(this, function () {

//
// Alax main function
//
var alax = function(data,filename,opts,cb){
	// If only two parameters exists
	if(typeof filename == 'object') {
		opts = filename;
		filename = undefined;
	};
	
	// Extend parameters
	opt = {};
	alax.extend(opt,opts);
	
	// Prepare data with template
	var res = alax.prepare(data,opts);

	// Save file to disk
	if(typeof filename != 'object') {
		res = alax.saveFile(filename,res,cb);
	} else {
		res = 1;
		if(cb) res = cb(res);
	}
	return res;
};

/** Current version of alasql */
alax.version = "0.0.1";

// Array of into functions
alax.into = {};

