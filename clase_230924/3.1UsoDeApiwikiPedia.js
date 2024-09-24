const terminoBusqueda = "Programación";
const url = `https://es.wikipedia.org/w/api.php?action=query&list=search&srsearch=${terminoBusqueda}&format=json&origin=*`;
// Función para obtener resultados de Wikipedia

async function buscarEnWikipedia() {
	try {
		const respuesta = await fetch(url); // Llamada a la API de wikipedia
		const datos = await respuesta.json(); // Convierte la respuesta a
		// Si hay resultados, mostrarlos en una lista
		const resultados = datos.query.search;
		if (resultados.length > 0) {
			document.getElementById("resultados").textContent =
				`Resultados de búsqueda para "${terminoBusqueda}":`;

			const listaResultados = document.getElementById("listaResultados");
			// Recorrer los resultados y crear una lista de artículos
			// biome-ignore lint/complexity/noForEach: <explanation>
			resultados.forEach((resultado) => {
				const li = document.createElement("li");

				li.innerHTML = `<a href="https://es.wikipedia.org/wiki/${resultado.title}" target="_blank">${resultado.title}</a>`;
				listaResultados.appendChild(li);
			});
		} else {
			document.getElementById("resultados").textContent =
				"No se encontraron resultados.";
		}
	} catch (error) {
		document.getElementById("resultados").textContent =
			"Error al obtener los datos de Wikipedia.";
		console.error(`Error: ${error}`);
	}
}

buscarEnWikipedia();
