import { createElement } from './util/dom';

import '../styles/contact.scss';

const generate = (container) => {
    container.appendChild(createContactDiv());
}

const createContactDiv = () => {
    const contactDiv = createElement("div", "contact");

    contactDiv.appendChild(createAddressDiv());
    contactDiv.appendChild(createHoursDiv());
    contactDiv.appendChild(createPhoneDiv());
    contactDiv.appendChild(createGoogleMapsDiv());
    return contactDiv;
}

const createAddressDiv = () => {
    const addressDiv = createElement("div", "address");
    const address = createElement("p", null, null, null, '222 E 93rd St New York, NY 10128');
    const addressIcon = createElement("i", null, 'fa fa-location-arrow', [["aria-hidden", "true"]]);
    address.insertBefore(addressIcon, address.firstChild);
    addressDiv.appendChild(address);
    return addressDiv;
}

const createHoursDiv = () => {
    const hoursDiv = createElement("div", "hours");
    const hours1 = createElement("p", null, null, null, `Sun - Thu ${'\u00A0'.repeat(10)} 11:00 am - 11:00 pm`);
    const div = createElement("div");
    const hoursIcon = createElement("i", null, 'fa fa-calendar', [["aria-hidden", "true"]]);
    div.appendChild(hoursIcon);
    hoursDiv.appendChild(div);
    const hours2 = createElement("p", null, null, null, `Fri - Sat ${'\u00A0'.repeat(10)} 11:00 am - 12:00 am`);
    hoursDiv.appendChild(hours1);
    hoursDiv.appendChild(hours2);
    return hoursDiv;    
}

const createPhoneDiv = () => {
    const phoneDiv = createElement("div", "phone");
    const phone = createElement("p", null, null, null, '(646) 371-9225');
    const phoneIcon = createElement("i", null, 'fa fa-phone', [["aria-hidden", "true"]]);
    phone.insertBefore(phoneIcon, phone.firstChild);    
    phoneDiv.appendChild(phone);
    return phoneDiv;
}

const createGoogleMapsDiv = () => {
    const directionsDiv = createElement("div", "directions");
    const gMapSrc = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1510.5248534002394!2d-73.95046735593314!3d40.78292135782287!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c258a5a018e7f9%3A0x216f14b3374a024a!2s222%20E%2093rd%20St%2C%20New%20York%2C%20NY%2010128!5e0!3m2!1sen!2sus!4v1619475028756!5m2!1sen!2sus';
    const attributes = [['src', gMapSrc], ['width', 450], ['height', 450], ['style', "border:0;"], ['allowfullscreen', ""], ['loading','lazy']];
    const mapFrame = createElement("iframe", null, null, attributes);
    directionsDiv.appendChild(mapFrame);
    return directionsDiv;    
}

export default generate;