FlowRouter.route('/', {
	action: function() {
		BlazeLayout.render('mainView');
	}
});
FlowRouter.route('/profile', {
	action: function() {
		BlazeLayout.render('mainView', {content: "profile"});
	}
})