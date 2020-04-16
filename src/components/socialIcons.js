import React from 'react';
import styled from 'styled-components';
import { 
  InstagramWithCircle, GithubWithCircle, LinkedinWithCircle, MailWithCircle
} from 'styled-icons/entypo-social';

const Wrapper = styled.div`
  width: 100%;
  max-width: 250px;
  display: flex;
  justify-content: space-around;
  margin: 30px auto;
  color: ${props => props.theme.font};
`
const A = styled.a`
  color: ${props => props.theme.font};
  transition: all 0.5s ease-in-out;
  &:hover {
    color: ${props => props.theme.accent};
  }
`

const SocialIcons = (props) => {
  return (
    <Wrapper>
      <A href="https://github.com/schlaxel" target="_blank" title="GitHub">
        <GithubWithCircle size="45" className={props.animate && 'animated fadeInUp delay-04s'} />
      </A>
      <A href="https://www.linkedin.com/in/alex-kiefer" target="_blank" title="LinkedIn">
        <LinkedinWithCircle size="45" className={props.animate && 'animated fadeInUp delay-06s'} />
      </A>
      <A href="mailto:alex@kiefer.media" title="E-Mail">
        <MailWithCircle size="45" className={props.animate && 'animated fadeInUp delay-08s'} />
      </A>
      <A href="https://instagram.com/obergari" target="_blank" title="Instagram">
        <InstagramWithCircle size="45" className={props.animate && 'animated fadeInUp delay-1s'} />
      </A>
    </Wrapper>
  )
}

export default SocialIcons;
