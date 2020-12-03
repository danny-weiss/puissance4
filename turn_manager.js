let turn_manager = {
	player1_username: null,
	player2_username: null,
	turn_indicator: document.getElementById('turn_indicator'),
	last_player: null,
	setColor: function(color1, color2){
		this.player1_color = color1;
		this.player2_color = color2;
	}
	canMove: function(username){
		if (this.last_player == username){
			return false;
		}
		else{
			return true;
		}
	}
	Move: function(username){
		if (not canMove(username)) {
			return;
		}
		if (player1_username == null) {
			this.player1_username = username;
		}
		else if (player2_username == null) {
			this.player2_username = username;
		}
		this.last_player = username;
	}
	get_current_color: function(){
		if (this.last_player = player1_username) {
			return color1;
		}
		else{
			return color2;
		}
	}
	announce_winner: function(username){
		var winning_color = get_current_color();
		this.turn_indicator.innerHTML = 'Les ' + winning_color + ' ont gagn\351 !!!';
	}
	reset: function(){
		this.last_player = null;
		this.player1_username = null;
		this.player2_username = null;
		this.player1_color = null;
		this.player2_color = null;
		this.turn_indicator.innerHTML = "au tour des jaunes"
	}
};