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

$('#projects project:nth-child(2) header').on('click', function() {
  window.location.href = 'https://github.com/ElDocWho/bus-mall1';
});
$('#projects header:nth-child(3)').on('click', function() {
  window.location.href = 'https://github.com/ElDocWho/cookie-stand1';
});
$('#projects header:nth-child(4)').on('click', function() {
  window.location.href = 'https://github.com/ElDocWho/lab-02-about-me';
});

$('#projects project:nth-child(2) header').on('mouseover', function(){
  $('#preview').html('<img src="img/busmall.png" alt="busmall">');
});
$('#projects project:nth-child(3)').hover(function(){
  $('#preview').html('<img src="img/busmall.png" alt="busmall">');
});
$('#projects project:nth-child(4)').hover(function() {
  console.log('working3');
});
