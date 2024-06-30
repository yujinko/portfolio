import styled from "styled-components";

export const FooterContainer = styled.div`
    width: 100%;
    bottom: 0;
    left: 0;
    z-index: 10;
    transition: all 0.3s ease-in;
    background-color: ${({ bgColor }) => bgColor};
`

export const End = styled.div`
    font-size: 1.5rem;
    font-weight: ${({ theme }) => theme.fonts.weight.heavy};
    color: black;
    margin-left: 11rem;
`       