//console.log("jojojo")

async function getPosts() {
   //Try para comenzar el proceso
   try {

      console.log("Desafio Traer Posts")
      // url https://jsonplaceholder.typicode.com/posts
      const url = "https://jsonplaceholder.typicode.com/posts";

      const respuesta = await fetch(url);
      const data = await respuesta.json();
      // data: Array (100)
      let listItems = ''

      //Ciclo para anidar la data 
      for(let i = 0; i < 19 ; i++  ) {
      // data[i] = { id: 1, userId: 1, title: "texto", body: "texto largo"}
         dataTitle = data[i].title;
         dataBody = data[i].body;
         
         // armando estructura <li></li>
         listItems += `<li><h2>${dataTitle}</h2><p>${dataBody}</p></li>`
      }
      // estructura ul>li 
      let ul = `<ul>${listItems}</ul>`;

      // apuntar al elemento id="post-data"
      // modificar su html interno
      let ulContainer = document.getElementById("post-data");
      ulContainer.innerHTML = ul;
      
         // console.log(listItems)
         // console.log("Title", dataTitle);
         // console.log("Body", dataBody);

      //catch en caso de errores , diplay de consola.
   } catch {
         ((error) => console.error(error));
   }
}   

