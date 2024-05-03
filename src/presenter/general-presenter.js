import TripInfoView from '../view/trip-info-view.js';
import FilterView from '../view/filter-view.js';
import SortView from '../view/sort-view.js';
import EventListView from '../view/event-list-view.js';
import EditPointFormView from '../view/edit-point-form-view.js';
import WaypointView from '../view/waypoint-view.js';
import { render } from '../render.js';

export default class GeneralPresenter {
  eventListComponent = new EventListView;

  constructor() {
    this.tripMain = document.querySelector('.trip-main');
    this.tripFilters = document.querySelector('.trip-controls__filters');
    this.tripEvents = document.querySelector('.trip-events');
  }

  init() {
    render(new TripInfoView(), this.tripMain, 'afterbegin');
    render(new FilterView(), this.tripFilters);
    render(new SortView(), this.tripEvents);
    render(this.eventListComponent, this.tripEvents);
    render(new EditPointFormView, this.eventListComponent.getElement());

    for(let i = 0; i < 3; i++) {
      render(new WaypointView(), this.eventListComponent.getElement());
    }
  }
}
