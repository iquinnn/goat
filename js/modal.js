/* global TrelloPowerUp */

var t = TrelloPowerUp.iframe(<iframe src="https://calendar.google.com/calendar/embed?height=600&amp;wkst=1&amp;bgcolor=%23FFFFFF&amp;src=hdbmpggju3um5bsjhj3mudbbqs%40group.calendar.google.com&amp;color=%23B1440E&amp;ctz=America%2FLos_Angeles" style="border-width:0" width="800" height="600" frameborder="0" scrolling="no"></iframe>);

// you can access arguments passed to your iframe like so
var num = t.arg('rand');

t.render(function(){
  // this function we be called once on initial load
  // and then called each time something changes that
  // you might want to react to, such as new data being
  // stored with t.set()
});

// Important! If you are using the overlay, you should implement
// the following two methods to ensure that closing the overlay
// is simple and consistent for the Trello user

// close overlay if user clicks outside our content
document.addEventListener('click', function(e) {
  if(e.target.tagName == 'BODY') {
    t.closeOverlay().done();
  }
});

// close overlay if user presses escape key
document.addEventListener('keyup', function(e) {
  if(e.keyCode == 27) {
    t.closeOverlay().done();
  }
});
