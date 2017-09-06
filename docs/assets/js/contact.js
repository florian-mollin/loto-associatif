$("#contactForm").submit(function(event)
{
	/* stop form from submitting normally */
	event.preventDefault();

	/* get some values from elements on the page: */
	var $form = $( this ),
		$submit = $form.find( 'input[type="submit"]' ),
		name_value = $form.find( 'input[name="name"]' ).val(),
		email_value = $form.find( 'input[name="email"]' ).val(),
		subject_value = $form.find( 'input[name="subject"]' ).val(),
		message_value = $form.find( 'textarea[name="message"]' ).val(),
		url = $form.attr('action');

	/* Send the data using post */
	$submit.attr("disabled", true);
	var posting = $.post( url, {
		name: name_value,
		email: email_value,
		subject: subject_value,
		message: message_value
	});

	posting.done(function( data )
	{
		/* Put the results in a div */
		$( "#contactResponse" ).html(data);

		/* Disable the button. */
		$submit.attr("disabled", true);
	});
});
