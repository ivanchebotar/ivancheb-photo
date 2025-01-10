import { initMobileNav } from './components/navActive';
import initSlick from './components/slick';
import { initStickyScrollBlock } from './components/fixedHeader';
import { initAccordion } from './components/accordion';
import initSetTime from './components/initSetTime';
import initPreloader from './components/preloader';
import { initAnchors } from './components/initAnchors';
// import { gsapScroll } from './components/gsap';
import msnryGallery from './components/msnry';
import initModal from './components/modal';

initMobileNav();
initSlick();
initStickyScrollBlock();
initAccordion();
initSetTime();
initPreloader();
initAnchors();
initModal();
msnryGallery();
AOS.init({
  once: true
});
