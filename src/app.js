import { h, text, app } from 'hyperapp';
import {
  main, div, button, img,
} from '@hyperapp/html';

import doge from '../static/kaljadoge.jpg';

const minZoom = 0;
const maxZoom = 5;

const Spin = (dispatch, stop) => {
  setTimeout(() => {
    dispatch(stop);
  }, 300);
};

const Stop = (state) => ({ ...state, spin: '' });

const Subtract = (state) => [
  { spin: 'left', zoom: Math.max(state.zoom - 1, minZoom) },
  [Spin, Stop],
];

const Add = (state) => [
  { spin: 'right', zoom: Math.min(state.zoom + 1, maxZoom) },
  [Spin, Stop],
];

app({
  init: (zoom = 0, spin = '') => ({ zoom, spin }),
  view: ({ zoom, spin }) => main({ class: 'app' }, [
    div({ class: 'nabuls' }, [
      button({ onclick: Subtract, disabled: zoom === minZoom }, text('-')),
      button({ onclick: Add, disabled: zoom === maxZoom }, text('+')),
    ]),
    div({ class: 'doggelis' }, [
      img({ src: doge, class: `zoom-${zoom} spin-${spin}` }),
    ]),
  ]),
  node: document.getElementById('app'),
});
