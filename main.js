

var app = new Vue({
	el: '#root',

	data: {
		navMenu: ['Home', 'Pages', 'Courses', 'Features', 'Blog', 'Shop'],
		contacts: ['382 NE 191 St # 87394 Miami, FL 33179-3899', '+1(305)547-9909 (9am - 5pm EST, Monday - Friday)', 'support@maxcoach.com'],
		isActive: false,
		isShowed: false,
		selected: undefined,
		over: false,
		bannerIndex: undefined,
		selectOver: false,
		ctaSubtitle: ['How can we help?', "Why would I need a business COACH?", "What is one-on-one coaching?"],
		imgHelpYou: ['images/card1.jpg', 'images/card2.jpg', 'images/card3.jpg'],
		imgHelpYouTwo: ['images/card4.jpg', 'images/card5.jpg', 'images/card6.jpg', 'images/card7.jpg'],
	},

	methods: {

		goUp() {  // x button scrollUP
			const element = document.getElementById('header');
    			element.scrollIntoView({ behavior: 'smooth' });
		},

		toggleMenu() {         // x menu mobile
			if (this.isActive == false){
				this.isActive = true;
			}
			else {
				this.isActive = false;
			}
		},

		showParagraph () {  // x mostrare paragrafi
			this.isShowed = !this.isShowed;
		},

		overCard(){
			this.selectOver = true;
		},

		overCardLeave (){
			this.selectOver = false;
		}



	}, // fine methods

	mounted() {
	} // fine mounted
});
