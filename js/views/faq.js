define([
	'jquery',
	'underscore',
	'backbone',
	'text!templates/faq.html',
	
],function($, _, Backbone, faq) {
	var faqView = Backbone.View.extend({
		el : $('#mainContainer'),
		
		initialize : function() {
			console.log("faq");
			
		},
		

		render : function() {
			this.$el.html(faq);
			
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
	return new faqView;
});
