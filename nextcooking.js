
import { cuisineName } from './cooking.js';
import { intolerancesName } from './cooking.js';

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

function backButton()
{
    window.location.href="index.html";
}