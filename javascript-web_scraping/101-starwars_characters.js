#!/usr/bin/node

const request = require('request');

const movieId = process.argv[2];
const apiUrl = `https://swapi-api.alx-tools.com/api/films/${movieId}/`;

request(apiUrl, function (error, response, body) {
  if (!error && response.statusCode === 200) {
    const filmData = JSON.parse(body);
    const characters = filmData.characters;

    // Function to fetch and display character names in order
    const fetchAndDisplayCharacters = (index) => {
      if (index < characters.length) {
        request(characters[index], function (error, response, body) {
          if (!error && response.statusCode === 200) {
            const characterData = JSON.parse(body);
            console.log(characterData.name);

            // Fetch and display the next character
            fetchAndDisplayCharacters(index + 1);
          } else {
            console.log('Error fetching character data');
          }
        });
      }
    };

    // Start fetching and displaying characters
    fetchAndDisplayCharacters(0);
  } else {
    console.log('Error fetching movie data');
  }
});
