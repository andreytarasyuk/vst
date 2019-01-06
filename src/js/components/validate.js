import 'jquery-validation'

$('.js-validate').validate({
	rules: {
    email: {
      email: true,
      required: true
    },
    name: {
	    required: true,
	    minlength: 2
	  },
	  text: {
	    required: true,
	    minlength: 2
	  }
  },
	errorPlacement: function(error,element) {
    return true;
  }
});
