import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 17px;
`;

export const ListItemContainer = styled.div`
    margin: 10px;
    border-bottom: 1px solid #ccc;
    padding: 15px;
    background-color: white;
    border-radius: 10px;
`;

export const StyledLink = styled(Link)`
    text-decoration: none;
    color: inherit;
`

export const ListItemTitle = styled.div`
    font-size: 20px;
    font-weight: 600;
    margin: 10px;
`;

export const ListItemContent = styled.div`
    font-size: 14px;
    font-weight: 400;
    color: gray;
    margin: 10px;
`;
