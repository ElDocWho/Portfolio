'use strict';

var projects = [];

function PortfolioProjects (rawDataObject) {
  console.log('hola');
  for (key in rawDataObject) {
    this[key] = rawDataObject[key];
  }
};

PortfolioProjects.prototype.toHtml = function() {
  var templateRender = Handlebars.compile($('#template').html());
  return templateRender(this);
};
function handleShowNeighborhoods() {
  $.getJSON('/data/proj.json')
  .then(
    function(data) {
      localStorage.setItem('proj', JSON.stringify(data));
      data.forEach(function(projectObject) {
        projects.push(new PortfolioProjects(projectObject));
        console.log('projects array being built', projects);
      });
      projects.forEach(function(ourNewprojectObject){
        $('#projects').append(ourNewprojectObject.toHtml());
      });
    },
    // FAIL CALLBACK
    function(err) {
      console.error(err);
    });
}
console.log('projects array', projects);
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
