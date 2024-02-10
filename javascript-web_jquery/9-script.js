// JavaScript script that displays the value of hello

$.get('https://hellosalut.stefanbohacek.dev/?lang=fr', function(data) {
  $('#hello').text(data.hello);
});
