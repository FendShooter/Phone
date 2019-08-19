
import { Phone } from './class.js';
// varaible

window.addEventListener("DOMContentLoaded", () => {
  document.querySelector(".jsDisplay").focus();
  phone.fetchData();
  phone.del();
});
const phone = new Phone();

//variables

const searchContact = document.querySelector("#searchContact");

searchContact.addEventListener("keyup", filter);

function filter() {
    let value = searchContact.value.toUpperCase();

    //looping through
    let contacts = document.querySelectorAll('.name');
    contacts.forEach(contact => {
        const fil = contact;

        if (fil.innerHTML.toUpperCase().indexOf(value) > -1) {
            fil.style.display = 'block';
        }
        else {
            fil.style.display = 'none';

        }
    });

}
