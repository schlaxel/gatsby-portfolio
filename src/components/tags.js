import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  margin: auto;
  max-width: 400px;
`

const Tag = styled.span`
  background: ${props => props.theme.darker};
  padding: 8px;
  border-radius: 7px;
  margin: 3px;
  color: ${props => props.theme.font};
  display: inline-block;
`

const Tags = ({tagString}) => {
  return (
    <Wrapper>
      {tagString.split(',').map(tag => (
        <Tag>{tag}</Tag>
      ))}
    </Wrapper>
  )
};

export default Tags;
