/* global TrelloPowerUp */

var t = TrelloPowerUp.iframe(<iframe src="https://calendar.google.com/calendar/embed?height=600&amp;wkst=1&amp;bgcolor=%23FFFFFF&amp;src=hdbmpggju3um5bsjhj3mudbbqs%40group.calendar.google.com&amp;color=%23B1440E&amp;ctz=America%2FLos_Angeles" style="border-width:0" width="800" height="600" frameborder="0" scrolling="no"></iframe>);

// want to know when you are being closed?
window.addEventListener('unload', function(e) {
  // Our board bar is being closed, clean up if we need to
});

t.render(function(){
  // this function we be called once on initial load
  // and then called each time something changes that
  // you might want to react to, such as new data being
  // stored with t.set()
});
