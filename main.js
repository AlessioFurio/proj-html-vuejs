

var app = new Vue({
	el: '#root',

	data: {
		navMenu: ['Home', 'Pages', 'Courses', 'Features', 'Blog', 'Shop'],
		dropdownMenuHomeFirstUl: ['MaxCoach Education', 'Course Portal', 'Distant Learning', 'Multimedia Pedacogy', 'Modern Schooling', 'Remote Training'],
		dropdownMenuHomeSecondUl: ['Healt Coaching', 'Gym Coaching', 'Business', 'Artist', 'Kitchen Coach', 'Motivation'],
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
		iconService: ["far fa-lightbulb", "fas fa-map-marker-alt", "far fa-clock", "fas fa-laptop", "far fa-life-ring", "fas fa-cog"],
		selectorLink: false,
		index: undefined,
	},

	methods: {

		goUp() {  // x button scrollUP
			const element = document.getElementById('main');
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

		overCard(){  // x effetto mouseenter x le card
			this.selectOver = true;
		},

		overCardLeave (){   // x effetto mouseleave sulle card
			this.selectOver = false;
		},

		overLink(indice){

			this.index = indice;  // x effetto mouseenter x le card
			this.selectorLink = true;
			console.log(indice);
			// if(indice != 0){
			// 	this.selectorLink = false;
			// 	this.leaveLi = true;
			// 	if(this.leaveLi){
			// 		this.selectorLink = true;
			// 	}
			// }

		},

		overLinkLeave(indice) {
			this.selectorLink = true;
			if(indice != 0){
				this.selectorLink = false;
			}
		},

		leaveMenu(){
			this.selectorLink = false;
		}


	}, // fine methods

	mounted() {
		window.addEventListener("scroll", function(){  // x sticky header
			var header = document.getElementById("header");
			header.classList.toggle("sticky", window.scrollY > 0);
		});
	} // fine mounted
});
