
import initialCards from "../utils/initialCards.js";

console.log(initialCards);

let index = Math.floor(Math.random() * initialCards.length);

let cardsArray = initialCards.map((item) => item); //все изображения

let lastId = 0;

function getNewCardId(){
  return ++lastId;
}

function createEventLForDelete(elem){
  elem.addEventListener('click', removeParent);
}

function createEventForLike(elem){
  elem.addEventListener('click', setLike);
}

function setLike(){
  if(this.classList.contains('card__like_checked')){
    this.classList.remove('card__like_checked');
  } else{
    this.classList.add('card__like_checked');
  }
    
      
}

//////////////////
const cardTemplate = document.querySelector('#card').content;
const cards = document.querySelector('.cards');

function createCard(data)
{
  const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
  cardElement.id = getNewCardId();

  const cardLink = cardElement.querySelector('.card__image');
  cardLink.src = data.link;
  cardLink.alt = data.name;
  const cardTitle = cardElement.querySelector('.card__title');
  cardTitle.textContent = data.name;
  const buttonDelete = cardElement.querySelector('.card__remove');
  const buttonLike = cardElement.querySelector('.card__like');
  
  cards.append(cardElement); 
  createEventLForDelete(buttonDelete);
  createEventForLike(buttonLike);
}

cardsArray.forEach(card => {
  createCard(card);
});


/////////


function AddNewCard(data)
{
  cardsArray.push(data);
  createCard(data);
  console.log(cardsArray);
}

const nn = 'Камчатка';
const ll = 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg';


AddNewCard({name:nn, link:ll});


console.log(cardsArray);

const cardElementTest = document.querySelectorAll('.card:first-child')[0]
    .querySelector('.card__like').classList.add('card__like_checked');


//////////////////



console.log('Hello');

let profileName = document.querySelector('#profile__input_name');
console.log(`Значение pl = ${profileName.placeholder}`);

let profileAbout = document.querySelector('#profile__input_about');
console.log(`Значение pl = ${profileAbout.placeholder}`);

let buttonProfile = document.querySelector('.profile__button');

console.log(`Значение button = ${buttonProfile}`);

function showClick() {
  console.log(`Имя = ${profileName.value}\nО себе = ${profileAbout.value}`);
}

buttonProfile.addEventListener('click', showClick);

let profileImage = document.querySelector('.profile__image');

function ShowImage(){
  if(profileImage.classList.contains('profile__image_unvisiable')){
    profileImage.classList.remove('profile__image_unvisiable');
  }
  else {
    profileImage.classList.add('profile__image_unvisiable');
  }
}

function imageExists(image_url){
  var http = new XMLHttpRequest();
  http.open('HEAD', image_url, false);
  http.send();
  return http.status != 404;
}

profileImage.addEventListener('click', ShowImage);

const formElement = document.getElementById('form1');
const list = [];

formElement.addEventListener('submit', (e) => {
  e.preventDefault();
  const formData = new FormData(formElement);
  
  const name = formData.get('popupTitle'); 
  const link = formData.get('popupLink');
  //console.log(name);
  //console.log(link);
  if(imageExists(link) && link != "" && name != ""){
    createCard({name: name, link: link});
  } 
});

function deleteFromCards(id){
  cardsArray.forEach(function(card, index) {
    if(card.id === id){
      cardsArray.splice(index, 1);
    }
  });
}

function removeParent(){
  let revDiv = this.parentElement;
  revDiv.remove();
  deleteFromCards(this.parentElement.id);
}
