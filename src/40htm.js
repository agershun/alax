
// Constants
var COLUMN_WIDH = 200;

// Generate HTM file
function generateHTM (data,opts) {
	// Set sheets
	var sheets = {};
	if(opts && opts.sheets) {
		sheets = opts.sheets;
	};

	// Default sheet
	var sheet = {};
	if(typeof sheets[0] != 'undefined') {
		sheet = sheets[0];
	} else {
		sheet = opts;
	};

	// Set sheet name and default is 'Sheet1'
	if(typeof sheet.sheetid == 'undefined') {
		sheet.sheetid = 'Sheet1';
	};
	
	// Generate prologue
	var s = '<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" \
	xmlns="http://www.w3.org/TR/REC-html40"><head> \
	<meta charset="utf-8" /> \
	<!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets> ';

	// Worksheets
	s+=' <x:ExcelWorksheet><x:Name>' + sheet.sheetid + '</x:Name><x:WorksheetOptions><x:DisplayGridlines/>     </x:WorksheetOptions> \
	</x:ExcelWorksheet>';

	s += '</x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]--></head>';

	// Generate body
	s += '<body>';
	s += '<table>';

	// Columns
	var columns = [];
	if(typeof sheet.columns != 'undefined') {
		columns = sheet.columns;
	} else {
		if(data.length > 0) {
			if(data[0] instanceof Array) {
				columns = data[0].map(function(d,idx){
					return {columnid:idx};
				});
			} else if(typeof data[0] == 'object') {
				columns = Object.keys(data[0]).map(function(columnid){
					return {columnid:columnid};
				});
			}
		}
	};

	// Prepare columns
	columns.forEach(function(column,idx){
		if(typeof column.width == 'undefined') column.width = "200px";
		if(typeof column.width == 'number') column.width = column.width + "px";
		dflt(columns,{
			width: "200px",
			title: columnid ||idx,
		});
	});

	// Set columns widths
	s += '<colgroups>';
	columns.forEach(function (column) {
		s += '<col style="width: '+column.width+'"></col>';
	});
	s += '</colgroups>';

	s += '<thead><tr>';
	columns.forEach(function (column,idx) {
		s += '<th '+style(column)+'>' + (column.title||column.columnid||idx) + '</th>';
	});


	// Generate epilogue
	s += '</table>';
	s += '</body>';
	s += '</html>';

	return s;
}

