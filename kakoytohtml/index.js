const url = 'http://192.168.1.118:5000';
async function createUser(){
    try {
        const url = 'http://192.168.1.118:5000';
        const response = await axios.post(`${url}/user/add`, {
            fio: 'Павел',
            tableId: 50,
        });
        console.log(response);
    }
    catch(error) {
        console.error('Произошла ошибка', error);
    }
}

async function createComment(){
    try {
        const response = await axios.post( `${url}/comments/add`,{
            filmId: 1,
            commentText: `babidgon`,
            filmRating: 1000,
            userId: 14,
        });
        console.log(response)
    }
    catch(error) {
        console.error('Произошла ошибка', error);
    }
}

createComment();