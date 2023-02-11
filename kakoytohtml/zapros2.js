const postsDiv = document.getElementById('posts');

async function getPosts() {
    try {
        const url= 'https://kinopoiskapiunofficial.tech/api/v2.2/films';
        const response = await fetch(url, {
        headers: {
            'X-API-KEY': 'a6914d44-db6f-401e-96d4-9e84000a7075',
            'Content-Type': 'application/json',
        } 
    })
    const posts = await response.json();
    showPosts(posts.items);
    }
    catch(error) {
        console.error(error);
        alert('Возникла ошибка. Не смогли получить фильмы.')
    }
}

function showPosts(posts) {

    console.log(posts)
    for (const post of posts) {

        
        postsDiv.innerHTML += `
        
        <div style="width: 25%; margin-bottom: 20px; position: relative;">
            
            <div>
                <img src=${post.posterUrl} alt="" width="300" height="400"/>
            </div>
            <div style="position: absolute; top: 20px; left: 20px; color: green; text-shadow: black 1px 1px 0, black -1px -1px 0, black -1px 1px 0, black 1px -1px 0; font: 25px Arial, sans-serif">
                ${post.ratingKinopoisk}
            </div>
            <div style="font-weight: bold; width: 300px; color: white; padding-left: 10px; text-shadow: black 1px 1px 0, black -1px -1px 0, black -1px 1px 0, black 1px -1px 0;
            font: 25px Arial, sans-serif ">${post.nameRu}</div>
            <div style="font-weight: bold; width: 200px; color: white; padding-left: 10px; text-shadow: black 1px 1px 0, black -1px -1px 0, black -1px 1px 0, black 1px -1px 0;
            font: 17px Arial, sans-serif">Дата выхода: ${post.year}</div>
            <div style="font-weight: bold; width: 200px; color: white; padding-left: 10px; text-shadow: black 1px 1px 0, black -1px -1px 0, black -1px 1px 0, black 1px -1px 0;
            font: 17px Arial, sans-serif">Жанр: ${post.genres[0].genre}</div>
            <div style="font-weight: bold; width: 200px; color: white; padding-left: 10px; text-shadow: black 1px 1px 0, black -1px -1px 0, black -1px 1px 0, black 1px -1px 0;
            font: 17px Arial, sans-serif">Страна: ${post.countries[0] ? post.countries[0].country : ''}</div>
            <button id="${post.posterUrl}" onclick= "set(${post.kinopoiskId})">Смотреть</button>
        </div>
        
        `
    }
   
    
}
function set(kinopoiskId){
    window.open(`./zapros300.html?id=${kinopoiskId}`)
}

// localStorage.setItem('id','')
// localStorage.getItem('id')
// window.open('./njkj')

async function searchByKeyword() {
    try {
        const url= `https://kinopoiskapiunofficial.tech/api/v2.1/films/search-by-keyword?keyword=${Poiskovik.value}`;
        const response = await fetch(url, {
            headers: {
                'X-API-KEY': '8898bd23-87ed-4ed6-84b6-8e0f1adf3bc1',
                'Content-Type': 'application/json',
            } 
        })
        const posts = await response.json();
        postsDiv.innerHTML = ''
        for (const post of posts.films) {

        
            postsDiv.innerHTML += `
            
            <div style="width: 25%; margin-bottom: 20px; position: relative;">
                
                <div>
                    <img src=${post.posterUrl} alt="" width="300" height="400"/>
                </div>
                <div style="position: absolute; top: 20px; left: 20px; color: green; text-shadow: black 1px 1px 0, black -1px -1px 0, black -1px 1px 0, black 1px -1px 0; font: 25px Arial, sans-serif">
                    ${post.ratingKinopoisk}
                </div>
                <div style="font-weight: bold; width: 300px; color: white; padding-left: 10px; text-shadow: black 1px 1px 0, black -1px -1px 0, black -1px 1px 0, black 1px -1px 0;
                font: 25px Arial, sans-serif ">${post.nameRu}</div>
                <div style="font-weight: bold; width: 200px; color: white; padding-left: 10px; text-shadow: black 1px 1px 0, black -1px -1px 0, black -1px 1px 0, black 1px -1px 0;
                font: 17px Arial, sans-serif">Дата выхода: ${post.year}</div>
                <div style="font-weight: bold; width: 200px; color: white; padding-left: 10px; text-shadow: black 1px 1px 0, black -1px -1px 0, black -1px 1px 0, black 1px -1px 0;
                font: 17px Arial, sans-serif">Жанр: ${post.genres[0].genre}</div>
                <div style="font-weight: bold; width: 200px; color: white; padding-left: 10px; text-shadow: black 1px 1px 0, black -1px -1px 0, black -1px 1px 0, black 1px -1px 0;
                font: 17px Arial, sans-serif">Страна: ${post.countries[0] ? post.countries[0].country : ''}</div>
                
            </div>
            
            `
        }
    }
    catch(error) {
        console.error(error);
    }
}

const Poiskovik = document.querySelector('.Poiskblack')
Poiskovik.addEventListener('input', searchByKeyword);



// for (let i=0; i < post.; i++){
    
// }

// <div><img src="../Fotki/Paha.png"></div>
getPosts();

