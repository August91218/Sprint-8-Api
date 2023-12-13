window.onload = async () => {

    console.log(location)
    const idParam = location.pathname.slice(1);

    const { data } = await getMovie(idParam); 

    const title = document.querySelector('#title');
    const rating = document.querySelector('#rating');
    const awards = document.querySelector('#awards');
    const release_date = document.querySelector('#release_date');
    const length = document.querySelector('#length');

    title.value = data.title;
    rating.value = data.rating;
    awards.value = data.awards;
    length.value = data.length || '120';

    document.querySelector('.botonActualizar').addEventListener('click', async function() {
        const dataActualizado = {
            title: title.value,
            rating: rating.value,
            awards: awards.value,
            release_date: release_date.value,
            length: length.value || '120'
        }

        putMovie(idParam, dataActualizado); 
    });

    document.querySelector('.botonAgregar').addEventListener('click', async function(){
        const dataActualizado = {
            title: title.value,
            rating: rating.value,
            awards: awards.value,
            release_date: release_date.value,
            length: length.value || '120'
        }

        await  createMovie(dataActualizado)
    })

    document.querySelector('.botonBorrar').addEventListener('click', async function(){
        await deleteMovie(idParam)
    })
}

const getMovie = async (idParam) => {

    // fetch( url, options )
    const response = await fetch(`http://localhost:3031/api/movies/${idParam}`,{
        method: 'GET'
    });
    const pelicula = await response.json();
    return pelicula;
}

const putMovie = async (idParam, data) => {
    await fetch(`http://localhost:3031/api/movies/update/${idParam}`, {
        method: 'PUT',
        headers: {
            'Content-Type' : 'application/json'
        },
        body:  JSON.stringify(data)
    })

    // await fetch(`http://localhost:3031/api/movies/update/${idParam}`, {
    //     method: 'PUT',
    //     headers: {
    //         'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify(data)
    // });

}

const createMovie = async ( data) => {
    await fetch(`http://localhost:3031/api/movies/create`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    });

}

const deleteMovie = async ( idParam ) => {
    await fetch(`http://localhost:3031/api/movies/delete/${idParam}`, {
        method: 'delete'
    });

}
