console.log("Hello World")

/*const response = fetch('https://api.spoonacular.com/recipes/findByNutrients?minCarbs=10&maxCarbs=50&number=2&apiKey=4bf05c1072d54fa494b77b3a60dbc035')
.then(function (response) {
	// The API call was successful!
	return response.json();
}).then(function (data) {
	// This is the JSON from our response
	console.log(data);
}).catch(function (err) {
	// There was an error
	console.warn('Something went wrong.', err);
});

const data = await response.json();*/

//const apiKey = '4bf05c1072d54fa494b77b3a60dbc035';
/*
async function getAPICall() {
    const endpoint = new URL(`https://api.spoonacular.com/recipes/findByNutrients?minCarbs=10&maxCarbs=50&number=2&apiKey=${apiKey}`);

    console.log(endpoint);

    endpoint.searchParams.set("token", "YOUR_TOKEN_HERE");

    const response = await fetch(endpoint);

    const data = await response.json();

    console.log(response);

    console.log('Data: ', data);

    const {id, title} = data[0];  id = data[0].id; title = data[0].title 

    console.log(id, title);
}
*/
// Filter Options
async function changeCuisine() {
    const cusineNames = document.getElementsByClassName('dropdown-content');
    console.log(cuisineNames);
    console.log('CuisineName: ', cuisineNames.value);
}

//getAPICall();

changeCuisine();