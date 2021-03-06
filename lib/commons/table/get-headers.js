/*global table */

/**
 * Get any associated table headers for a `HTMLTableCellElement`
 * @param  {HTMLTableCellElement} cell The cell of which to get headers
 * @return {Array}      Array of headers associated to the table cell
 */
table.getHeaders = function (cell) {

	if (cell.hasAttribute('headers')) {
		return commons.dom.idrefs(cell, 'headers');
	}

	var headers = [], currentCell,
		tbl = commons.table.toArray(commons.dom.findUp(cell, 'table')),
		position = commons.table.getCellPosition(cell);

	//
	for (var x = position.x - 1; x >= 0; x--) {
		currentCell = tbl[position.y][x];

		if (commons.table.isRowHeader(currentCell)) {
			headers.unshift(currentCell);
		}
	}

	for (var y = position.y - 1; y >= 0; y--) {
		currentCell = tbl[y][position.x];

		if (currentCell && commons.table.isColumnHeader(currentCell)) {
			headers.unshift(currentCell);
		}
	}

	return headers;

};