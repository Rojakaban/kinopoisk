const postsDiv = document.getElementById('posts');

async function getPosts() {
    try {
        const kinopoiskId = window.location.href.split('id=')[1];
        const url= `https://kinopoiskapiunofficial.tech/api/v2.2/films/${kinopoiskId}`;
        const response = await fetch(url, {
        headers: {
            'X-API-KEY': 'a6914d44-db6f-401e-96d4-9e84000a7075',
            'Content-Type': 'application/json',
        } 
    })
    const post = await response.json();
    showPosts(post);
    }
    catch(error) {
        console.error(error);
        alert('Возникла ошибка. Не смогли получить фильмы.')
    }
}
const button0 = document.querySelector('#dobavil')
button0.onclick = function() {
        console.log('djfd;f')
        window.location.href = './zapros2.html'
    }
function showPosts(post) {



        postsDiv.innerHTML += `
        
        <div style="width: 25%; margin-bottom: 20px; position: relative;">
            <div><img src=${post.posterUrl} alt="" width="500" height="600"/>
            <div style="position: absolute; top: 20px; left: 20px; color: green; text-shadow: black 1px 1px 0, black -1px -1px 0, black -1px 1px 0, black 1px -1px 0; font: 25px Arial, sans-serif">
                ${post.ratingKinopoisk}
            </div>
        <div>    
            <div style="font-weight: bold; width: 300px; color: white; padding-left: 10px; text-shadow: black 1px 1px 0, black -1px -1px 0, black -1px 1px 0, black 1px -1px 0;
            font: 25px Arial, sans-serif ">${post.nameRu}</div>
            <div style="font-weight: bold; width: 200px; color: white; padding-left: 10px; text-shadow: black 1px 1px 0, black -1px -1px 0, black -1px 1px 0, black 1px -1px 0;
            font: 17px Arial, sans-serif">Дата выхода: ${post.year}</div>
            <div style="font-weight: bold; width: 200px; color: white; padding-left: 10px; text-shadow: black 1px 1px 0, black -1px -1px 0, black -1px 1px 0, black 1px -1px 0;
            font: 17px Arial, sans-serif">Жанр: ${post.genres[0].genre}</div>
            <div style="font-weight: bold; width: 200px; color: white; padding-left: 10px; text-shadow: black 1px 1px 0, black -1px -1px 0, black -1px 1px 0, black 1px -1px 0;
            font: 17px Arial, sans-serif">Страна: ${post.countries[0] ? post.countries[0].country : ''}</div>
        </div>
        </div>
        
        `
   
    
}


getPosts();