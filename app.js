'use strict';

var projects = [];

function PortfolioProjects (rawDataObject){
  this.projectName = rawDataObject.projectName;
  this.projectURL = rawDataObject.projectURL;
  this.projectDescription = rawDataObject.projectDescription;
}

PortfolioProjects.prototype.toHtml = function() {
  var getTemplate = $('#template').html();
  var templates = Handlebars.compile(getTemplate);
  return templates(this);
};
rawData.forEach(function(projectObject) {
  projects.push(new PortfolioProjects(projectObject));
});

projects.forEach(function(project){
  $('#projects').append(project.toHtml());
});

$(document).ready(function(){
  $('#preview').hide();
});

$('section header:nth-child(1)').hover(function(){
  console.log(1);
  $('#preview').show();
},
function () { $('#preview').hide();
});

$('section header:nth-child(2)').hover(function(){
  console.log(2);
  $('#preview').show();
},
function () { $('#preview').hide();
});
$('section header:nth-child(3)').hover(function(){
  console.log(3);
  $('#preview').show();
},
function () { $('#preview').hide();
});

$(document).ready(function(){
  $('nav.main-navig').hide();
});
$('#ham').click(function(){
  $('nav.main-navig').toggle();
});
$('section header:nth-child(1)').on('click', function() {
  window.location.href = 'https://github.com/ElDocWho/bus-mall1';
});
$('section header:nth-child(2)').on('click', function() {
  window.location.href = 'https://github.com/ElDocWho/cookie-stand1';
});
$('section header:nth-child(3)').on('click', function() {
  window.location.href = 'https://github.com/ElDocWho/lab-02-about-me';
});
$(document).ready(function(){
  $('#about-me').hide();
});
$('a.icon-address-book').click(function(){
  $('#about-me').show();
  $('#projects').hide();
});

//about me
$(document).ready(function(){
  $('#about-me').hide();
});
$('a.icon-home').click(function(){
  $('#about-me').hide();
  $('#projects').show();
});
