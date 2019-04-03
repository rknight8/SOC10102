var currentRoom = "start";
function changeRoom(dir) {
    if (rooms[currentRoom].direction[dir] !== undefined) {
        currentRoom = rooms[currentRoom].direction[dir];
        $('#game-text').append("<p>" + rooms[currentRoom].description + "</p>");
}
}

$(document).ready(function(){
  $('#game-text').append("<p>" + rooms.start.description + "</p>");

  $(document).keypress(function(key){
    if(key.which === 13 && $('#user-input').is(':focus')) {
      var value = $('#user-input').val().toLowerCase();
      switch(value) {
        case "get up":
          changeRoom ("get up");
          break;
        default:
          alert("Invalid move");
      }
    }
  });

});
