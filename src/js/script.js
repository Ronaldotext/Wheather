const btn = document.getElementById('btn');
const span = document.getElementById('span');
const span2 = document.getElementById('span2');
const span3 = document.getElementById('span3');
const span4 = document.getElementById('span4');
const span5 = document.getElementById('span5');
const span6 = document.getElementById('span6');
const iconWheather = document.getElementById('iconWheather');
const searchInput = document.getElementById('searchInput');
const country=document.getElementById('country')
const hidden=document.querySelector('.hidden')
const apiCountryURL="https://countryflagsapi.com/png/"

const tempo=async (city)=> {
    const apiKey = "6df2f7ce454d0ba94df36190ecf0c6a5"; 
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}&lang=pt_br`;

  
       try{
        const response = await fetch(url);
        const data = await response.json();
        if (response.ok) {
            return data;
          } else {
            throw new Error('error');
          }
        } catch (error) {
          throw new Error(error);
        }
        
}

const tempoData = async (city) => {
    try {
      const data = await tempo(city);
        span.innerText = data.name;
        span2.innerText = `${parseInt(data.main.temp)}°`;
        span4.innerText = data.weather[0].description;
        iconWheather.setAttribute(
          'src',
          `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`
        );
        country.innerText = data.sys.country;
        span3.innerText = `Temp-M:${parseInt(data.main.temp_max).toFixed(2)}°`;
        span5.innerText = `Vento:${data.wind.speed}km/h`;
        span6.innerText = `Umidade:${parseInt(data.main.humidity)}%`;
    
      
      }
     catch (error) {       
     span.innerText = 'Digite uma cidade válida';
     span2.innerText = '';
     span3.innerText = '';
     span4.innerText = '';
     span5.innerText = '';
     span6.innerText = '';
     country.innerText ='';
     iconWheather.setAttribute('src', ''); 
     hidden.style.display="none"
    }
  };
  

btn.addEventListener("click", () => {
    let city = searchInput.value.trim();
    searchInput.value = "";
    hidden.style.display="flex"
    tempoData(city)
});