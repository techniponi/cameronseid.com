// load css
import './css/icon.css';
import 'materialize-css/dist/css/materialize.css';
import './css/style.css';
import 'materialize-css/dist/js/materialize.js';

$(document).ready(function () {

	// load common page elements
	$('#csheader').load('header.html');
	$('#csfooter').load('footer.html');

	// init modals
	$('#materializelicense').modal();
	$('#jquerylicense').modal();
	$('#webpacklicense').modal();

	// init.js
	$('.parallax').parallax();

});
