import React, { useState } from 'react';
import styled from 'styled-components';
import { Times } from 'styled-icons/fa-solid';
import { navigate } from 'gatsby';

const Wrapper = styled.div`
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
    cursor: pointer;
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
const Transition = styled.div`
    bottom: 0;
    left: 0;
    right: 0;
    top: 100%;
    background: ${props => props.theme.font};
    transition: all .5s ease-in-out;
    position: fixed;
    z-index: 999999;
    ${props => props.isActive && `
        background: ${props.theme.bgColor2};
        top: 0;
    `}
`

const BackBtn = () => {
    const [isActive, setIsActive] = useState(false);
    const btnClicked = () => {
        setIsActive(true);
        setTimeout(() => {
            navigate('/');
        }, 500) 
    }
    return (  
        <div>
            <Wrapper className="animated delay-1s fadeInUp" onClick={() => btnClicked()}>
                <Button>
                    <Ico size="40" className='animated delay-2s zoomIn' />
                </Button>
            </Wrapper>
            <Transition isActive={isActive} />
        </div>
    );
};

export default BackBtn;
