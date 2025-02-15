let input = document.querySelector('input')
let btnEnviar = document.querySelector('button')
let iconoClima = document.querySelector("#wicon")


function cargarCiudad(){

        let ciudad= input.value
        $.getJSON("https://api.openweathermap.org/data/2.5/weather?q=" + ciudad +"&appid=fdd533266e28101881f610f2b8f1ebe1",function(data){
            console.log(data)
            document.querySelector(".container").style.visibility = "visible"
            document.querySelector("#ciudad").textContent = data.name
            let tem = 
            document.querySelector("#temperatura").innerHTML =(Math.floor(data.main.temp) -273)+'°C'
            iconoClima.setAttribute('src','https://openweathermap.org/img/wn/'+data.weather[0].icon+'@2x.png')
          
            document.querySelector("#descripcion").textContent= data.weather[0].description
        })
        if(input.value === "" && e.code === 'Enter'){
            alert('No ah ingresado la ciudad')
        }
    }
  


input.addEventListener("keydown",function(e){
    if(input.value && e.code === 'Enter'){
        cargarCiudad()
    }
    if(input.value === "" && e.code === 'Enter'){
        alert('No ah ingresado la ciudad')
    }
   
   
})

btnEnviar.addEventListener('click',cargarCiudad)

