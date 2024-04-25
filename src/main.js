import TripInfoView from "./view/trip-info-view.js";
import { render } from "./render.js";

const siteMainElement  = document.querySelector('.trip-main');

render(new TripInfoView(), siteMainElement, 'afterbegin');
