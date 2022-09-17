const casesData = [
    {
        catName: "Стеклянные",
        urlImg: "./assets/img/22459-iwt 1.png",
        id: 1,
    },
    {
        catName: "Силиконовые",
        urlImg: "./assets/img/mellow-yellow-1 1.png",
        id: 2,
    },
    {
        catName: "Кожаные",
        urlImg: "./assets/img/Image (6).png",
        id: 3,
    },  
]
const casesList = document.querySelector(".card-list-skin")
casesData.map((obj)=>{
    // casesList.textContent = ""
    casesList.insertAdjacentHTML("beforeend", `
    <li class="card" data-id="${obj.id}" onclick="console.log(this.datasetid)">
        <img src="${obj.urlImg}" alt="">
        <h3 class="subtitle">${obj.catName}</h3>
    </li>  
    `)
})