import styled from "styled-components";

export const MainBody = styled.div`
    background-color: white;
`

export const Container = styled.div`
    width: 90%;
    max-width: 1280px;
    margin: auto;
`

export const PaddingContainer = styled.div`
    padding-top: ${({ top }) => top};
    padding-bottom: ${({ bottom }) => bottom};
    padding-left: ${({ left }) => left};
    padding-right: ${({ right}) => right};
`

export const FlexContainer = styled.div`
    display: flex;
    justify-content: ${({ justify }) => justify};
    align-items: ${({ align }) => align};
    gap: ${({ gap }) => gap};
    flex-direction: ${({ direction }) => direction};

    & > div {
        flex: ${({ fullWidthChild }) => fullWidthChild && 1};
    }
`

export const Heading = styled(PaddingContainer)`
    color: ${({ theme }) => theme.colors.black};
    text-align: ${({ align }) => align};
    font-size: ${({ size }) => {
        switch(size){
            case 'h1':
                return '5.5rem';

            case 'h2':
                return '4rem';

            case 'h3':
                return '3rem';

            case 'h4':
                return '2.2rem';

            case 'h5':
                return '2rem';
        
            default:
                return;
        }
    }}
`

export const BlueText = styled.span`
    color: ${({ theme }) => theme.colors.secondary};
`

export const ParaText = styled(PaddingContainer)`
    color: ${({ theme }) => theme.colors.para_text_color};
    line-height: 2rem;
`


export const IconContainer = styled.div`
    font-size: ${({ size }) => size};
    cursor: pointer;
    color: ${({ color, theme}) => {
        switch(color){
            case 'white':
                return theme.colors.white;

            case 'blue':
                return theme.colors.secondary;
            
                default: 
                    return;
        }
    }}
`