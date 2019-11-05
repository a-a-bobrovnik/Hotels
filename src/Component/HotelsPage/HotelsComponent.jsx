import React from 'react';
import { Hotel } from './Hotel';
import { connect } from 'react-redux'
import { SrchPRedForm } from '../SearchPage/SearchPageForm';
import { getAPI } from '../../Redux/MainPageReducer'


class HotelsComponent extends React.Component {
  pushLoginfnct = (value) => {
    this.props.getAPI(value.searchCity, value.startDate, value.endDate)
  }
  render() {
    return <div>
      <h1>Поиск отеля</h1>
      <SrchPRedForm onSubmit={this.pushLoginfnct} />
      {this.props.hotels.cityArr.map((a) =>
        <div>
          <Hotel weather={this.props.hotels.weatherArr} hotelName={a.name} id={a.id} />
        </div>
      )}
    </div>
  }
}
let mapStateToProps = (state) => {
  return {
    hotels: state.MainPage
  }
}
export default connect(mapStateToProps, { getAPI })(HotelsComponent)

