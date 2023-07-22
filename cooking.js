// const apiKey = '4bf05c1072d54fa494b77b3a60dbc035';
/*
async function getAPICall() {
    const endpoint = new URL(`https://api.spoonacular.com/recipes/findByNutrients?minCarbs=10&maxCarbs=50&number=2&apiKey=${apiKey}`);

    console.log(endpoint);

    endpoint.searchParams.set("token", "YOUR_TOKEN_HERE");

    const response = await fetch(endpoint);

    const data = await response.json();

    console.log(response);

    console.log('Data: ', data);

    const {id, title, image} = data[0];  id = data[0].id; title = data[0].title 

    console.log(id, title, image);
}
*/

function show(a) {
    const buttonSelect = document.querySelector('.buttonSelector');
    buttonSelect.innerHTML = a;
}

function dropDownHover() {
    const dropDownMenu = document.querySelector('.dropdown');

    dropDownMenu.onmouseover = () => {
        dropDownMenu.classList.remove('inactive');
        dropDownMenu.classList.add('active');
        console.log('Hovering');
        console.log(dropDownMenu);
    }

    dropDownMenu.onmouseout = () => {
        dropDownMenu.classList.remove('active');
        dropDownMenu.classList.add('inactive');
        console.log('Unhovering');
        console.log(dropDownMenu);
    }
}

// Filter Options
var cuisineName = 'Default';
function changeCuisine() {

    // DropdownMenu Class
    const dropDownMenu = document.getElementsByClassName('dropdown-content')[0];

    // Get HTMLCollection of Div Content (NOT A USABLE ARRAY)
    const cuisineNames = dropDownMenu.getElementsByTagName('a');
    console.log(cuisineNames);

    // Convert HTMLCollection into Usable Array of Elements
    const cuisineNamesArr = Array.from(cuisineNames);
    console.log(cuisineNamesArr);

    // Check each div element for if they are clicked
    cuisineNamesArr.forEach(name => {
        name.addEventListener("click", () => {
            cuisineName = name.getAttribute('value');
        })

        name.onmouseover = () => {
            show(name.getAttribute('value'));
        }
    });
    console.log('Cuisine: ', cuisineName);

}


var intolerancesName = 'Default';
function changeIntolerances() {

    const dropDownMenu = document.getElementsByClassName('dropdown-content')[1];
    const intolerances = dropDownMenu.getElementsByTagName('a');
    console.log(intolerances);

    const intolerancesArr = Array.from(intolerances);

    intolerancesArr.forEach(name => {
        name.addEventListener("click", () => {
            intolerancesName = name.getAttribute('value');
        })

        name.onmouseover = () => {
            show(name.getAttribute('value'));
        }
    });

    console.log('Intolerances: ', intolerancesName);

}

async function randomButton()
{
    const endpoint = new URL(`https://api.spoonacular.com/recipes/findByNutrients?minCarbs=10&maxCarbs=50&number=2&apiKey=${apiKey}`);

    console.log(endpoint);

    endpoint.searchParams.set("token", "YOUR_TOKEN_HERE");

    const response = await fetch(endpoint);

    const data = await response.json();

    console.log(response);

    console.log('Data: ', data);

    const {id, title, image} = data[0];  id = data[0].id; title = data[0].title 

    console.log(id, title, image);
}

//getAPICall();

changeCuisine();
changeIntolerances();
dropDownHover();