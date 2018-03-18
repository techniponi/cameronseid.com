// css
import 'materialize-css/dist/css/materialize.css';
import './css/style.css';

// js
import 'materialize-css/dist/js/materialize.js';

$(document).ready(function () {

	// load header and footer
	$('#csheader').load('header.html');
	$('#csfooter').load('footer.html');

	// init modals
	$('#materializelicense').modal();
	$('#jquerylicense').modal();
	$('#webpacklicense').modal();

	// originally from init.js
	$('.parallax').parallax();

});
