var data = document.getElementById("data"); 
var forecast = document.getElementById("forecast"); 
var key = "295ee0223815263bc56e57f96f9c228f"; 
var url = "http://api.openweathermap.org/data/2.5/weather?"; 
var url2 = "https://api.openweathermap.org/data/2.5/forecast?"; 
var unit = "metric";
var date = "2024-04-22";
var x = 0;

function getData(country) { 
	const readyToSentData = (url + "q=" + country 
		+ "&appid=" + key + "&units=" + unit); 
	fetch(readyToSentData) 
		.then(response => response.json()) 
		.then(data => { 
			console.log(data); 
			fetchData(data) 
		}) 
		.catch(error =>{
		document.getElementById("data").innerHTML = "Cannot load the data. Please try again later"
			
		})
} 

function getForecast(country) { 
	const readyToSentForecast = (url2 + "q=" + country
		+ "&appid=" + key + "&units=" + unit); 
	fetch(readyToSentForecast)
		.then(response => response.json()) 
		.then(forecast => { 
			console.log(forecast); 
			fetchForecast(forecast)
		})
		.catch(error =>{
		document.getElementById("forecast").innerHTML = "Cannot load forecast. Please try again later"
			
		})
}
function fetchForecast(forecast) { 
for(x; x < 5; x++){
		
	const icon2 = "http://openweathermap.org/img/wn/"
		+ forecast.list[x].weather[0].icon + ".png"

	document.getElementById("forecast").innerHTML +=
			forecast.list[x].dt_txt+ "" +
			"<img src=" + icon2 + ">"+
			Math.round(forecast.list[x].main.temp_max) +
			"/"+Math.round(forecast.list[x].main.temp_min) + "℃ "+
			forecast.list[x].weather[0].description+"<br>"
} 
}
 
function fetchData(data) { 
	const icon = "http://openweathermap.org/img/wn/"
		+ data.weather[0].icon + "@2x.png"

	document.getElementById("data").innerHTML = 
		"<b>The current weather of your location: "
			+ "</b><br> <img src=" + icon + "><br>"
			+ "<b>Country :</b>" + data.sys.country 
			+ "<br><b>Local Area Name :</b>"
			+ data.name + "<br><b>Temp. :</b>"
			+ data.main.temp + "℃"
			+ "<br><b>Conditions :</b>"
			+ data.weather[0].description + "<br>"
	
} 

window.onload = function(){
	getData('Malaysia');
	getForecast('Malaysia');
}