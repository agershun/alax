var alax = require('../dist/alax.js');

describe('Test001 - AlaX prototype',function(){
	it('1. Simple parameters', function(){
		var res = alax(123);
		assert.deepEqual(res,{
			sheets: [
				{
					sheetid: 'Sheet1',
					cells: {
						{x:1}
					}
				}
			]
		});
		alax([[data]],opts,format,filename);
	});
});

alasql('SELECT * INTO ALAX("mydata.xlsx") FROM ?',[data]);
alax([[1,2,3],[5,6,7]],{columns:[1,2,3]},'mydata.xlsx');