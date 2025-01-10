import '../plugins/navActivePlugin';

// mobile menu init
export function initMobileNav() {
	jQuery('body').mobileNav({
		menuActiveClass: 'nav-active',
		menuOpener: '.menu__opener'
	});

	const menuLink = $(".menu-holder__list > li > a");
	const body = $("body");

	menuLink.on("click", function () {
		body.removeClass("nav-active");
		
	})
}
