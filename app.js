import { func } from "./modules.js";
console.log(func(1, 2, 3));
// task 1

// task 2


function ax(url = 'https://reqres.in/api/login') {
    axios.post(url, {
        "email": "peter@klaven"
    }).then(success => {
        console.log(success)
    }).catch(error => {
        const p = document.createElement('p')
        document.body.appendChild(p)
        p.textContent = error;
        p.style.color = 'red';
        p.style.fontSize = '20px'
    })
}

ax();

function ax2(url = 'https://reqres.in/api/users') {
    axios.post(url, {
        "name": "morpheus",
        "job": "leader"
    }).then(success => {
        console.log(success)
    }).catch(error => {
        const p = document.createElement('p')
        document.body.appendChild(p)
        p.textContent = error;
        p.style.color = 'red';
        p.style.fontSize = '20px'
    })
}

ax2()



import moment from 'moment';
console.log(moment().format());
