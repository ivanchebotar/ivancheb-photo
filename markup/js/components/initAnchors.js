import '../plugins/anchorsPlugin';

export function initAnchors() {
	new SmoothScroll({
		anchorLinks: 'a[href^="#"]:not([href="#"])',
		extraOffset: 50,
		wheelBehavior: 'none',
		activeClasses: 'link',
		animMode: 'duration',
		animDuration: 1000
	});
}
