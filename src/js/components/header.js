import {WIN, ACTIVE} from '../constants';

const logo = $('.js-header');


WIN.on('load scroll', () => {
  WIN.scrollTop() > 0 ? logo.addClass(ACTIVE) : logo.removeClass(ACTIVE);
});
