import React from 'react';
import { Field, reduxForm } from 'redux-form'
import style from '../HotelsPage/HotelPage.module.css'


export let SearchPageForm = (props) => {
   const { handleSubmit } = props
   return (<div >
      <form onSubmit={handleSubmit} className={style.formWrap}>
         <div>
            <Field placeholder={"Выбрать город"} component={"input"} type={"text"} name={"searchCity"}></Field>
         </div>
         <div className={style.dateWrap}>
            <div><label>Дата заезда</label>
            <div><Field component={"input"} type={"date"} name={"startDate"}></Field></div>
            </div>
            <div>
            <label>Дата выезда</label>
            <div><Field component={"input"} type={"date"} name={"endDate"}></Field></div>
            </div>
            
         </div>
         <button className={style.btn} type="submit"> Поиск</button>
      </form>
   </div>
   )
}
export const SrchPRedForm = reduxForm({ form: 'searchP' })(SearchPageForm)