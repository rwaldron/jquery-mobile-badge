(function( window, document, $, undefined ) {

$.widget( "mobile.badge", $.mobile.widget, {
	selector: ":jqmData(badge)",
	_create: function() {
		var self = $( this.element ),
				owner = self.prev(),
				value = self.html(),
				template = [
					"<div class='ui-badge-outer'>",
					"<div class='ui-badge-inner'>",
					"<span class='ui-badge'>",
					value,
					"</span></div></div>"
				].join("");


		console.log(
			owner,
			owner.offset(),
			owner.position().top,
			owner.position().left,
			owner.css("top")
		);

		// Remove Place Holder
		self.remove();

		// Insert rendered badge inside owner
		owner.append(
			$(template)
		);
	}
});

// Initialize declarative badges in markup
$( document ).bind( "pagecreate create", function( event ) {
	$( $.mobile.badge.prototype.selector, event.target ).badge();
});

})( this, this.document, this.jQuery );
