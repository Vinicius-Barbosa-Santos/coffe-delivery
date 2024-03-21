import styled from "styled-components";
import { SectionBaseStyle } from "../../styles";

export const SelectedContainer = styled.div`
    display: flex;
    gap: 0.75rem;
    width: 40rem;
    flex-direction: column;
` 

export const DetailsContainer = styled(SectionBaseStyle)`
    display: flex;
    border-radius: 6px 44px 6px 44px;
    flex-direction: column;
`

export const ConfirmationSectionContainer = styled.section`
    display: flex;
    flex-direction: column;
    gap: 0.8rem;

    > div {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
`