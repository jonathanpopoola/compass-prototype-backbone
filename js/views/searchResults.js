define([
	'jquery',
	'underscore',
	'backbone',
	'text!templates/searchResults.html',
	
],function($, _, Backbone, searchresults) {
	var searchresultsView = Backbone.View.extend({
		el : $('#mainContainer'),
		
		initialize : function() {	
			console.log("search results");		
		},
		

		render : function() {
			this.$el.html(searchresults);
		},
		
		events: {
			"click .notactive": "deadlink"
		},
		
		deadlink: function() {
			return false;
		},
		
postRender: function() {
			if ($("#navverBut").hasClass("collapsed")) {
			    console.log("already closed do nothing");
			}else {
				console.log("removing toggle");
			$("#navverBut").trigger('click');
			}
		}		
	});
	return new searchresultsView;
});
