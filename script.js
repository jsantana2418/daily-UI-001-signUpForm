$(document).ready(function() {
  $("#dontSubmit").click(function(event){
       event.preventDefault();
  });
  $('#funkyForm').okshadow({
    downwards: true
  });
});
