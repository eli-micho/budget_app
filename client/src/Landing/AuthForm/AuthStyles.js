import styled from 'styled-components';

import { color } from '../../shared/utils/styles';

export const AuthFormContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 450px;
    height: 500px;
    background-color: ${color.backgroundMedium};
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.4);
    border-radius: 15px;
`;

export const LogoContainer = styled.div`
    color: ${color.secondary};
    display: flex;
    flex: 2;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 5px 0;
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
    padding: 5px 0;
    display: flex;
    flex: 8;
    flex-direction: column;
    align-items: center;
    color: ${color.textDarkest};
    border-radius: 15px;
    background-color: ${color.secondary};
`;

export const AuthLoginField = styled.div`
    display: flex;
    align-items: center;
    margin: 0.5em;
    border-bottom: 1px solid gray;
`;

export const AuthInput = styled.input`
    display: inline-flex;
    padding: 0.5em;
    margin: 0.5em;
    background: transparent;
    border: none;
`;

export const AuthSocialMediaHeader = styled.div`
    width: 100%;
    display: flex;
    margin: 5px 0;
    padding-bottom: 10px;

    hr {
        width: 30%;
    }
`;

export const AuthSocialMediaContainer = styled.div`
    width: 100%;
    padding-bottom: 5px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
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
