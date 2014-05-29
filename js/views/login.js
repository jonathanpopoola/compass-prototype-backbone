define([
	'jquery',
	'underscore',
	'backbone',
	'text!templates/login.html',
	
],function($, _, Backbone, login) {
	var loginView = Backbone.View.extend({
		el : $('#mainContainer'),
		
		initialize : function() {			
		},
		

		render : function() {
			this.$el.html(login);
		},
		
		events: {
			"click #logmein": "letmein" 
		},
		
		letmein: function() {
			location.href='#journey2';
			return false;
		}
		
	});
	return new loginView;
});
