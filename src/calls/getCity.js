import { State } from "../state/state";

async function getCity (city=''){

    try {
        let res =  await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d9702c7938f6ae5245906643fb2d1a51`, {mode: 'cors'});
        return await res.json();
    } catch (error) {
        console.log(error);
    }
}

export default getCity;