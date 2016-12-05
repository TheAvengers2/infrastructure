'use strict';

$(function(){
  var xhr = $.ajax({
    url: '#',
    medhot: 'get',
    accepts: {
      contentType: 'application/x-www-form-urlencoded; charset=UTF-8'
    },
    convertors: {
      "* text": window.String,
      "text html": true,
      "text json": jQuery.parseJSON,
      "text xml": jQuery.parseXML
    },
    dataType: 'text html',
    content: document.body,
    statusCode: {
      404: function(){
        console.error("page not found.");
      }
    },
    crossDomain: true
  }).done(function(){
    //$("#loadingDiv").addClass("visibility: hidden !important;");
    console.log("request done.");
  }).fail(function(){
    console.error("Request failed..");
  });
});
