async function getCity (city='Cavite'){

    const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=984ba93ae0494847b60133524220907&q=${city}&aqi=no`, {mode: 'cors'});
    const getData = await response.json();
    console.log(getData)
}

export default getCity;