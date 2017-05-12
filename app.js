'use strict';

function PortfolioProjects (projectName, projectUrl, projectDescription ){
  this.projectName = projectName;
  this.projectURL = projectUrl;
  this.projectDescription = projectDescription;
};

PortfolioProjects.prototype.toHtml = function() {
  var $newJobHistory = $('#').clone();
};

var rawData = [
  {
    companyName:     'place Holder',
    positionName:    'place Holder',
    cityLocation:    'place Holder'
  },
  {
    companyName:     'place Holder',
    positionName:    'place Holder',
    cityLocation:    'place Holder'
  },
  {
    companyName:     'place Holder',
    positionName:    'place Holder',
    cityLocation:    'place Holder'
  }
];
