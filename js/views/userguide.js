define([
	'jquery',
	'underscore',
	'backbone',
	'text!templates/userguide.html',
	
],function($, _, Backbone, userguide) {
	var userguideView = Backbone.View.extend({
		el : $('#mainContainer'),
		
		initialize : function() {			
		},
		

		render : function() {
			this.$el.html(userguide);
		},
		
		events: {
			"click #userSearchButton": "searchUser",
			"click .notactive": "deadlink"
		},
		
		deadlink: function() {
			return false;
		},
		
		searchUser: function() {
	
			location.href='#searchresultsview';
			
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
	return new userguideView;
});
