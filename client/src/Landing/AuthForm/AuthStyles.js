import styled from 'styled-components';

import { color } from '../../shared/utils/styles';

export const AuthFormContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 450px;
    height: 500px;
    background-color: ${color.backgroundMedium};
    border: 1px solid black;
    border-radius: 15px;
`;

export const LogoContainer = styled.div`
    color: ${color.secondary};
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 10px 0;
    margin-bottom: 10px;
`;

export const Logo = styled.span`
    display: flex;
    align-items: center;
    font-size: 40px;
    height: 100%;
    margin-right: 10px;
`;

export const LoginForm = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: ${color.textDarkest};
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    background-color: ${color.secondary};
`;

export const AuthInput = styled.input`
    padding: 0.5em;
    margin: 1em;
    background: #ffffff;
    border: none;
    border-bottom: 1px solid gray;
`;

export const AuthSocialMediaHeader = styled.div`
    display: flex;
    margin: 5px 0;

    hr {
        width: 100px;
    }
`;

export const AuthSocialMediaButton = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
    background: #ffffff;
    color: ${color.primary};
    text-align: center;
    overflow: hidden;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.29);
    border-bottom: solid 3px ${color.primary};
    transition: 0.4s;
    cursor: pointer;

    &:active {
        -ms-transform: translateY(2px);
        -webkit-transform: translateY(2px);
        transform: translateY(2px);
        box-shadow: 0 0 1px rgba(0, 0, 0, 0.15);
        border-bottom: none;
    }
`;
