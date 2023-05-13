let navbar = document.querySelector('.header .navbar');
document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.add('active');
}
document.querySelector('#nav-close').onclick = () => {
    navbar.classList.remove('active');
}

let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () => {
    searchForm.classList.add('active');
}

document.querySelector('#close-search').onclick = () => {
    searchForm.classList.remove('active');
}
window.onscroll = () => {
    navbar.classList.remove('active');
    if (window.scrollY > 0) {
        document.querySelector('.header').classList.add('active');
    } else {
        document.querySelector('.header').classList.remove('active');
    }
};
window.onload = () => {
    if (window.scrollY > 0) {
        document.querySelector('.header').classList.add('active');
    } else {
        document.querySelector('.header').classList.remove('active');
    }
};

// post a value

const contact = document.getElementById("contact");
const cname = document.getElementById("cname");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const subject = document.getElementById("subject");
const msg = document.getElementById("msg");

email.addEventListener("input", (e) => {
    if (!email.value.includes("@")) {
        email.classList.add("error");
    } else {
        email.classList.remove("error");
    }
});

contact.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("Working.....");

    const data = {
        Name: cname.value,
        Email: email.value,
        PhoneNumber: phone.value,
        Subject: subject.value,
        Message: msg.value
    };

    if (cname.value !== "" && phone.value !== "") {
        postData(data);
    }
});

async function postData(data) {
    console.log(data);

    await axios
        .post("http://localhost:3000/postdata", data)
        .then((res) => console.log(res.data));
}

// async function getData() {
//     const values = document.getElementById("form-value");
//     let out = await axios
//         .get("http://localhost:3000/get-posts")
//         .then((res) => res.data);

//     console.log(out);


//     out.forEach((val) => {
//         console.log(val);
//         values.innerHTML += `
//           <div>
//               <h1>${val.PersonID}</h1>
//               <h1>${val.Name}</h1>
//               <h1>${val.Email}</h1>
//               <h1>${val.PhoneNumber}</h1>
//               <h1>${val.Subject}</h1>
//               <h1>${val.Message}</h1>
//           </div>`;
//     });

// }
// getData();

