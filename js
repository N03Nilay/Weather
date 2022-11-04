    const city = document.getElementById('input');
        const searchbtn = document.getElementById('search');
        const temp = document.getElementById('temperature');
        const hum = document.getElementById('humidity');
        const pres = document.getElementById('pressure');
        const wind = document.getElementById('wind');


        search.addEventListener("click", () => {
            if (city.value == "") {
                alert("please enter a valid state")
            }
            else {
                fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city.value + "&appid=90bf7be9e254846890831e3f355c777a")
                    .then((res) => res.json())
                    .then((data) => {
                        console.log(data);
                        if (data.cod == "404") {
                            document.getElementById('error').innerHTML = `Please try with different city`;
                        }
                        else {


                            const temperature = (data.main.temp - 273.15).toFixed(2);

                            const pressure = (data.main.pressure * 100 * 0.0002953).toFixed(2);


                            temp.innerHTML = `Temperature => ${temperature}°C`;
                            hum.innerHTML = `Humidity => ${data.main.humidity} %`;
                            pres.innerHTML = `Pressure => ${pressure} "Hg`;
                            wind.innerHTML = `Wind Speed => ${data.wind.speed} km/h`;
                        }

                    }).catch((error) => {
                        console.log(error);
                    })
            }
            temp.innerHTML = ``;
            hum.innerHTML = ``;
            pres.innerHTML = ``;
            wind.innerHTML = ``;
            document.getElementById('error').innerHTML = ``;

        })


