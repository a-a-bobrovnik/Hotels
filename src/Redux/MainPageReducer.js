import { hotelsApi } from '../API/apiHotels'
import { weatherApi } from '../API/apiWeather'


let initialState = {
    cityArr: [],
    weatherArr: []
};

export let MainPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SEARCH-HOTELS': {
            let stateCopy = { ...state }
            stateCopy.cityArr=[]
            action.hotels.map(a => {
                stateCopy.cityArr.push({ name: a.hotelName, id: a.hotelId })
            })
            return stateCopy
        }
        case 'GET-WEATHER': {
            let stateCopy = { ...state }
            stateCopy.weatherArr=[]
            action.weather.map(a => {
                if (Date.parse(a.dt_txt) >= Date.parse(action.start) - 7200000 &&
                    Date.parse(a.dt_txt) <= Date.parse(action.end) + 86400000
                ) {
                    stateCopy.weatherArr.push({ dt: a.dt, dt_txt: a.dt_txt, temp: a.main.temp }
                    )
                }
            })
            return stateCopy
        }
        default: return state
    }
}
export const searchHotels = (hotels) => {
    return { type: 'SEARCH-HOTELS', hotels }
}
export const getWeather = (weather, start, end) => {
    return { type: 'GET-WEATHER', weather, start, end }
}

export const getAPI = (city, start, end) => (dispatch) => {
    hotelsApi(city, start, end)
        .then(response => {
            let geo = response.data[0].location.geo
            dispatch(searchHotels(response.data))
            weatherApi(geo.lat, geo.lon)
                .then(response => {
                    dispatch(getWeather(response.data.list, start, end))
        })
    }) 
}

