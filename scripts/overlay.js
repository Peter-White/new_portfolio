// Overylay jQuery
$(document).ready(function(){

  var $overlay = $('<div id="overlay"></div>');
  var $infoBox = $('<div id="infoBox"></div>');

  //Add overlay
  $overlay.append($infoBox)
  $("body").append($overlay);

  //Capture the click event on a link to an image
  $("#projects").on('click', '.project button',function(event){
    event.preventDefault();
    var $id = $(this).attr("id");

    $.ajax({
      type: 'GET',
      url: 'https://portfolio-backend.herokuapp.com/projects/' + $id,
      success: function(project) {
        var infoHTML = '<h3>' + project[0].title + '</h3>';
        infoHTML += '<br>';
        infoHTML += '<h4>Summary:</h4><p>' + project[0].summary + '</p>';
        infoHTML += '<h4>Technologies Used:</h4><p>' + project[0].technologies + '</p>'
        infoHTML += '<br>';
        if(project[0].url !== ""){
          infoHTML += '<a href=' + project[0].url + ' class="fa fa-link fa-3x"></a>&nbsp&nbsp&nbsp&nbsp';
        }
        if(project[0].github !== ""){
          infoHTML += '<a href=' + project[0].github + ' class="fa fa-github fa-3x"></a>';
        }
        infoHTML += '<div class="ready">';
        if(project[0].desktop === true) {
          infoHTML += '<i class="fa fa-desktop fa-3x" aria-hidden="true"></i>';
        }
        if(project[0].mobile === true) {
          infoHTML += '&nbsp&nbsp&nbsp&nbsp<i class="fa fa-mobile fa-3x" aria-hidden="true"></i>';
        }
        infoHTML += '</div>';
        $infoBox.html(infoHTML);
        $overlay.fadeIn("fast");
    },
      error: function() {
        alert('error loading project data');
      },
    });

    //Show the overlay.
  $infoBox.click(function(event){
    event.stopPropagation()
  });
  //When overlay is clicked
  $overlay.click(function(){
    //Hide the overlay
    $overlay.hide();
    $infoBox.html("");
  });
});
});
