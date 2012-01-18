(function( window, document, $, undefined ) {

$.widget( "mobile.badge", $.mobile.widget, {
	selector: ":jqmData(badge)",
	_create: function() {
		var badge, node, method,
			self = $( this.element ),
			owner = self.prev(),
			value = self.html(),
			template = [
				"<div class='ui-badge-outer'>",
				"<div class='ui-badge-inner'>",
				"</div></div>"
			].join("");

		// Render badge markup from "template"
		badge = $(template);

		// Create a clone to append into the rendered badge
		node = self.clone().addClass("ui-badge");

		// jQuery collection reference to the inner badge node.
		// This will be used as the target for the cloned badge "node"
		badge.find(".ui-badge-inner").append(
			node
		);


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
			badge
		);
	}
});

// Initialize declarative badges in markup
$( document ).bind( "pagecreate create", function( event ) {
	$( $.mobile.badge.prototype.selector, event.target ).badge();
});

})( this, this.document, this.jQuery );
