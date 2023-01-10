//catching HTML elements

const inputPkmnName = document.getElementById('poke-name');
const inputPkmnLevel = document.getElementById('poke-level');
const inputPkmnType = document.getElementById('poke-type');
const createBtn = document.getElementById('create-btn');
const newPokeArea = document.getElementById('new-pkmn-area');
const pokemonListUl = document.getElementById('pokemon-list');
const trainerNameInput = document.getElementById('trainer-name-input');
const trainerName = document.getElementById('trainer-party-name');
const setTrainerBtn = document.getElementById('set-trainer');
let trainerSet = false
let counter = 1
// let eventCounter = 0;
//events

createBtn.addEventListener('click', createPkmn);
setTrainerBtn.addEventListener('click', setTrainer);

//functions

function createPkmn(ev){
    if(trainerSet){
    ev.preventDefault()
    partyLimit()
    
   
    const pokemonLi = document.createElement('li');
    pokemonLi.className = 'poke-li-style';
    pokemonLi.id = 'poke-li-n' + counter;

    const newPokeName = document.createElement('h2')
    newPokeName.innerText = inputPkmnName.value;
    newPokeName.className = 'pokemon-name-style';
    if(newPokeName.innerText ===''){
        alert('insert a pokemon name');
        return
    }
    // eventCounter++
    const newPokeLevel = document.createElement('span');
    newPokeLevel.innerText = inputPkmnLevel.value;
    newPokeLevel.className = 'pokemon-level-style';
    
    if (newPokeLevel.innerText > 100){
        alert('Level max is 100');
        return
    }

    const newPokeType = document.createElement('h3');
    newPokeType.innerText = inputPkmnType.options[inputPkmnType.selectedIndex].value;
    newPokeType.className = 'pokemon-type-style'

    if(newPokeType.innerText ==='Fire'){
        newPokeType.id = 'fire-type'
    }if (newPokeType.innerText ==='Water') {
        newPokeType.id = 'water-type'
    }if (newPokeType.innerText ==='Grass') {
        newPokeType.id = 'grass-type'
    }if (newPokeType.innerText ==='Normal') {
        newPokeType.id = 'normal-type'
    }if (newPokeType.innerText ==='Eletric') {
        newPokeType.id = 'eletric-type'
    }if (newPokeType.innerText ==='Flying') {
        newPokeType.id = 'flying-type'
    }   if(newPokeType.innerText ==='Bug'){
        newPokeType.id = 'bug-type'
    }if (newPokeType.innerText ==='Rock') {
        newPokeType.id = 'rock-type'
    }if (newPokeType.innerText ==='Ground') {
        newPokeType.id = 'ground-type'
    }if (newPokeType.innerText ==='Fighting') {
        newPokeType.id = 'fighting-type'
    }if (newPokeType.innerText ==='Ice') {
        newPokeType.id = 'ice-type'
    }if (newPokeType.innerText ==='Dragon') {
        newPokeType.id = 'dragon-type'
    }if (newPokeType.innerText ==='Poison') {
        newPokeType.id = 'poison-type'
    }if (newPokeType.innerText ==='Ghost') {
        newPokeType.id = 'ghost-type'
    }if (newPokeType.innerText ==='Psychic') {
        newPokeType.id = 'psychic-type'
    }

    pokemonLi.append(newPokeName,newPokeLevel,newPokeType)
    pokemonListUl.appendChild(pokemonLi);
    newPokeArea.appendChild(pokemonListUl)

    //reseting values
    inputPkmnName.value = '';
    inputPkmnLevel.value = 5;
    inputPkmnType.value = 'Normal';

    counter++
    console.log(pokemonListUl)
    // console.log('Event n° '+eventCounter)
    } else{
        ev.preventDefault()
        alert('First, set a trainer name!');
        trainerNameInput.focus();
       return
    }
}

function partyLimit(){
    console.log('verifying party length')
    const pokemonItemGroup = document.querySelectorAll('.poke-li-style');
    if(pokemonItemGroup.length >4){
        createBtn.removeEventListener('click', createPkmn)
        createBtn.style.cursor = 'not-allowed'
        createBtn.setAttribute('disabled', 'disabled')
        createBtn.value = 'Party full'
        createBtn.style.background = 'gray'
        inputPkmnName.style.cursor = 'not-allowed'
        inputPkmnLevel.style.cursor = 'not-allowed'
        inputPkmnType.style.cursor = 'not-allowed'
        inputPkmnType.setAttribute('disabled','disabled')
        inputPkmnName.setAttribute('disabled', 'disabled')
        inputPkmnLevel.setAttribute('disabled', 'disabled')
     
    
        return
    }
}

function setTrainer(){
    if(trainerNameInput.value.length < 2){
        alert('Insert a trainer name!')
    }else{
        trainerName.removeAttribute('hidden')
    trainerName.innerText = trainerNameInput.value;
    trainerNameInput.setAttribute('disabled', 'disabled');
    setTrainerBtn.setAttribute('disabled', 'disabled')
    setTrainerBtn.style.cursor = 'not-allowed'
    setTrainerBtn.style.backgroundColor ='gray'
    setTrainerBtn.innerText = 'Setted'
    trainerNameInput.style.cursor = 'not-allowed'
    trainerSet = true
    }

}


