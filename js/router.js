define([
  'jquery',
  'underscore',
  'backbone',
  'views/common/header',
  'views/common/footer',
  'views/journey1',
  'views/faq',
  'views/newshome',
  'views/newsarticle',
  'views/start',
  'views/journey2',
  'views/userguide',
  'views/searchResults',
  'views/login',



  
], function($, _, Backbone, headerView, footerView, journey1View, faqView, newshomeView, newsarticle, startView, journey2, userguideview, searchresultsview, loginview){
	
	function getActions(actions) {
		return actions;
	}
	
	var AppRouter = Backbone.Router.extend({
		currentView: null,
		
		initialize: function() {
			
		},
	
		routes: {
			'': 'defaultAction',
			'faqView' : 'showFaq',
			'newshome' : 'newshomeShow',
			'newsarticle' : 'newsarticleShow',
			'journey1' : 'journey1Show',
			'journey2' : 'journey2Show',
			'userguideview' : 'userguideShow',
			'searchresultsview' : 'searchresultsShow',
			'login' : 'loginShow',
		},

		defaultAction: function(actions){
			//this.showView(startView);
			this.showView(loginview);
		},
		
		showView: function(view) {
			view.render();
			if(view.postRender){
				view.postRender();
			}
		},
		
		
		loginShow: function(actions) {
			this.showView(loginview);
		},
		
		searchresultsShow: function(actions) {
			this.showView(searchresultsview);
		},
		
		userguideShow: function(actions) {
			this.showView(userguideview); 
		},
		
		
		journey1Show: function(actions) {
			this.showView(journey1View); 
		},
		
		journey2Show: function(actions) {
			this.showView(headerView);
			this.showView(footerView);
			this.showView(journey2); 
		},
		
		showFaq: function(actions) {
			this.showView(faqView);
		},
		
		newshomeShow: function(actions) {
			this.showView(newshomeView); 
		},
		
		newsarticleShow: function(actions) {
			this.showView(newsarticle); 
		}
		
		
	});

	var initialize = function(){
		new AppRouter();
		Backbone.history.start();
	};

	return {
		initialize: initialize
	};
});
