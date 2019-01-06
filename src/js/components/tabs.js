import {ACTIVE} from '../constants.js'

$(window).on('load resize', function () {
	$('.js-tabs').each(function () {
		const tab = $(this);
		const controls = tab.find('[data-tab]');
		const items = tab.find('[data-content]');

		const tabAttr = tab.data('tab-active').toString();
		const tabExist = tabAttr && tabAttr.length;
		const initialActiveControl = tabExist && controls.filter('[data-tab=' + tabAttr +']');

		const responsiveTablet =  window.matchMedia('(max-width: 992px)').matches

		if (!controls.hasClass(ACTIVE) && initialActiveControl.length ) {
			initialActiveControl.addClass(ACTIVE);
			items.filter('[data-content=' + tabAttr + ']').addClass(ACTIVE);

		} else if(!controls.hasClass(ACTIVE)) {
			const activeItem = controls.first().addClass(ACTIVE).data('tab');
			items.filter('[data-content=' + activeItem + ']').addClass(ACTIVE);
		}

		if (responsiveTablet) {
			$(controls).click(function (e) {
				const current = $(this);
				const sliderNew = items.filter('[data-content=' + current.data('tab') + ']').find('.js-slider');
				const responsiveMobile =  window.matchMedia('(max-width: 767px)').matches

				e.preventDefault();
				controls.removeClass(ACTIVE);
				current.addClass(ACTIVE);
				items.removeClass(ACTIVE);
				items.filter('[data-content=' + current.data('tab') + ']').addClass(ACTIVE);
				if (responsiveMobile) {
					sliderNew.slick('unslick');
					sliderNew.slick({
						dots: true,
						arrows: false,
						slidesToShow: 1,
						slidesToScroll: 1
					});
				}
			})
		}
	});
});





