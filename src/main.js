$('.projects_container').masonry({
	itemSelector: '.projects_block',
	columnWidth: 355,
	fitWidth: true,
	gutter: 45
  });


$(document).ready(function() {
	$('.navbar a').click(function() {
	  const elementClick = $((this).getAttribute('href'));
	  const destination = $(elementClick).offset().top;
	  event.preventDefault();
	  $('body,html').animate({ scrollTop: destination }, 1500);
	});
});

$('.item_count').each(function() {
	$(this).prop('counter', 0).animate({
		counter:$(this).text()
	}, {
		duration: 3000,
		step: (i) => {
			$(this).text(Math.ceil(i));
		}
	})
})