/* global TrelloPowerUp */

var t = TrelloPowerUp.iframe(<iframe src="https://calendar.google.com/calendar/embed?height=600&amp;wkst=1&amp;bgcolor=%23FFFFFF&amp;src=hdbmpggju3um5bsjhj3mudbbqs%40group.calendar.google.com&amp;color=%23B1440E&amp;ctz=America%2FLos_Angeles" style="border-width:0" width="800" height="600" frameborder="0" scrolling="no"></iframe>);

// you can access arguments passed to your iframe like so
var arg = t.arg('arg');

t.render(function(){
  // make sure your rendering logic lives here, since we will
  // recall this method as the user adds and removes attachments
  // from your section
  t.card('attachments')
  .get('attachments')
  .filter(function(attachment){
    return attachment.url.indexOf('http://www.nps.gov/yell/') == 0;
  })
  .then(function(yellowstoneAttachments){
    var urls = yellowstoneAttachments.map(function(a){ return a.url; });
    document.getElementById('urls').textContent = urls.join(', ');
  })
  .then(function(){
    return t.sizeTo('#content');
  });
});
