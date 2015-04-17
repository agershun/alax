var alax = require('../dist/alax.js');

describe('Test001 - AlaX prototype',function(){
	it('1. Save simple XLS/HTM file', function(done){
		var res = alax([{a:1,b:10},{a:2,b:20}],"restest001.xlsx");
		assert(res == 1);
		done();
	});
});

