// Lynn O.
let c = 'inactive'
const tab = (t) => {
	$('.tab').addClass(c);
	$('#' + t).removeClass(c);
	window.scrollTo({top: 0});
}