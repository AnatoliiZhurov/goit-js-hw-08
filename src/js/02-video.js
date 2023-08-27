import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

console.log(Player);

console.log(throttle);

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const LOCAL_KEY = 'videoplayer-current-time';
player.on(
  'timeupdate',
  throttle(function ({ seconds }) {
    localStorage.setItem(LOCAL_KEY, seconds);
  }, 1000)
);

player.setCurrentTime(localStorage.getItem(LOCAL_KEY) || 0);

// const onPlay = function () {
//   console.log('played the video!');
// };

// player.on('play', onPlay);

// player.getVideoTitle().then(function (title) {
//   console.log('title:', title);
// });
