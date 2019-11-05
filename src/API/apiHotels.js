import * as axios from 'axios'

export const hotelsApi=(city="kyiv",start,end)=>{
     return axios.get(`http://engine.hotellook.com/api/v2/cache.json?location=${city}&currency=uah&checkIn=${start}&checkOut=${end}&limit=10`)
         
} 
export const hotelsPhotoApi=(id)=>{
         return (`https://photo.hotellook.com/image_v2/limit/h${id}_3/800/520.auto`)
     }

