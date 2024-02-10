// JavaScript script that displays the value of hello

$(() => {
  $.get('https://fourtonfish.com/hellosalut/?lang=fr', (data, textStatus) => {
    if (textStatus === 'success') {
      $('DIV#hello').text(data.hello);
    }
  });
});
