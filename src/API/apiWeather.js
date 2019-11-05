import * as axios from 'axios'

export const weatherApi=(lat,lon)=>{
     return axios.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&APPID=3da124b6ff6e4dd8785e2c85c8bd99cf`)
         
}