Project Name: Pokemon API 

Deployed Project Link : https://wills-pokemon-api.herokuapp.com/api/pokemon

<b>Description:</b> 

This is an API that I built from scratch outside of using data from pokeapi.co. The API features three models: Pokemon, Type and Generation. The Pokemon model references Type and Generation. The API has full CRUD functionality allowing users to create, read, update and destroy what they would like.

<b>Technologies:</b> Javascript, MongoDB, Heroku, Express.js, Node.js

<b>Roadmap:</b> I wanted to build this API to fit with my other project, a Who's That Pokemon game, but due to the requirements of the project I was unable to make it fit. I plan on using this as a model to build an API to fit with my game.

<b>Paths:</b>

API's aren't too self explanatory, so here's how to navigate it!

Route : https://wills-pokemon-api.herokuapp.com/api/pokemon
Description": Following this route will return data for the first 151 Pokemon
   
Route: https://wills-pokemon-api.herokuapp.com/api/pokemon/type/normal
Description: Following this route will return data for all Normal type Pokemon. Replace Normal in the URL with any other Gen 1 Pokemon type to return data for Pokemon of that type. All Pokemon types entered in the url must be entirely lowercase
   
Route: https://wills-pokemon-api.herokuapp.com/api/pokemon/number/151",
Desctiption: Following this route will return data for the 151st Pokemon, Mew. Replace 151 in the URL with any number from 0 to 151 to return data for the Pokeon who's number corresponds to your input
   
Route: https://wills-pokemon-api.herokuapp.com/api/pokemon/name/pikachu 
Description: Following this route will return data for Pikachu. Replace Pikachu in the URL with any Gen 1 Pokemon name to return data for that Pokemon. All Pokemon names entered in the url must be entirely lowercase
   
Route: https://wills-pokemon-api.herokuapp.com/api/type
Description: Following this route will return data for all Gen 1 Pokemon types
 
Route: https://wills-pokemon-api.herokuapp.com/api/type/normal
Description: Following this route will return data for the Pokemon type: Normal. Replace Normal in the url with any other Gen 1 Pokemon type to return data for that type. All types entered in the url must be entirely lowercase
 
Route: https://wills-pokemon-api.herokuapp.com/api/generation
Description: Following this route will return data for all generations of Pokemon
   
Route: https://wills-pokemon-api.herokuapp.com/api/generation/generation-i
Description: Following this route will return data for Generation 1. Replace the i after generation- with any other Generation of Pokemon to return data for that Generation. All generations entered in the url must be entirely lowercase. Please note that the generation field uses roman numerals in the path. Any roman numberal i through vi will work 
