$(function (){
  $('.nav-contents li a').on('click', function(event){
    $('#drawer_input').prop('checked', false);
  });
});