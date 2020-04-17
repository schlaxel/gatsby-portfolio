import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  margin: auto;
  ${props => props.noMaxWidth ? 
    null :
    `max-width: 400px`
  }
`

const Tag = styled.span`
  background: ${props => props.theme.darker};
  padding: 8px;
  border-radius: 7px;
  margin: 3px;
  color: ${props => props.theme.font};
  display: inline-block;
  ${props => props.contrast && `
    background: ${props.theme.bgColor2};
  `}
`

const Tags = ({ tagString, contrast, noMaxWidth }) => {
  return (
    <Wrapper noMaxWidth={noMaxWidth}>
      {tagString.split(',').map(tag => (
        <Tag contrast={contrast}>{tag}</Tag>
      ))}
    </Wrapper>
  )
};

export default Tags;
