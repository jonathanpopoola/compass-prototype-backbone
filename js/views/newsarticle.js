define([
	'jquery',
	'underscore',
	'backbone',
	'text!templates/newsarticle.html',
	
],function($, _, Backbone, newsarticle) {
	var newsarticleView = Backbone.View.extend({
		el : $('#mainContainer'),
		
		initialize : function() {			
		},
		
		render : function() {
			this.$el.html(newsarticle);
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
	return new newsarticleView;
});
