import styled from 'styled-components';

import { color } from '../../utils/styles';

export const StyledButton = styled.button`
    padding: 0.5em;
    margin: 0.5em;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    transition: all 0.1s;
    color: ${color.secondary};
    background-color: ${color.buttonPrimary};
`;
