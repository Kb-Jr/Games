# Games
 Search for Game deals

# Features
- Search for game by name
- See latest top deals

# Process
- This SPA was built essentially by fetching data from an API end-point
- To implement the search functionality, a function was created which fetches games from the API. The API url was customized, adding the game title as one of the parameters in the url which ensured that only games related to the title were shortlisted. 
- The title was dynamically parsed to API as a variable url using a template string. The values for the variable was derived by collecting the values in the input field. An event listener was added to the input field to listen for any changes and record the values input in the field as values for the title variable.
- The number of results were limited to 3
- The properties from the objects fetched from the API were used to dynamically populate the UI.


# Lessons Learnt
- Using SWR as a better method of fetching data from an API. SWR (stale-while-revalidate) is a React hooks library for revalidation.
- using the "substr()" method 
- Using a forEach loop on arrays

# Technologies used 
- Custom CSS properties
- React JS
- JavaScript ES6

# Resources
- [SWR for data fetching](https://swr.vercel.app/docs/data-fetching)
- [Games API url](https://www.cheapshark.com/api/1.0/games)

