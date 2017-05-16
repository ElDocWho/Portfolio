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
  $newProject.find('address a').html(this.projectName).attr(this.projectURL);
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
  console.log(project.toHtml());
});
