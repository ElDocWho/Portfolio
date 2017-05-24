'use strict';

var projects = [];

function PortfolioProjects (rawDataObject){
  this.projectName = rawDataObject.projectName;
  this.projectURL = rawDataObject.projectURL;
  this.projectDescription = rawDataObject.projectDescription;
}

PortfolioProjects.prototype.toHtml = function() {
  var $newProject = $('project.template').clone();
  $($newProject).removeClass('template');
  $newProject.find('address a').html(this.projectName);
  $newProject.find('address a').attr('href', this.projectURL);
  $newProject.find('h1').html(this.projectName);
  $newProject.find('.project-desc').html(this.projectDescription);
  return $newProject;
};

rawData.sort(function(a,b) {
  return (new Date(b.publishedOn)) - (new Date(a.publishedOn));
});

rawData.forEach(function(projectObject) {
  projects.push(new PortfolioProjects(projectObject));
});
projects.forEach(function(project) {
  $('#projects').append(project.toHtml());
});
$('header').hover(function(){
  $('#preview').html('<img id="round" src="img/mouse.gif" alt="busmall">').show();
},
function () { $('#preview').hide();
});
$(document).ready(function(){
  $('nav.main-navig').hide();
});
$('#ham').click(function(){
  $('nav.main-navig').toggle();
});
$('#projects project:nth-of-type(2)').on('click', function() {
  window.location.href = 'https://github.com/ElDocWho/bus-mall1';
});
$('#projects header:nth-of-type(3)').on('click', function() {
  window.location.href = 'https://github.com/ElDocWho/cookie-stand1';
});
$('#projects header:nth-child(4)').on('click', function() {
  window.location.href = 'https://github.com/ElDocWho/lab-02-about-me';
});
