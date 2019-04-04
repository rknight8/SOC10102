var currentRoom = "start";
function changeRoom(dir) {
    if (rooms[currentRoom].direction[dir] !== undefined) {
        currentRoom = rooms[currentRoom].direction[dir];
        $('#game-text').append("<p>" + rooms[currentRoom].description + "</p>");
      } else {
        $('#game-text').append("<p>You cannot go that way.</p>");
      }
}

function playerInput(input) {
  var command = input.split(" ")[0];
  switch(command) {
  case "get up":
    changeRoom ("get up");
      break;
    case "north":
    changeRoom ("north");
      break;
  default:
    alert("Invalid move");
}

}

$(document).ready(function(){
  $('#game-text').append("<p>" + rooms.start.description + "</p>");

  $(document).keypress(function(key){
    if(key.which === 13 && $('#user-input').is(':focus')) {
      var value = $('#user-input').val().toLowerCase();
      playerInput(value);
    }
  });

});
