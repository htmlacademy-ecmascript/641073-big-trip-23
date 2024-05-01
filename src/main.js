// import TripInfoView from './view/trip-info-view.js';
import FilterView from './view/filter-view.js';
import SortView from './view/sort-view.js';
import { render } from './render.js';

// const siteMainElement = document.querySelector('.trip-main');
const filterControlsElement = document.querySelector('.trip-controls__filters');
const tripEventsElement = document.querySelector('.trip-events');

// render(new TripInfoView(), siteMainElement, 'afterbegin');
render(new FilterView(), filterControlsElement, 'beforeEnd');
render(new SortView(), tripEventsElement, 'beforeEnd');

