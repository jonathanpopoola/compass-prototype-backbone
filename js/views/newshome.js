define([
	'jquery',
	'underscore',
	'backbone',
	'text!templates/newshome.html',
	
],function($, _, Backbone, newshome) {
	var newshomeView = Backbone.View.extend({
		el : $('#mainContainer'),
		
		initialize : function() {			
		},
		
		render : function() {
			this.$el.html(newshome);
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
	return new newshomeView;
});
