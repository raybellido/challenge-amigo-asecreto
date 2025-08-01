const listaAmigos = [] // esto es para ingresar y guardar los nombres

function agregarAmigo(){
         const imputAmigo = document.getElementById("amigo"); //  imput
         
         if (imputAmigo.value == '') {
             alert('escribe un nombre')
             return
            }else{
                listaAmigos.push(imputAmigo.value)
            }
            const ullistadeamigos = document.getElementById("listaAmigos"); // id listaAmigos es la lista donde va los datos ingresados
            
            ullistadeamigos.innerHTML = '';

            for (let index = 0; index < listaAmigos.length; index++) {
                
                
                const agregarli = document.createElement('li')
                agregarli.textContent = listaAmigos[index]
                ullistadeamigos.appendChild(agregarli)

            }
        

        imputAmigo.value = ''
        
         
}

   function sortearAmigo(){
        const sorteo = Math.floor(Math.random() * listaAmigos.length)
       
        const amigosecreto =  listaAmigos[sorteo]

        const resultado = document.getElementById('resultado')
        resultado.innerHTML = `<li>tu amigo secreto es ${amigosecreto}</li>`

    }





    


