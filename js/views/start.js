define([
	'jquery',
	'underscore',
	'backbone',
	'text!templates/start.html',
	
],function($, _, Backbone, start) {
	var startView = Backbone.View.extend({
		el : $('#mainContainer'),
		
		initialize : function() {
			console.log("home init");
			
		},
		

		render : function() {
			this.$el.html(start);
					}
		
	
	});
	return new startView;
});
