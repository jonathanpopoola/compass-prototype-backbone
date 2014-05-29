define([
	'jquery',
	'underscore',
	'backbone',
	'text!templates/journey1.html',
	
],function($, _, Backbone, journey1) {
	var journey1View = Backbone.View.extend({
		el : $('#mainContainer'),
		
		initialize : function() {
			console.log("home init");
			
		},
		

		render : function() {
			this.$el.html(journey1);
			this.triggerCarousel();
		},
		
		triggerCarousel: function() {
			$('.carousel').carousel({
    			interval:3000 //2000 milliseconds = 2s
			});
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
	return new journey1View;
});
