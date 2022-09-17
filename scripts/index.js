
const headphonesData = [
    {
        name:"Apple BYZ S852I",
        urlImg: "./assets/img/Image.png",
        price: "2927 Р",
        rating:"4.7",
        id: 1,
    },
    {
        name:"Apple EarPods",
        urlImg: "./assets/img/Image (1).png",
        price: "2927 Р",
        rating:"1.7",
        id: 2,
    },
    {
        name:"Apple EarPods",
        urlImg: "./assets/img/Image (2).png",
        price: "2927 Р",
        rating:"4.7",
        id: 3,
    },
    {
        name:"Apple BYZ S852I",
        urlImg: "./assets/img/Image.png",
        price: "2927 Р",
        rating:"4.7",
        id: 4,
    },
    {
        name:"Apple EarPods",
        urlImg: "./assets/img/Image (1).png",
        price: "2927 Р",
        rating:"4.5",
        id: 5,
    },
    {
        name:"Apple EarPods",
        urlImg: "./assets/img/Image (2).png",
        price: "2927 Р",
        rating:"4.5",
        id: 6,
    },
]
const headphonesList = document.querySelector(".card-list-headphones")
headphonesData.map((obj)=>{
    headphonesList.insertAdjacentHTML("beforeend", `
    <li class="card">
        <img src="${obj.urlImg}" alt="">
        <div class="info">
            <h3 class="model">${obj.name}</h3>
            <div class="price">${obj.price}</div>
        </div>
        <div class="rating">
            <ion-icon name="star"></ion-icon>
            <div class="number">${obj.rating}</div>
        </div>
    </li>
    `)

})
const remoteHeadphonesData = [
    {
        name:"Apple AirPods",
        urlImg: "./assets/img/Image (3).png",
        price: "9527 Р",
        rating:"4.7",
        id: 1,
    },
    {
        name:"GERLAX GH-04",
        urlImg: "./assets/img/Image (4).png",
        price: "6527 Р",
        rating:"4.7",
        id: 2,
    },
    {
        name:"BOROFONE BO4",
        urlImg: "./assets/img/Image (5).png",
        price: "7527 Р",
        rating:"4.7",
        id: 3,
    }
]
const remoteHeadphonesList = document.querySelector(".remote")
remoteHeadphonesData.map((obj)=>{
    remoteHeadphonesList.insertAdjacentHTML("beforeend", `
    <li class="card">
       <img src="${obj.urlImg}" alt="">
        <div class="info">
            <h3 class="model">${obj.name}</h3>
            <div class="price">${obj.price}</div>
        </div>
        <div class="rating">
            <ion-icon name="star"></ion-icon>
            <div class="number">${obj.rating}</div>
        </div>
    </li>
    `)

})
