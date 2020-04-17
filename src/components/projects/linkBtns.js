import React from 'react';
import styled from 'styled-components';
import { ExternalLink } from 'styled-icons/feather';
import gPlay from '../../img/gplay.png';
import aStore from '../../img/astore.png';

const A = styled.a`

`
const I = styled.img`
  width: 170px;
  height: auto;
`
const WebWrap = styled.a`
  width: 140px;
  padding: 7px;
  height: 41px;
  margin: 15px;
  background: ${props => props.theme.darker};
  border: solid 1px ${props => props.theme.font};
  border-radius: 7px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  box-sizing: border-box;
  color: ${props => props.theme.font};
  text-decoration: none;
`

const GPlay = ({ href }) => (
  <A href={href} target="_blank">
    <I src={gPlay} />
  </A>
);

const AStore = ({ href }) => (
  <A href={href} target="_blank">
    <I src={aStore} />
  </A>
);

const WebLink = ({ href }) => (
  <WebWrap href={href} target="_blank">
    <ExternalLink size="20" /> Webseite
  </WebWrap>
)

export { GPlay, AStore, WebLink };
