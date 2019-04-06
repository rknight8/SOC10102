var currentRoom = "start";
var commands = ["go", "push", "action"];
var inventory = [];


// function to change rooms
function changeRoom(dir) {
    if (rooms[currentRoom].direction[dir] !== undefined) {
        currentRoom = rooms[currentRoom].direction[dir];
        $('#game-text').append("<p>" + rooms[currentRoom].description + "</p>");
    } else {
        $('#game-text').append("<p>You cannot go that way!</p>");
      }
}

// function for inventory
function showInventory() {
  if(inventory.length === 0) {
    $('#game-text').append("<p>You are not carrying anything!</p>");
    return;
    }
  $('#game-text').append("<p>Inventory:</p>");
  $('#game-text').append("<p><ul>");
  for(var i=0; i < inventory.length; i ++) {
    $('#game-text').append("<li>" + inventory[i] + "</li>");
  }
  $('#game-text').append('</ul></p>');
}

// function to examine
function checkItem(){
if(rooms[currentRoom].item !== undefined){
  $('#game-text').append("<p>" + rooms[currentRoom].item.equipment + "</p>");
} else {
  $('#game-text').append("<p>There is nothing of interest</p>");
  }
}

// function to take an action e.g. push button
function takeAction(){
  if(rooms[currentRoom].action !== undefined){
    $('#game-text').append("<p>" + rooms[currentRoom].action.push + "</p>");
  } else {
    $('#game-text').append("<p>Cannot do that here</p>");
  }
}


// function & switch to take in player input
function playerInput(input) {
  var command = input.split(" ")[0];

  switch(command) {
    case "go":
    case "look":
    case "use":
      var dir = input.split(" ")[1];
      changeRoom (dir);
      break;

    case "push":
      takeAction();
      break;

    case "examine":
      checkItem();
      break;

    case "inventory":
      showInventory();
      break;

    default:
    $('#game-text').append("<p>Invalid command!</p>");
  }
}

document.querySelector("#game-container").scrollIntoView(false);

$(document).ready(function(){
  $('.game-intro').fadeIn('slow');
  $('#start').click(function() {
    $('#game-container').show();
    $('.game-intro').hide();
  });

  $('#game-text').append("<p>" + rooms.start.description + "</p>");

  $(document).keypress(function(key){
    if(key.which === 13 && $('#user-input').is(':focus')) {
      var value = $('#user-input').val().toLowerCase();
      $('#user-input').val("");
      playerInput(value);
    }
  });

});
