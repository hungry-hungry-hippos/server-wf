import styled from 'styled-components';

export const SideBar = styled.div`
  display: table;
  color: #101820;
  background: white;
  font: 16px/20px 'Calibre-Regular';
  letter-spacing: .013em;
  padding: 26px 32px 20px;
  cursor: pointer;
  // hover: #b70038;
  max-width: 959px;
  max-height: 600px;
  width: 404px;
  height: 271px;
  // vertical-align: top;
`;

export const IconSize = styled.img`
  height: 30px;
  width: 30px;
  vertical-align: middle;
  margin: 4px 24px 4px 0;
`;

export const SpanStyles = styled.span`
  height: auto;
  width: auto;
  text-align: center;
  padding: 6px 0;
  box-sizing: border-box;
`;

export const SpanHover = styled.span`
  ${SpanStyles}:hover & {
    color: #b70038;
  }
`;

export const MapSize = styled.img`
  width: 404px;
  height: 271px;
  padding-top: 10px;
`;
