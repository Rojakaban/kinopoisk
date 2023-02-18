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
        
        <div style="width: 25%; margin-bottom: 100px; position: relative;">
            <div><img src=${post.posterUrl} alt="" width="500" height="600"/>
            <div style="position: absolute; top: 20px; left: 425px; color: green; text-shadow: black 1px 1px 0, black -1px -1px 0, black -1px 1px 0, black 1px -1px 0; font: 25px Arial, sans-serif">
                ${post.ratingKinopoisk}
            </div>
            <div style="position: absolute; top: 0px; left: 600px;"></>
            <div style="font-weight: bold; width: 900px; color: white; padding-left: 100px; text-shadow: black 1px 1px 0, black -1px -1px 0, black -1px 1px 0, black 1px -1px 0;
            font: 50px Courier, sans-serif ">${post.nameRu}</div>
            <div style="font-weight: bold; width: 200px; color: white; padding-left: 100px; text-shadow: black 1px 1px 0, black -1px -1px 0, black -1px 1px 0, black 1px -1px 0;
            font: 25px Courier, sans-serif">Дата выхода: ${post.year}</div>
            <div style="font-weight: bold; width: 200px; color: white; padding-left: 100px; text-shadow: black 1px 1px 0, black -1px -1px 0, black -1px 1px 0, black 1px -1px 0;
            font: 25px Courier, sans-serif">Жанр: ${post.genres[0].genre}</div>
            <div style="font-weight: bold; width: 200px; color: white; padding-left: 100px; text-shadow: black 1px 1px 0, black -1px -1px 0, black -1px 1px 0, black 1px -1px 0;
            font: 25px Courier, sans-serif">Страна: ${post.countries[0] ? post.countries[0].country : ''}</div>
            <p style="font-weight: bold; width: 700px; color: white; padding-left: 100px; text-shadow: black 1px 1px 0, black -1px -1px 0, black -1px 1px 0, black 1px -1px 0;
            font: 25px Courier, sans-serif">Описание: ${post.description}</p>
            <div style="position: absolute; top:0px; left:90px; z-index: -1;"><img src="../Fotki/fon02.png" alt="" width="1000" height="900"</>
        <div>    
            
        </div>
        </div>
        
        `
   
    
}


getPosts();