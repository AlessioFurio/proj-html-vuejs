

var app = new Vue({
	el: '#root',

	data: {
		navMenu: ['Home', 'Pages', 'Courses', 'Features', 'Blog', 'Shop'],
		contacts: ['382 NE 191 St # 87394 Miami, FL 33179-3899', '+1(305)547-9909 (9am - 5pm EST, Monday - Friday)', 'support@maxcoach.com']
	},

	methods: {

		goUp() {
			const element = document.getElementById('header');
    			element.scrollIntoView({ behavior: 'smooth' });
		}

	}, // fine methods

	mounted() {
	} // fine mounted
});
