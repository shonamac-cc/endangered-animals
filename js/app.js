document.addEventListener('DOMContentLoaded', () => {
  const newItemForm = document.querySelector('#new-form');
  newItemForm.addEventListener('submit', handleNewItemFormSubmit);
  
  const deleteAll = document.querySelector('#delete-all');
  deleteAll.addEventListener('click', handleDeleteAll);
})

const handleNewItemFormSubmit = function (event) {
    event.preventDefault();
    console.log(event);
    const speciesListItem = document.createElement('li');
    speciesListItem.classList.add('species-list-item')

    const name = document.createElement('h2');
    name.textContent = event.target.name.value;
    speciesListItem.appendChild(name);

    const species = document.createElement('h3');
    species.textContent = event.target.species.value;
    speciesListItem.appendChild(species);

    const continent = document.createElement('p');
    continent.textContent = event.target.continent.value;
    speciesListItem.appendChild(continent);

    const speciesList = document.querySelector('#species-list');
    speciesList.appendChild(speciesListItem);
    event.target.reset();
}

const handleDeleteAll = function (event) {
    const speciesList = document.querySelector('#species-list');
    speciesList.innerHTML = '';
}

