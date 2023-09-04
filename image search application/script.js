const accessKey="ked-_LPadm9XKjGuuUVx7W1Nsk9BcEk4YXdg4SuE5fY"

const formel = document.querySelector("form");
let inputEl = document.getElementById("search-input");
const searchResults = document.querySelector(".search-results");
const showMore = document.getElementById("show-more-button");


let inputData = "";
let page=1;

async function searchImages(){
 inputData = inputEl.value;
const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accessKey}`;

const response = await fetch(url);
const data = await response.json();
const results = data.results;
if (page===1){
    searchResults.innerHTML = "";
}

results.map((result)=>{
    const imageWrapper = document.createElement('div');
    imageWrapper.classList.add("search-result");
    const image = document.createElement('img');
    image.src = result.urls.small;
    image.alt = result.alt_description;
    const imageLink = document.createElement('a');
    imageLink.href = result.links.html;
    imageLink.target = "_blank";
    imageLink.textContent = result.alt_description;


    imageWrapper.appendChild(image);
    imageWrapper.appendChild(imageLink);
    searchResults.appendChild(imageWrapper);

});
page++;
if(page>1){
    showMore.style.display = "block";
}
}
document.getElementById("wallpaper").addEventListener("click",()=>{
    inputEl.value=document.getElementById("wallpaper").innerHTML;
    searchImages()
})

document.getElementById("tree").addEventListener("click",()=>{
    inputEl.value=document.getElementById("tree").innerHTML;
    searchImages()
})

document.getElementById("nature").addEventListener("click",()=>{
    inputEl.value=document.getElementById("nature").innerHTML;
    searchImages()
})

document.getElementById("waterfall").addEventListener("click",()=>{
    inputEl.value=document.getElementById("waterfall").innerHTML;
    searchImages()
})

document.getElementById("sunrise").addEventListener("click",()=>{
    inputEl.value=document.getElementById("sunrise").innerHTML;
    searchImages()
})

document.getElementById("landscapes").addEventListener("click",()=>{
    inputEl.value=document.getElementById("landscapes").innerHTML;
    searchImages()
})

document.getElementById("animals").addEventListener("click",()=>{
    inputEl.value=document.getElementById("animals").innerHTML;
    searchImages()
})

document.getElementById("cities").addEventListener("click",()=>{
    inputEl.value=document.getElementById("cities").innerHTML;
    searchImages()
})

document.getElementById("villages").addEventListener("click",()=>{
    inputEl.value=document.getElementById("villages").innerHTML;
    searchImages()
})

document.getElementById("rainbow").addEventListener("click",()=>{
    inputEl.value=document.getElementById("rainbow").innerHTML;
    searchImages()
})

formel.addEventListener("submit",(event)=>{
    event.preventDefault();
    page = 1;
searchImages()
}
)
showMore.addEventListener("click",(event)=>{
    searchImages()
}
)

