/* eslint-disable no-undef */
const tl = new TimelineLite({
  autoRemoveChildren: false,
  paused: false
});

//const button = TweenLite.to('#cta', 0.4, { scale: '+=0.1', ease: Back.easeInOut }).pause();

// eslint-disable-next-line func-names
window.onload = function () {
  tl.add(TweenLite.to('#loader', 0.2, { autoAlpha: 0 }))
    .addLabel('scene1');
  tl.add(TweenLite.from('#copy1', 1, { opacity: 0, ease: Quad.easeOut }), 'scene1+=.5')
    .addLabel('scene2');
  tl.add(TweenLite.to('#copy1, #grad', 1.25, { opacity: 0 }), 'scene2+=6')
};
