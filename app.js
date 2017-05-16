'use strict';

var projects = [];

function PortfolioProjects (projectName, projectUrl, projectDescription ){
  this.projectName = projectName;
  this.projectURL = projectUrl;
  this.projectDescription = projectDescription;
}

PortfolioProjects.prototype.toHtml = function() {
  var $newProject = $('.template').clone();
  console.log($newProject);
  console.log('working');
  $($newProject).removeClass('template');
  $newProject.find('address a').html(this.author).attr(this.authorUrl);
  $newProject.find('h1').html(this.title);
  $newProject.find('.project-desc').html(this.body);

  $newProject.find('time').html('about ' + parseInt((new Date() - new Date(this.publishedOn)) / 60 / 60 / 24 / 1000) + ' days ago');
  $newProject.append('<hr>');
  return $newProject;
};
