import createElement from './vdom/createElement';
import mount from './vdom/mount';
import render from './vdom/render';
import diff from './vdom/diff';

const createVApp = (count) =>
  createElement('div', {
    attrs: {
      id: 'app',
      dataCount: count,
    },

    children: [
      createElement('input'),
      String(count),
      createElement('img', {
        attrs: {
          src: 'https://media.giphy.com/media/QCwrk1jxSWzz4grp0x/giphy.gif',
          alt: 'gif',
        },
      }),
      createElement('button', {
        attrs: {
          type: 'submit',
        },
      }),
    ],
  });

let count = 0;
const vApp = createVApp(count);
const renderedApp = render(vApp);

let $rootElem = mount(renderedApp, document.getElementById('app'));

setInterval(() => {
  count++;
  const vNewApp = createVApp(count);
  const patch = diff(vApp, vNewApp);
  $rootElem = patch($rootElem);
  vApp = vNewApp;
}, 1000);
