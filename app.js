const listaAmigos = [] // esto es para ingresar y guardar los nombres

function agregarAmigo(){
         const imputAmigo = document.getElementById("amigo");
         const ullistadeamigos = document.getElementById("listaAmigos");
         ullistadeamigos.innerHTML  += `<li>${imputAmigo.value}</li>`;

        if(imputAmigo.value === ''){
            alert('por favor inserte un nombre')
        }
        else { listaAmigos.push(imputAmigo.value) }

        imputAmigo.value = ''
}

   function sortearAmigo(){
        const sorteo = Math.floor(Math.random() * listaAmigos.length)
       
        const amigosecreto =  listaAmigos[sorteo]

        const resultado = document.getElementById('resultado')
        resultado.innerHTML = `<li>tu amigo secreto es ${amigosecreto}</li>`

    }





    


