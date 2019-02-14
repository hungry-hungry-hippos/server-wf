import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Calibre-Regular';
    src: url('/fonts/CalibreWeb-Regular.woff2) format('woff2');
    font-weight: normal;
    font-style: normal;
  },
  body {
    background: ${props => (props.theme.background)};
  }
`;

export const SideBar = styled.div`
  display: table;
  color: #101820;
  background: white;
  font-family: 'Calibre-Regular', sans-serif;
  font-size: 13px;
  letter-spacing: .013em;
  padding: 26px 32px 20px;
  cursor: pointer;
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

export const LinkStyle = styled.a`
  text-decoration: none;
  color: inherit;
`;

export const LinkHover = styled.a`
  ${LinkStyle}:hover & {
    color: #b70038;
  }
`;
