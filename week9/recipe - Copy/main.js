import recipes from './recipes.mjs';

// build the random functions
function randomNumber(num) {
    return Math.floor(Math.random()*num);
}

function randomRecipe(list) {
    const ranNum = randomNumber(list.length);
    return list[ranNum];
}

// build a template function

function recipeTemplate(recipe) {
    const html = `<figure>
            <figcaption class="content-container">
                <img class="recipe-img" src="${recipe.image}" alt="apple crisp with ice cream in a bowl">
                <div class="recipe-infor">
                    <ul class="tag-row">
                        ${tagsTemplate(recipe.tags)}
                    </ul>
                    <h2 class="recipe-name">${recipe.name}</h2>
                    ${ratingTemplate(recipe.rating)}
                    <p class="recipe-description">${recipe.description}</p>    
                </div>
            </figcaption>
        </figure>`
    return html;
}

function tagsTemplate(tags) {
	// loop through the tags list and transform the strings to HTML
    let html = "";
    for (let i=0; i< tags.length; i++) {
        const tag = tags[i];
        html += `<li class="recipe-tag">${tag}</li>`
    }
	return html;
}

function ratingTemplate(rating) {
	// begin building an html string using the ratings HTML written earlier as a model.
	let html = `<span
	class="rating"
	role="img"
	aria-label="Rating: ${rating} out of 5 stars"
>`
// our ratings are always out of 5, so create a for loop from 1 to 5
    for (let i = 0; i < 5; i++) {
        if (i < rating) {
            html += `<span aria-hidden="true" class="icon-star">⭐</span>`;
        } else {
            html += `<span aria-hidden="true" class="icon-star-empty">☆</span>`;
        }
    }

	// after the loop, add the closing tag to our string
	html += `</span>`
	// return the html string
	return html
}



// 04 
function renderRecipes(recipeList) {
	// get the element we will output the recipes into
    const container = document.querySelector(".recipe-container")
	// use the recipeTemplate function to transform our recipe objects into recipe HTML strings
    const htmlString = recipeList.map(recipeTemplate).join("");
	// Set the HTML strings as the innerHTML of our output element.
    container.innerHTML = htmlString;
}

function init() {
  // get a random recipe
  const recipe = randomRecipe(recipes)
  // render the recipe with renderRecipes.
  renderRecipes([recipe]);
}
init();