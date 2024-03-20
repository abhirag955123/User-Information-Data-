let first_name = document.getElementById("firstname");
let last_name = document.getElementById("lastname");
let Country = document.getElementById("country");
let Phoneno = document.getElementById("phoneno");
let State = document.getElementById("state");
let City = document.getElementById("city");
let Village = document.getElementById("village");

const storedUserInfo = JSON.parse(localStorage.getItem("userInformation"));
console.log(storedUserInfo);

if (storedUserInfo) {
    first_name.innerText = storedUserInfo.firstName;
    last_name.innerText = storedUserInfo.lastName;
    Country.innerText = storedUserInfo.country;
    Phoneno.innerText = storedUserInfo.phoneNumber;
    State.innerText = storedUserInfo.state;
    City.innerText = storedUserInfo.city;
    Village.innerText = storedUserInfo.village;
} else {
    addDetails();
}

function addDetails() {
    const firstName = prompt("Enter your first name:");
    const lastName = prompt("Enter your last name:");
    const country = prompt("Enter your country:");
    const phoneNumber = prompt("Enter your phone number:");
    const state = prompt("Enter your state:");
    const city = prompt("Enter your city:");
    const village = prompt("Enter your village:");
    const store = {
        "firstName": firstName,
        "lastName": lastName,
        "country": country,
        "phoneNumber": phoneNumber,
        "state": state,
        "city": city,
        "village": village,
    };
    localStorage.setItem("userInformation", JSON.stringify(store));

    first_name.innerText = firstName;
    last_name.innerText = lastName;
    Country.innerText = country;
    Phoneno.innerText = phoneNumber;
    State.innerText = state;
    City.innerText = city;
    Village.innerText = village;
}
