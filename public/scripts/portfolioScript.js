'use strict';

// create constructor for projects
function PortfolioCreate(portolioObjs) {
  this.projectName = portolioObjs.projectName;
  this.projectURL = portolioObjs.projectURL;
  this.projectDescription = portolioObjs.projectDescription;
}

PortfolioCreate.all = [];

PortfolioCreate.prototype.toHtml = function() {
  var getTemplate = $('#projects-template').html();
  var template = Handlebars.compile(getTemplate);
  return template(this);
};

PortfolioCreate.loadAll = function(projectsData) {
  projectsData.sort(function(a,b) {
    return (new Date(b.publishedOn)) - (new Date(a.publishedOn));
  });
  projectsData.forEach(function(ele) {
    PortfolioCreate.all.push(new PortfolioCreate(ele));
  })
}

PortfolioCreate.fetchAll = function() {
  if (localStorage.projectsData) {
    let jsonData = JSON.parse(localStorage.projectsData);
    PortfolioCreate.loadAll(jsonData);
    projectView.initIndexPage();

  } else {
    let jsonData = '/data/projects.json';
    $.getJSON(jsonData)
        .then(function(projectsData) {
          localStorage.projectsData = JSON.stringify(projectsData);
          PortfolioCreate.loadAll(projectsData);
          projectView.initIndexPage();
        })
  }
}
