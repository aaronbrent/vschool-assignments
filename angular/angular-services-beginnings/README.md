# Angular Services with Pokemon

This was an introduction to angular services. The requirements were as follows:

You must create a service named pokeService.

The service must:

- Store a running list of a users favorite Pokemon
- Have an addPokemon function that allows the user to add a new favorite Pokemon
- Have a removePokemon function that takes one parameter name which removes a favorite Pokemon by its name

The HTML must:

- Have an input field where a user enters the Pokemon's name
- Have an Add button to add the Pokemon that is in the input field
- Have a Remove button to remove the Pokemon that is in the input field
- Show a list of all of the Pokemon in your favorites list

The controllers must:

- Inject the pokeService as a dependency
- Must use $scope variables and functions to handle data from the view (HTML)
- Must use the pokeService