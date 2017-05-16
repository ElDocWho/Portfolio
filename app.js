'use strict';

function PortfolioProjects (projectName, projectUrl, projectDescription ){
  this.projectName = projectName;
  this.projectURL = projectUrl;
  this.projectDescription = projectDescription;
};

PortfolioProjects.prototype.toHtml = function() {
  var $newPortfolioProject = $('#').clone();
};

var rawData = [
  {
    projectName:     'place Holder',
    projectURL:    'place Holder',
    projectDescription:    'place Holder'
  },
  {
    projectName:     'place Holder',
    projectURL:    'place Holder',
    projectDescription:    'place Holder'
  },
  {
    projectName:     'place Holder',
    projectURL:    'place Holder',
    projectDescription:    'place Holder'
  }
];
