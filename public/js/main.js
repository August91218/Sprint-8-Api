window.onload = async () => {
  const app = document.getElementById("root");
  const container = document.createElement("div");
  container.setAttribute("class", "container");
  app.appendChild(container);

  // Aqui debemos agregar nuestro fetch

  const peliculas = await getAllMovies();


  // Codigo que debemos usar para mostrar los datos en el frontend
    let data = peliculas.data;

    data.forEach((movie) => {
      const card = document.createElement("div");
      card.setAttribute("class", "card");

      const img = document.createElement("img");
      img.setAttribute("src", `/uploads/${movie.image}`);

      const h1 = document.createElement("h1");
      h1.textContent = movie.title;

      const p = document.createElement("p");
      p.textContent = `Rating: ${movie.rating}`;

      const duracion = document.createElement("p");
      duracion.textContent = `Duración: ${movie.length}`;

      container.appendChild(card);
      card.appendChild(img);

      card.appendChild(h1);
      card.appendChild(p);
      if (movie.genre !== null) {
        const genero = document.createElement("p");
        genero.textContent = `Genero: ${movie.genre.name}`;
        card.appendChild(genero);
      }
      card.appendChild(duracion);
    });
  
};

const getAllMovies = async() =>{
  const response =  await fetch('http://localhost:3031/api/movies');
  const peliculas = await response.json();

  return peliculas;
};



// Retrieve params via url.search, passed into constructor



// Pass in a string literal
// const params2 = new URLSearchParams("foo=1&bar=2");
// const params2a = new URLSearchParams("?foo=1&bar=2");

// // Pass in a sequence of pairs
// const params3 = new URLSearchParams([
//   ["foo", "1"],
//   ["bar", "2"],
// ]);

// // Pass in a record
// const params4 = new URLSearchParams({ foo: "1", bar: "2" });


