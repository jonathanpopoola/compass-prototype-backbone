console.log("header template rendered");
define([
	'jquery',
	'underscore',
	'backbone',
	'text!templates/common/header.html',
	
],function($, _, Backbone, header) {
	var headerView = Backbone.View.extend({
		el : $('#header'),
		
		initialize : function() {
			console.log("header init");
		},
		

		render : function() {
			console.log("made it this far");
			this.$el.html(header);
		},
		
		postRender: function() {
		$("#footer").show();
		$('.show-hide').toggle(function() {
			$('.header-hidden').stop().animate({'height' : '290px'}, 500);
			$('.appContent ').stop().animate({'opacity' : '1'}, 600);
			$('.arrow').removeClass('down').addClass('up');
			},
			function() {
				$('.header-hidden').stop().animate({'height' : '5px'}, 500);
				$('.appContent ').stop().animate({'opacity' : '0'}, 600);
				$('.arrow').removeClass('up').addClass('down');
			}
		);
		
		$("#searchButton").bind("click", function() {
			location.href='#searchresultsview';
		});
		
				},
		
		events: {
			"click #logmeout": "letmeout",
			"click .notactive": "deadlink"
		},
		
		letmeout: function() {
			$("#footer").hide();
			$("#header").empty();
			$("#footer").empty();
			
			location.href='#login';
			return false;
		},
		
		deadlink: function() {
			return false;
		}
		
	});
	return new headerView;
});
