'use strict';
const projectView = {};

projectView.initIndexPage = function() {
  PortfolioCreate.all.forEach(function(article) {
    $('#projects').append(article.toHtml())
  });
};
$(document).ready(function(){
  $('#preview').hide();
});

$('main#projects projects.class-templates headers a').hover(function(){
  console.log(1);
  $('#preview').show();
},
function () { $('#preview').hide();
});

$('section#project.tab-content:nth-child(2)').hover(function(){
  console.log(2);
  $('#preview').show();
},
function () { $('#preview').hide();
});
$('section#project.tab-content:nth-child(3)').hover(function(){
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
$('project.project-template:nth-child(1)').on('click', function() {
  window.location.href = 'https://github.com/ElDocWho/bus-mall1';
});
$('project.project-template:nth-child(1)').on('click', function() {
  window.location.href = 'https://github.com/ElDocWho/cookie-stand1';
});
$('project.project-template:nth-child(1)').on('click', function() {
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
