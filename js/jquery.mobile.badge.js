(function( window, document, $, undefined ) {

var methodMap = {
	IMG: "after"
};

$.widget( "mobile.badge", $.mobile.widget, {
	selector: ":jqmData(role='badge')",
	_create: function() {
		var badge, node, method,
			self = $( this.element ),
			page = self.closest("div[data-role='page']"),
			owner = self.prev(),
			value = self.html(),
			template = [
				"<div class='ui-badge-outer'>",
				"<div class='ui-badge-inner'>",
				"</div></div>"
			].join("");

		// Render badge markup from "template"
		badge = $(template);

		// Detach the original to append into the rendered badge
		node = self.detach().addClass("ui-badge");

		// jQuery collection reference to the inner badge node.
		// This will be used as the target for the cloned badge "node"
		badge.find(".ui-badge-inner").append(
			node
		);

		// Determine the correct insertion operation to use
		method = methodMap[ owner[0].nodeName ] || "append";

		// Insert rendered badge inside owner
		owner[ method ](
			badge
		);

		// Using the position utility provided by
		// jquery.mobile.position.js
		badge.position({
			// set the position of the badge's "right top"...
			my: "right top",
			// ...to the "right top"...
			at: "right-1 top-1",
			// ...of the "owner" element
			of: owner
		}).css({
			// Reset the left style to auto,
			// this results in the badge being displayed with the correct width
			left: "auto"
		});
	}
});

// Initialize declarative badges in markup
$( document ).bind( "pagecreate create", function( event ) {
	$( $.mobile.badge.prototype.selector, event.target ).badge();
});

})( this, this.document, this.jQuery );
