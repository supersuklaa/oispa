import { h, text, app } from 'hyperapp';
import { main, div, button, img } from '@hyperapp/html';

import doge from '../static/kaljadoge.jpg';

const Subtract = state => ({ ...state, zoom: Math.max(state.zoom - 1, 0) });
const Add = state => ({ ...state, zoom: Math.min(state.zoom + 1, 5) });

app({
  init: (zoom = 3) => ({ zoom }),
  view: ({ zoom }) =>
    main({ class: 'app' }, [
      div({ class: 'nabuls' }, [
        button(
          { onclick: Subtract, disabled: zoom === 0 ? 'disabled' : undefined },
          text('-'),
        ),
        button(
          { onclick: Add, disabled: zoom === 5 ? 'disabled' : undefined },
          text('+'),
        ),
      ]),
      div({}, [img({ src: doge, class: `zoom-${zoom}` })]),
    ]),
  node: document.getElementById('app'),
});
