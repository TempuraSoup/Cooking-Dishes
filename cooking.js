const apiKey = '4bf05c1072d54fa494b77b3a60dbc035';

function show(dropDown, a) {
    const buttonSelect = dropDown.getElementsByClassName('buttonSelector')[0];
    buttonSelect.innerHTML = a;
}

function dropDownHover(dropDown) {

    const button = dropDown.getElementsByClassName('buttonSelector')[0];
    const dropDownMenu = dropDown.getElementsByClassName('dropdown-content')[0];

    button.onmouseover = () => {
        dropDownMenu.classList.add('active');
    }

    dropDownMenu.onmouseover = () => {
        dropDownMenu.classList.add('active');
    }

    dropDownMenu.onmouseout = () => {
        dropDownMenu.classList.remove('active');
    }
}

// Filter Options
var cuisineName = 'Default';
function changeCuisine() {

    // DropdownMenu Class
    const dropDown = document.querySelectorAll('.dropdown')[0];
    const dropDownMenu = document.getElementsByClassName('dropdown-content')[0];
    console.log(dropDownMenu);
    // Get HTMLCollection of Div Content (NOT A USABLE ARRAY)
    const cuisineNames = dropDownMenu.getElementsByTagName('a');

    // Convert HTMLCollection into Usable Array of Elements
    const cuisineNamesArr = Array.from(cuisineNames);

    // Check each div element for if they are clicked
    cuisineNamesArr.forEach(name => {
        name.addEventListener("click", () => {
            cuisineName = name.getAttribute('value');
            show(dropDown, name.getAttribute('value'));
            dropDownMenu.classList.remove('active');
        })

        name.onmouseover = () => {
            show(dropDown, name.getAttribute('value'));
        }
    });

    dropDownHover(dropDown);

}

var intolerancesName = 'Default';
function changeIntolerances() {

    // DropdownMenu Class
    const dropDown = document.querySelectorAll('.dropdown')[1];
    const dropDownMenu = document.getElementsByClassName('dropdown-content')[1];

    // Get HTMLCollection of Div Content (NOT A USABLE ARRAY)
    const intolerances = dropDownMenu.getElementsByTagName('a');

    // Convert HTMLCollection into Usable Array of Elements
    const intolerancesArr = Array.from(intolerances);

    // Check each div element for if they are clicked
    intolerancesArr.forEach(name => {
        name.addEventListener("click", () => {
            intolerancesName = name.getAttribute('value');
            show(dropDown, name.getAttribute('value'));
            dropDownMenu.classList.remove('active');
        })

        name.onmouseover = () => {
            show(dropDown, name.getAttribute('value'));
        }
    });

    dropDownHover(dropDown);

}

async function randomButton()
{
    const url = new URL(`https://api.spoonacular.com/recipes/complexSearch?cuisine=${cuisineName}&intolerances=${intolerancesName}&instructionsRequired=true&addRecipeInformation=true&fillIngredients=true&sort=random&number=1&apiKey=${apiKey}`);

    const response = await fetch(url);
    const data = await response.json();
    var randomNumber = Math.floor(Math.random() * data.number);

    if (data.number > 0)
    {
        const randomDish = data.results[randomNumber];

        const summary = document.getElementById('dishSummary');
        summary.innerHTML = `<h2>${title}</h2>
        <p>${summary}</p>`;
    }
    else
    {
        console.log('No dishes meet the specified parameters');
        alert('No dishes meet the specified parameters');
    }
}
    

changeCuisine();
changeIntolerances();
dropDownHover();