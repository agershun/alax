// Extend one object with another one
function extend(a,b) {
    if(typeof a == 'undefined') a = {};
    for(key in b) {
        if(b.hasOwnProperty(key)) {
            a[key] = b[key]
        }
    }
    return a;
};


// Save file
function saveFile (filename,data,cb){
 	// Take from AlaSQL
};