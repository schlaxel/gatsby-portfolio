import React from 'react';
import styled from 'styled-components';
import { Times } from 'styled-icons/fa-solid';
import { Link } from 'gatsby';

const Wrapper = styled(Link)`
    width: 80px;
    height: 80px;
    position: fixed;
    right: 20px;
    bottom: 20px; 
    background: ${props => props.theme.darker};
    border-radius: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
`
const Button = styled.div`
    transition: all .3s ease-in;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    &:hover {
        transform: rotate(180deg);
    }
`
const Ico = styled(Times)`
    color: ${props => props.theme.font};
    
`

const BackBtn = () => {
    return (  
        <Wrapper to="/" className="animated delay-1s fadeInUp">
            <Button>
                <Ico size="40" className='animated delay-2s zoomIn' />
            </Button>     
        </Wrapper>
    );
};

export default BackBtn;
