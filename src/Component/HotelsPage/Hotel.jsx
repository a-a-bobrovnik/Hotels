import React from 'react';
import { hotelsPhotoApi } from '../../API/apiHotels';
import style from './HotelPage.module.css'

export let Hotel = (props) => {
    return (
        <div className={style.HotelWrap}>
            <div className={style.HotelInfo}>
                <div className={style.HotelName}>
                    {props.hotelName}
                </div>
                <div className={style.weather}>
                    {props.weather.map(a => <div className={style.tempWrap}>
                        <div>{a.dt_txt.substring(5, 10)}<br />
                            {a.dt_txt.substring(11, 16)}
                        </div>
                        <div className={style.temp}>{Math.round(a.temp)}&deg;C
                        </div>
                    </div>
                    )}</div>
            </div>
            <div className={style.HotelImg}>
                <img src={hotelsPhotoApi(props.id)} alt="" />
            </div>
        </div>
    )
}