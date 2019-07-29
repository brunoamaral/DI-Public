//import $ from "jquery";

// import instantsearch from 'instantsearch.js/es';

// import { hits, searchBox } from "instantsearch.js/es/widgets";


const search = instantsearch({
	appId: 'CYDOXRNTGN',
	apiKey: '4a966540d767ba819e5373aa67ffd0b1',
	indexName: 'brunoamaral.eu',
  	searchFunction: function(helper) {
      var searchResults = document.getElementsByClassName('ais-hits');
      if (helper.state.query === '') {
        //searchResults.hide();
        return;
      }
      helper.search();
        //searchResults.show();
    }
});

var hitTemplate =
  '<div class="hit media">' +
    '<div class="media-left">' +
      '<img src="{{image}}" />'+
    '</div>' +
    '<div class="media-body">' +
      '<h4 class="media-heading">{{{_highlightResult.title.value}}} {{#stars}}<span class="ais-star-rating--star{{^.}}__empty{{/.}}"></span>{{/stars}}</h4>' +
      '<p class="content">{{_snippetResult.content.value}}</p>' +
    '</div>' +
'</div>';

var hitTemplateCard = 
           //   ' <div class="card card-plain card-blog col">' +
           //     ' <div class="card-image">' +
           //       ' <a href="{{ uri }}">' +
           //         ' <img class="img w-auto rounded img-raised" src="{{ image }}">' +
           //       ' </a>' +
           //     ' </div>' +
           //     ' <div class="card-body">' +
           //       ' <h6 class="category text-info">{{ category }}</h6>' +
           //       ' <h4 class="card-title">' +
           //         ' <a href="{{ uri }}">{{ title }}</a>'+
           //       ' </h4>' +
           //       ' <p class="card-description">' +
           //          '{{ description }}'+
           //         ' <a href="{{ uri }}"> Read More </a> '+
           //       ' </p> '+
           //       ' <p></p> '+
           //     ' </div> '+
           // ' </div> ';

'<a href="{{ uri }}">'+
'<div class="card card-blog">'+
  '<div class="card-image">'+
  '<img class="img rounded" src="{{image}}">'+
'</div>'+
'<div class="card-body">'+
  '<h6 class="category text-warning">'+
    '<i class="now-ui-icons business_bulb-63"></i>'+
  '</h6>'+
  '<h5 class="card-title">'+
    '{{ title}}'+
  '</h5>'+
  '<p class="card-description"> {{ description }}'+
  '</p>'+
  '</div>'+
'</div>'+
'</a>';


var noResultsTemplate =
'<div class="text-center">No results found matching <strong>{{query}}</strong>.</div>';

search.addWidget(
instantsearch.widgets.searchBox({
    container: '.form-group',
    placeholder: 'Search',
    cssClasses: {input: 'search-input hideInput form-control'},
    autofocus: true,
    poweredBy: false,
    magnifier: false,
    reset: false
  })
);

search.addWidget(
instantsearch.widgets.hits({
	container: 'div.search-hits',
	templates: {
		empty: noResultsTemplate,
		item: hitTemplateCard
		},
  hitsPerPage: 9
	})
);

search.start();
