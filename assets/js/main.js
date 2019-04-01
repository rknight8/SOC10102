$(document).ready(function(){
  $(document).keypress(function(key){
    if(key.which === 13 && $('#user-input').is(':focus')) {
      var value = $('#user-input').val();
      alert(value);
    }
  });

});
