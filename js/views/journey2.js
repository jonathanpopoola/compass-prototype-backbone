define([
	'jquery',
	'underscore',
	'backbone',
	'text!templates/journey2.html',
	
],function($, _, Backbone, journey2) {
	var journey2View = Backbone.View.extend({
		el : $('#mainContainer'),
		
		initialize : function() {
			
			
		},
		

		render : function() {
			this.$el.html(journey2);
			this.triggerCarousel();
		},
		
		triggerCarousel: function() {
			$('.carousel').carousel({
    			interval:3000 //2000 milliseconds = 2s
			});
		},
		
		postRender: function() {
			if (!$("#navverBut").hasClass("collapsed")) {
			    console.log("already closed do nothing");
			}else {
				console.log("removing toggle");
			$("#navverBut").trigger('click');
			}
		}
		
	});
	return new journey2View;
});
