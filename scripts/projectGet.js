// Projects JQuery Function
$(document).ready(function() {

  var projectAPI = "https://portfolio-backend.herokuapp.com/projects";
  var projectOptions = {
    format: "json"
  };

  function displayProjects(data) {
    var projectHTML = '<div class="row">';
    $.each(data, function(i, project) {
      projectHTML += '<div class="project col-xs-12 col-sm-3">';;
      projectHTML += '<button id=' + project._id + '><img src=' + project.image + ' class="img-responsive"></button>';
      projectHTML += '</div>';
    });
    projectHTML += '</div>';
    $('#projects').append(projectHTML);
  };
  $.getJSON(projectAPI, projectOptions, displayProjects);
});
