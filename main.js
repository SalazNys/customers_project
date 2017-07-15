let custInfo = customers.results;
console.log(customers.results);
let wrapper = document.querySelector('.wrapper');
let custUl =document.createElement("ul");
for(let i = 0;  i < custInfo.length; i++){

    let custLi = document.createElement("li")
    let template = `
    <img src = ${ custInfo[i].picture.large}>
    <h2> ${custInfo[i].name.first} ${custInfo[i].name.last} </h2>
    <p> ${custInfo[i].email}</p>
    <p> ${custInfo[i].location.street}</p>
    <p> ${custInfo[i].location.city}, ${custInfo[i].location.state}
    ${custInfo[i].location.postcode}</p>
    <p> ${custInfo[i].phone}</p>
    <p class ="sN">${custInfo[i].id.value}</p>

    `
    custLi.innerHTML = template;
    custUl.appendChild(custLi);
    wrapper.appendChild(custUl);

}







































// let template = `
// <article>
// <h1>INTERNAL COMPANY DIRECTOR</h1>
// <div id="wrapper">
// <section class="sect_a">
//        <div class="picture_a">${customers.results[0].picture.medium}</div>
//        <div class="picture_b">${customers.results[1].picture.medium}</div>
//        <div class="picture_c">${customers.results[2].picture.medium}</div>
//        <div class="picture_d">${customers.results[3].picture.medium}</div>
// </section>
// <section class="sect_b">
//        <div>
//             <h3>${customers.results[0].name["first"]}+${customers.results[0].name["last"]}</h3>
//             <h3>${customers.results[0].email}</h3>
//        </div>
//        <div>
//             <h3>${customers.results[1].name["first"]}+${customers.results[1].name["last"]}</h3>
//             <h3>${customers.results[1].email}</h3>
//        </div>
//        <div>
//             <h3>${customers.results[2].name["first"]}+${customers.results[2].name["last"]}</h3>
//             <h3>${customers.results[2].email}</h3>
//        </div>
//        <div>
//             <h3>${customers.results[3].name["first"]}+${customers.results[3].name["last"]}</h3>
//             <h3>${customers.results[3].email}</h3>
//        </div>
// </section>
// <section class="sect_c">
//        <div>
//             <h3>${customers.results[0].address}</h3>
//             <h3>${customers.results[0].email}</h3>
//        </div>
//        <div>
//             <h3>${customers.results[1].name["first"]}+${customers.results[1].name["last"]}</h3>
//             <h3>${customers.results[1].email}</h3>
//        </div>
//        <div>
//             <h3>${customers.results[2].name["first"]}+${customers.results[2].name["last"]}</h3>
//             <h3>${customers.results[2].email}</h3>
//        </div>
//        <div>
//             <h3>${customers.results[3].name["first"]}+${customers.results[3].name["last"]}</h3>
//             <h3>${customers.results[3].email}</h3>
//        </div>
// </section>
//
//
// </div>
//
// </article>
// `
