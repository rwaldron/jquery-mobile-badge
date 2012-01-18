(function( window, document, $, undefined ) {

var $doc = document;

$.widget( "mobile.badge", $.mobile.widget, {
	selector: ":jqmData(badge)",
	_create: function() {
		var self = $( this.element );

		console.log( self );
	}
});

// Initialize declarative badges in markup
$doc.bind( "pagecreate create", function( event ) {
	$( $.mobile.badge.prototype.selector, event.target ).badge();
});

})( this, this.document, this.jQuery );
