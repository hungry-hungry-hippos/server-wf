import React from 'react';

import { IconSize, SpanStyles, SpanHover, LinkStyle, LinkHover } from './Styles';

const GetDirections = () => (
    <div className="business-getDirections">
      <IconSize src="https://s3-us-west-1.amazonaws.com/zagat-screenshots/getDirections_icon.jpg"></IconSize>
      <SpanStyles>
        <SpanHover>
          <LinkStyle href="https://www.google.com/maps/dir//37.7638272,-122.4740864/@37.7638466,-122.4763098,17z" target="_blank">
            <LinkHover>Get Directions</LinkHover>
          </LinkStyle>
        </SpanHover>
      </SpanStyles>
    </div>
);

export default GetDirections;
