import React from 'react';
import { IconSize, SpanStyles, SpanHover } from './Styles';

class BusinessHours extends React.Component {

  // get business hours from server
  // has toggle down and up for business hours
  // write method to check current day of week and time of day to change from "Closed · Reopens at [start]" to "Open Now · [current day hours]"
  // screenshot toggle up and down icon
  // when entire div is clicked: show business hours
  // when entire div is clicked again: hide business hours
  // bold current day and time when business hours are shown

  render() {
    return (
      <div className="business-hours">
        <IconSize src="https://s3-us-west-1.amazonaws.com/zagat-screenshots/business_hours_icon.jpg"></IconSize>
        <SpanStyles>
          <SpanHover><b>Closed </b></SpanHover>
          <SpanHover> · </SpanHover>
          <SpanHover> Reopens at 5:30 PM</SpanHover>
        </SpanStyles>
      </div>
    );
  }
}

export default BusinessHours;
