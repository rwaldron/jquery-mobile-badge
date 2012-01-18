/*
 * mobile badge unit tests
*/
module("data-badge");

test( "Creates .ui-badge elements", 1, function() {
	var $context = $("iframe");

	ok( $context.contents().find(".ui-badge").length, ".ui-badge elements have been created" );
});

test( "Creates .ui-badge-inner elements", 1, function() {
	var $context = $("iframe");

	ok( $context.contents().find(".ui-badge-inner").length, ".ui-badge-inner elements have been created" );
});


test( "Creates .ui-badge-outer elements", 1, function() {
	var $context = $("iframe");

	ok( $context.contents().find(".ui-badge-outer").length, ".ui-badge-outer elements have been created" );
});

test( "Creates correct number of .ui-badge, .ui-badge-inner and .ui-badge-outer elements", 2, function() {
	var $context = $("iframe"),
			$contents = $context.contents();

	equal( $contents.find(".ui-badge-outer").length, $contents.find(".ui-badge").length, ".ui-badge & .ui-badge-outer elements length match" );
	equal( $contents.find(".ui-badge-inner").length, $contents.find(".ui-badge").length, ".ui-badge & .ui-badge-inner elements length match" );
});

test( ".ui-badge-outer children", function() {
	var $context = $("iframe"),
			$contents = $context.contents(),
			$outer = $contents.find(".ui-badge-outer");

	expect( $outer.length * 2 );

	$outer.each(function() {
		ok( $(this).has(".ui-badge-inner"), ".ui-badge-outer contains a .ui-badge-inner" );
		ok( $(this).has(".ui-badge"), ".ui-badge-outer contains a .ui-badge" );
	});
});

