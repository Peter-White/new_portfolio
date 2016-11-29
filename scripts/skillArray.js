// Skills jQuery Function
$(document).ready(function(){
  var skills = ["NodeJS", "ExpressJS", "AngularJS", "Ruby on Rails", "Javascript", "Ruby", "HTML", "HTML5","CSS", "CSS3", "MongoDB", "SQL", "Postgresql", "Git", "jQuery", "Ajax", "JSON", "Bootstrap", "Google Search"];

  var innerHTML = '<table><tr>';
  $.each(skills, function(i, val){
    if(i % 3 === 0){
      innerHTML += "</tr><tr><th><h4>" + val + "</h4></th>";
    } else {
      innerHTML += "<th><h4>" + val + "</h4></th>";
    }
  });
  innerHTML += "</tr></table>";
  $("#skills").append(innerHTML);
});
