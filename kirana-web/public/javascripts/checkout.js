var stripe = Stripe('pk_test_51H6WvkDd93xzcN4dwqUoc6PimVFHW8AIk1Lxwwn83nVtwexC2gKjVby4nwIhWI2vr43c6YdVEjMoh9AUCupmIUaD00y4Y5t1k2');

var $form = $('#checkout-form');
$form.submit((event)=>{
	$form.find('button').prop('disabled', true)
});