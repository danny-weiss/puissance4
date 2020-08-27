	function get_horizontal(row, col, current_player){
		var min_index = Math.max(col - 3, 0);
		var max_index = Math.min(col + 3, 6);
		var nb_same = 0;
		for (current_col = min_index; current_col <= max_index; current_col++){
			var new_cell = find_cell(row, current_col);
			if (new_cell.className == current_player) {
				nb_same++;
				if (nb_same >= 4) {
					if (current_player == 'player1'){
						document.getElementById('whose_turn').innerHTML = "les jaunes ont gagn\351";
						return 2;
					} 
					else {
						document.getElementById('whose_turn').innerHTML = "les rouges ont gagn\351";
						return 2;
					}
				}
			} 
			else 
			{
				nb_same = 0;
			}
		}
	return get_vertical(row, col, current_player)		
	}
	function get_vertical(row, col, current_player){
		var min_index = row;
		var max_index = Math.min(row + 3, 5);

		var nb_same = 0;
		for (current_row = min_index; current_row <=  max_index; current_row++){
			var new_cell = find_cell(current_row, col);
			if (new_cell.className == current_player) {
				nb_same++;
				if (nb_same >= 4){
					if (current_player == 'player1'){
						document.getElementById('whose_turn').innerHTML = "les jaunes ont gagn\351";
						return 2;
					} else {
						document.getElementById('whose_turn').innerHTML = "les rouges ont gagne\351";
						return 2;
					
					}
				}	
			}
		}
		return get_left_diagonal(row, col, current_player);

	}
	function get_left_diagonal(row, col, current_player){
		var min_vertical_index = Math.max(row - 3, 0);
		var max_vertical_index = Math.min(row + 3, 5);
		var min_horizontal_index = Math.max(col - 3, 0);
		var max_horizontal_index = Math.min(col + 3, 6);
		var nb_same = 0;
		var current_col = min_horizontal_index
		for (current_row = min_vertical_index; current_row <=  max_vertical_index && current_col <= max_horizontal_index; current_row++){
			var new_cell = find_cell(current_row, current_col);
			if (new_cell.className == current_player) {
				nb_same++;
				if (nb_same >= 4){
					if (current_player == 'player1'){
						document.getElementById('whose_turn').innerHTML = "les jaunes ont gagn\351";
						return 2;
					} else {
						document.getElementById('whose_turn').innerHTML = "les rouges ont gagn\351";
						return 2;
					
					}
				}	
			}
		current_col++;	
		}
	console.log(nb_same)
	}

	var odd_or_even = 0;
	function player1_or_player2() {
		var result = odd_or_even % 2;
		odd_or_even++;
		if (result == 1) {
			document.getElementById("whose_turn").innerHTML = "Au tour des jaunes";																									
			return 'player2';
		}
	 	if (result == 0){
	 		document.getElementById("whose_turn").innerHTML = "Au tour des rouges";	
			return 'player1';
		}
	
	}
	function find_empty_cell(col) {
		for (i = 5; i != -1; i--) {
			var cell = find_cell(i, col);
			if (cell.className == '') {
				return i;
			}
		}
	}

	function find_cell(row, column) {
		//row=0 is the top row, col=0 is the left col
		var mytable = document.getElementsByTagName('tbody')[0];
		return mytable.children[row].children[column]
	}
	var stopgame = false;
	function coloring(column) {
		
		if (stopgame == true) {
			return
		}

		var row = find_empty_cell(column)			
		if (row == undefined){
			window.alert('la colonne est remplie')
			return
		}
		var class_to_add = player1_or_player2();
		var cell = find_cell(row, column);
		cell.className = class_to_add;
		var who_won = get_horizontal(row, column, class_to_add);
		if (who_won == 2){
			stopgame = true;
		}

	}