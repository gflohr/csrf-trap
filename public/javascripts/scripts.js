$(function() {
	$('#show-password').on('change', (ev) => {
		//console.log(document.getElementById('password').checked);
		if (ev.target.checked) {
			$('input.password').attr('type', 'text');
		} else {
			$('input.password').attr('type', 'password');
		}
	});
});