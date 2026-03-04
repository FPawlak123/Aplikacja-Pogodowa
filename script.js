function CheckWeatherCity(){
let city = document.getElementById("cityId").value;


let apiUrl =`https://api.openweathermap.org/data/2.5/weather?&units=metric&lang=pl&q=${city}&`;
let apiKey = "INSERT YOUR API KEY HERE";


async function Weather(){

const response = await fetch (apiUrl + `appid=${apiKey}`);
let data = await response.json();

document.querySelectorAll(".city")[0].innerHTML = data.name;

document.querySelectorAll(".temp")[0].innerHTML = data.main.temp.toFixed(0) + "°C";
document.querySelectorAll(".value")[0].innerHTML = data.wind.speed.toFixed(0)+ " km/h";

if(data.wind.gust == null){
document.querySelectorAll(".value")[1].innerHTML ="Brak danych";
}else{
document.querySelectorAll(".value")[1].innerHTML = data.wind.gust+ " km/h";
};


document.querySelectorAll(".value")[3].innerHTML = data.weather[0].description;
document.querySelectorAll(".value")[4].innerHTML = data.main.pressure+" hPa";
document.querySelectorAll(".value")[5].innerHTML = data.main.humidity+"%";



let kierunek = data.wind.deg;

if(kierunek >= 330 && kierunek <= 20){
    document.querySelectorAll(".value")[2].innerHTML = "Północ"
    }else if(kierunek > 20 && kierunek <= 60){
    document.querySelectorAll(".value")[2].innerHTML = "Północno-Wschodni"
    }else if(kierunek > 60 && kierunek <= 110){
    document.querySelectorAll(".value")[2].innerHTML = "Wschodni"
    }else if(kierunek > 110 && kierunek <= 150){
    document.querySelectorAll(".value")[2].innerHTML = "Połódniowo-Wschodni"
    }else if(kierunek > 150 && kierunek <= 200){
    document.querySelectorAll(".value")[2].innerHTML = "Połódnie"
    }else if(kierunek > 200 && kierunek <= 240){
    document.querySelectorAll(".value")[2].innerHTML = "Połódniowo-Zachodni"
    }else if(kierunek > 240 && kierunek <= 290){
    document.querySelectorAll(".value")[2].innerHTML = "Zachodni" 
    }else if(kierunek > 290 && kierunek <= 330){
    document.querySelectorAll(".value")[2].innerHTML = "Północno-Zachodni" 
    };



console.log(data);
}
Weather();



//const bottombox = document.getElementById("bottombox");

const url = `https://api.openweathermap.org/data/2.5/forecast?&units=metric&lang=pl&q=${city}&`;

async function WeatherWeek(){


const response2 = await fetch (url + `appid=${apiKey}`);
let data2 = await response2.json();


//noc
document.getElementById("nextDay").innerHTML = data2.list[3].dt_txt.slice(0, 10);
document.querySelectorAll(".temp")[1].innerHTML = data2.list[3].main.temp.toFixed(0) + "°C";
document.querySelectorAll(".value")[6].innerHTML = data2.list[3].wind.speed.toFixed(0) + " km/h";
if(data2.list[8].wind.gust == null){
document.querySelectorAll(".value")[7].innerHTML ="Brak danych";
}else{
document.querySelectorAll(".value")[7].innerHTML = data2.list[3].wind.gust.toFixed(0) + " km/h";
};

let kierunek6 = data2.list[3].wind.deg;

if(kierunek6 >= 330 && kierunek6 <= 20){
    document.querySelectorAll(".value")[8].innerHTML = " Północ"
    }else if(kierunek6 > 20 && kierunek6 <= 60){
    document.querySelectorAll(".value")[8].innerHTML = " Północno-Wschodni"
    }else if(kierunek6 > 60 && kierunek6 <= 110){
    document.querySelectorAll(".value")[8].innerHTML = " Wschodni"
    }else if(kierunek6 > 110 && kierunek6 <= 150){
    document.querySelectorAll(".value")[8].innerHTML = " Połódniowo-Wschodni"
    }else if(kierunek6 > 150 && kierunek6 <= 200){
    document.querySelectorAll(".value")[8].innerHTML = " Połódnie"
    }else if(kierunek6 > 200 && kierunek6 <= 240){
    document.querySelectorAll(".value")[8].innerHTML = " Połódniowo-Zachodni"
    }else if(kierunek6 > 240 && kierunek6 <= 290){
    document.querySelectorAll(".value")[8].innerHTML = " Zachodni" 
    }else if(kierunek6 > 290 && kierunek6 <= 330){
    document.querySelectorAll(".value")[8].innerHTML = " Północno-Zachodni" 
    };

document.querySelectorAll(".value")[9].innerHTML = data2.list[7].weather[0].description;
document.querySelectorAll(".value")[10].innerHTML = data2.list[7].main.pressure+" hPa";
document.querySelectorAll(".value")[11].innerHTML = data2.list[7].main.humidity+"%";








//nextday
document.getElementById("nextDay").innerHTML = data2.list[7].dt_txt.slice(0, 10);
document.querySelectorAll(".temp")[2].innerHTML = data2.list[7].main.temp.toFixed(0) + "°C";
document.querySelectorAll(".value")[12].innerHTML = data2.list[7].wind.speed.toFixed(0) + " km/h";
if(data2.list[8].wind.gust == null){
document.querySelectorAll(".value")[13].innerHTML ="Brak danych";
}else{
document.querySelectorAll(".value")[13].innerHTML = data2.list[7].wind.gust.toFixed(0) + " km/h";
};

let kierunek5 = data2.list[7].wind.deg;

if(kierunek5 >= 330 && kierunek5 <= 20){
    document.querySelectorAll(".value")[14].innerHTML = " Północ"
    }else if(kierunek5 > 20 && kierunek5 <= 60){
    document.querySelectorAll(".value")[14].innerHTML = " Północno-Wschodni"
    }else if(kierunek5 > 60 && kierunek5 <= 110){
    document.querySelectorAll(".value")[14].innerHTML = " Wschodni"
    }else if(kierunek5 > 110 && kierunek5 <= 150){
    document.querySelectorAll(".value")[14].innerHTML = " Połódniowo-Wschodni"
    }else if(kierunek5 > 150 && kierunek5 <= 200){
    document.querySelectorAll(".value")[14].innerHTML = " Połódnie"
    }else if(kierunek5 > 200 && kierunek5 <= 240){
    document.querySelectorAll(".value")[14].innerHTML = " Połódniowo-Zachodni"
    }else if(kierunek5 > 240 && kierunek5 <= 290){
    document.querySelectorAll(".value")[14].innerHTML = " Zachodni" 
    }else if(kierunek5 > 290 && kierunek5 <= 330){
    document.querySelectorAll(".value")[14].innerHTML = " Północno-Zachodni" 
    };

document.querySelectorAll(".value")[15].innerHTML = data2.list[7].weather[0].description;
document.querySelectorAll(".value")[16].innerHTML = data2.list[7].main.pressure+" hPa";
document.querySelectorAll(".value")[17].innerHTML = data2.list[7].main.humidity+"%";

//next2day
document.getElementById("next2Day").innerHTML = data2.list[15].dt_txt.slice(0, 10);
document.querySelectorAll(".temp")[3].innerHTML = data2.list[15].main.temp.toFixed(0) + "°C";
document.querySelectorAll(".value")[18].innerHTML = data2.list[15].wind.speed.toFixed(0) + " km/h";
if(data2.list[8].wind.gust == null){
document.querySelectorAll(".value")[19].innerHTML ="Brak danych";
}else{
document.querySelectorAll(".value")[19].innerHTML = data2.list[15].wind.gust.toFixed(0) + " km/h";
};
document.querySelectorAll(".value")[21].innerHTML = data2.list[15].weather[0].description;
document.querySelectorAll(".value")[22].innerHTML = data2.list[15].main.pressure+" hPa";
document.querySelectorAll(".value")[23].innerHTML = data2.list[15].main.humidity+"%";

let kierunek = data2.list[15].wind.deg;

if(kierunek >= 330 && kierunek <= 20){
    document.querySelectorAll(".value")[20].innerHTML = "Północ"
    }else if(kierunek > 20 && kierunek <= 60){
    document.querySelectorAll(".value")[20].innerHTML = "Północno-Wschodni"
    }else if(kierunek > 60 && kierunek <= 110){
    document.querySelectorAll(".value")[20].innerHTML = "Wschodni"
    }else if(kierunek > 110 && kierunek <= 150){
    document.querySelectorAll(".value")[20].innerHTML = "Połódniowo-Wschodni"
    }else if(kierunek > 150 && kierunek <= 200){
    document.querySelectorAll(".value")[20].innerHTML = "Połódnie"
    }else if(kierunek > 200 && kierunek <= 240){
    document.querySelectorAll(".value")[20].innerHTML = "Połódniowo-Zachodni"
    }else if(kierunek > 240 && kierunek <= 290){
    document.querySelectorAll(".value")[20].innerHTML = "Zachodni" 
    }else if(kierunek > 290 && kierunek <= 330){
    document.querySelectorAll(".value")[20].innerHTML = "Północno-Zachodni" 
    };


//next3day
document.getElementById("next3Day").innerHTML = data2.list[23].dt_txt.slice(0, 10);
document.querySelectorAll(".temp")[4].innerHTML = data2.list[23].main.temp.toFixed(0) + "°C";
document.querySelectorAll(".value")[24].innerHTML = data2.list[23].wind.speed.toFixed(0) + " km/h";
if(data2.list[8].wind.gust == null){
document.querySelectorAll(".value")[25].innerHTML ="Brak danych";
}else{
document.querySelectorAll(".value")[25].innerHTML = data2.list[23].wind.gust.toFixed(0) + " km/h";
};

let kierunek2 = data2.list[23].wind.deg;

if(kierunek2 >= 330 && kierunek2 <= 20){
    document.querySelectorAll(".value")[26].innerHTML = "Północ"
    }else if(kierunek2 > 20 && kierunek2 <= 60){
    document.querySelectorAll(".value")[26].innerHTML = "Północno-Wschodni"
    }else if(kierunek2 > 60 && kierunek2 <= 110){
    document.querySelectorAll(".value")[26].innerHTML = "Wschodni"
    }else if(kierunek2 > 110 && kierunek2 <= 150){
    document.querySelectorAll(".value")[26].innerHTML = "Połódniowo-Wschodni"
    }else if(kierunek2 > 150 && kierunek2 <= 200){
    document.querySelectorAll(".value")[26].innerHTML = "Połódnie"
    }else if(kierunek2 > 200 && kierunek2 <= 240){
    document.querySelectorAll(".value")[26].innerHTML = "Połódniowo-Zachodni"
    }else if(kierunek2 > 240 && kierunek2 <= 290){
    document.querySelectorAll(".value")[26].innerHTML = "Zachodni" 
    }else if(kierunek2 > 290 && kierunek2 <= 330){
    document.querySelectorAll(".value")[26].innerHTML = "Północno-Zachodni" 
    };

document.querySelectorAll(".value")[27].innerHTML = data2.list[23].weather[0].description;
document.querySelectorAll(".value")[28].innerHTML = data2.list[23].main.pressure+" hPa";
document.querySelectorAll(".value")[29].innerHTML = data2.list[23].main.humidity+"%";

//next4day
document.getElementById("next4Day").innerHTML = data2.list[31].dt_txt.slice(0, 10);
document.querySelectorAll(".temp")[5].innerHTML = data2.list[31].main.temp.toFixed(0) + "°C";
document.querySelectorAll(".value")[30].innerHTML = data2.list[31].wind.speed.toFixed(0) + " km/h";
if(data2.list[8].wind.gust == null){
document.querySelectorAll(".value")[31].innerHTML ="Brak danych";
}else{
document.querySelectorAll(".value")[31].innerHTML = data2.list[24].wind.gust.toFixed(0) + " km/h";
};

let kierunek3 = data2.list[31].wind.deg;

if(kierunek2 >= 330 && kierunek2 <= 20){
    document.querySelectorAll(".value")[32].innerHTML = "Północ"
    }else if(kierunek3 > 20 && kierunek3 <= 60){
    document.querySelectorAll(".value")[32].innerHTML = "Północno-Wschodni"
    }else if(kierunek3 > 60 && kierunek3 <= 110){
    document.querySelectorAll(".value")[32].innerHTML = "Wschodni"
    }else if(kierunek3 > 110 && kierunek3 <= 150){
    document.querySelectorAll(".value")[32].innerHTML = "Połódniowo-Wschodni"
    }else if(kierunek3 > 150 && kierunek3 <= 200){
    document.querySelectorAll(".value")[32].innerHTML = "Połódnie"
    }else if(kierunek3 > 200 && kierunek3 <= 240){
    document.querySelectorAll(".value")[32].innerHTML = "Połódniowo-Zachodni"
    }else if(kierunek3 > 240 && kierunek3 <= 290){
    document.querySelectorAll(".value")[32].innerHTML = "Zachodni" 
    }else if(kierunek3 > 290 && kierunek3 <= 330){
    document.querySelectorAll(".value")[32].innerHTML = "Północno-Zachodni" 
    };

document.querySelectorAll(".value")[33].innerHTML = data2.list[31].weather[0].description;
document.querySelectorAll(".value")[34].innerHTML = data2.list[31].main.pressure+" hPa";
document.querySelectorAll(".value")[35].innerHTML = data2.list[31].main.humidity+"%";


//next5day
document.getElementById("next5Day").innerHTML = data2.list[39].dt_txt.slice(0, 10);
document.querySelectorAll(".temp")[6].innerHTML = data2.list[39].main.temp.toFixed(0) + "°C";
document.querySelectorAll(".value")[36].innerHTML = data2.list[39].wind.speed.toFixed(0) + " km/h";
if(data2.list[8].wind.gust == null){
document.querySelectorAll(".value")[37].innerHTML ="Brak danych";
}else{
document.querySelectorAll(".value")[37].innerHTML = data2.list[39].wind.gust.toFixed(0) + " km/h";
};

let kierunek4 = data2.list[39].wind.deg;

if(kierunek4 >= 330 && kierunek4 <= 20){
    document.querySelectorAll(".value")[38].innerHTML = "Północ"
    }else if(kierunek4 > 20 && kierunek4 <= 60){
    document.querySelectorAll(".value")[38].innerHTML = "Północno-Wschodni"
    }else if(kierunek4 > 60 && kierunek4 <= 110){
    document.querySelectorAll(".value")[38].innerHTML = "Wschodni"
    }else if(kierunek4 > 110 && kierunek4 <= 150){
    document.querySelectorAll(".value")[38].innerHTML = "Połódniowo-Wschodni"
    }else if(kierunek4 > 150 && kierunek4 <= 200){
    document.querySelectorAll(".value")[38].innerHTML = "Połódnie"
    }else if(kierunek4 > 200 && kierunek4 <= 240){
    document.querySelectorAll(".value")[38].innerHTML = "Połódniowo-Zachodni"
    }else if(kierunek4 > 240 && kierunek4 <= 290){
    document.querySelectorAll(".value")[38].innerHTML = "Zachodni" 
    }else if(kierunek4 > 290 && kierunek4 <= 330){
    document.querySelectorAll(".value")[38].innerHTML = "Północno-Zachodni" 
    };

document.querySelectorAll(".value")[39].innerHTML = data2.list[39].weather[0].description;
document.querySelectorAll(".value")[40].innerHTML = data2.list[39].main.pressure+" hPa";
document.querySelectorAll(".value")[41].innerHTML = data2.list[39].main.humidity+"%";



console.log(data2);
}
WeatherWeek()
}
