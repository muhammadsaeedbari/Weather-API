// This checks if the page is being reloaded
if (performance.navigation.type === performance.navigation.TYPE_RELOAD) {
    // If user reloads, force them back to the welcome page
    if (!window.location.href.includes("index.html")) {
        window.location.href = "index.html";
    }
}



function checkWeather() {
    // When you click 'Enter' on Page 1, go to Page 2
    window.location.href = "index2.html"; 
}


const apiKey = "25ea7f642f5b33b31581d330c9f4cece";
const searchBtn = document.querySelector(".btn-search");
const cityInput = document.querySelector(".inp_city");
const tempField = document.querySelector(".temp");
const humidityField = document.querySelector(".humid");
const airField = document.querySelector(".air");
const weatherImg = document.querySelector(".data img");
const iclick =document.getElementById("enter")





if (searchBtn) {
// Button click event
searchBtn.addEventListener("click", () => {
    const city = cityInput.value.trim();
    if (city === "") {
        alert("Please enter a city name");
        return;
    }
  

    getWeather(city);
});
}

// Main function
async function getWeather(city) {
    try {
    
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

        const response = await fetch(url);
        console.log(response)
        const data = await response.json();
        console.log(data)
        

        // console.log("Weather Condition:", data.weather[0].main); 
        // console.log("Entire Data Object:", data);

        if (data.cod !== 200) {
            alert("City not found");
            return;
        }
        weatherImg.style.display = "block"; 

        // Step 2: Update UI
        tempField.value = data.main.temp + " °C";
        humidityField.value = data.main.humidity + " %";
        airField.value = (data.wind.speed * 3.6).toFixed(1) + " km/h";

const iconCode = data.weather[0].icon;
weatherImg.src = `https://openweathermap.org/img/wn/${iconCode}@4x.png`;
weatherImg.style.display = "block"; 



        // Weather icon
//         const iconCode = data.weather[0].icon;
      
        
    
// const weatherId = data.weather[0].id;
// const weatherMain = data.weather[0].main;




// // 1. Thunderstorm (Group 2xx)
// if (weatherId >= 200 && weatherId < 300) {
//      weatherImg.src = "images/thunder.png";
    
// } 
// // 2. Drizzle (Group 3xx)
// else if (weatherId >= 300 && weatherId < 600) {
//      weatherImg.src = "images/rain.png";
    
// } 

// // 3. Snow (Group 6xx)
// else if (weatherId >= 600 && weatherId < 700) {
//      weatherImg.src = "images/snow-fall.png";
    
// } 
// // 4. Atmosphere (Mist, Haze, Fog - Group 7xx)
// else if (weatherId >= 700 && weatherId < 800) {
//      weatherImg.src = "images/MistHaze.png";
    
// } 
// // 5. Clear (ID 800)
// else if (weatherId === 800) {
//      weatherImg.src = "images/sun.png";
    
// } 
// // 6. Clouds (Scattered, Broken, Overcast - Group 80x)
// else if (weatherId > 800 && weatherId < 900) {
//     weatherImg.src = "images/cloud.png"; // This will catch your ID 802!

// } 
// else {
//      weatherImg.src = "images/cloud.png"; // General fallback
    

// }


        
    } catch (error) {
        console.log(error);
        alert("Something went wrong");
    }
}
