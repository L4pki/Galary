
import initialCards from "../utils/initialCards.js";

console.log(initialCards);

let index = Math.floor(Math.random() * initialCards.length);

let cardsArray = initialCards.map((item) => item); //все изображения

let lastId = 0;

function getNewCardId(){
  return ++lastId;
}
var modalImg = document.getElementById('myModalImg');
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("closeImg")[0];
span.onclick = function() {
  modalImg.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == modalImg) {
      modalImg.style.display = "none";
    }
}
function checkClickCard(elem){
  elem.addEventListener('click',zoomCard);
}
function zoomCard(){
  let zoom_image=document.querySelector(".zoom-image");
  zoom_image.src=this.src;
  modalImg.style.display = "block";
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
  checkClickCard(cardLink);
}
cardsArray.forEach(card => {
  createCard(card);
});
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




var modalProfile = document.getElementById('myProfile');
var btnProfile = document.getElementById("myBtnProfile");
var spanProfile = document.getElementsByClassName("closeProfile")[0];
btnProfile.onclick = function() {
  modalProfile.style.display = "block";
}
spanProfile.onclick = function() {
  modalProfile.style.display = "none";
}
window.onclick = function(event) {
  console.log(event.target);
    if (event.target == modalProfile) {
      modalProfile.style.display = "none";
    }
}


var modalAdd = document.getElementById('AddImgId');


var AddImg = document.getElementById("AddImg");


var spanAdd = document.getElementsByClassName("closeAddImg")[0];


AddImg.onclick = function() {
  modalAdd.style.display = "block";
}


spanAdd.onclick = function() {
  modalAdd.style.display = "none";
}


window.onclick = function(event) {
    if (event.target == modalAdd) {
      console.log(event.target);
      modalAdd.style.display = "none";
    }
    if (event.target == modalProfile) {
      modalProfile.style.display = "none";
    }
    if (event.target == modalImg) {
      modalImg.style.display = "none";
    }
}