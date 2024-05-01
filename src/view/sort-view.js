import { createElement } from '../render.js';

const SORT_TYPES = [
  {
    value: 'day',
    label: 'Day',
    sortable: true,
    selected: false,
  },
  {
    value: 'event',
    label: 'Event',
    sortable: false,
    selected: false,
  },
  {
    value: 'time',
    label: 'Time',
    sortable: true,
    selected: false,
  },
  {
    value: 'price',
    label: 'Price',
    sortable: true,
    selected: true,
  },
  {
    value: 'offer',
    label: 'Offers',
    sortable: false,
    selected: false,
  },
];

function createSortItemTemplate(type) {
  const { value, label, sortable, selected } = type;
  const disabled = sortable ? '' : 'disabled';
  const checked = selected ? 'checked' : '';

  return `
    <div class="trip-sort__item  trip-sort__item--${value}">
      <input id="sort-${value}" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-${value}" ${disabled} ${checked}>
      <label class="trip-sort__btn" for="sort-${value}">${label}</label>
    </div>
  `;
}

function createSortingTemplate() {
  return `
    <form class="trip-events__trip-sort  trip-sort" action="#" method="get">
      ${SORT_TYPES.map((type) => createSortItemTemplate(type)).join('')}
    </form>
  `;
}

export default class SortView {
  getTemplate() {
    return createSortingTemplate();
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }

    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}
