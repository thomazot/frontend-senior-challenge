import styled from 'styled-components'

export const Wrapper = styled.div`
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-between;
    min-height: 100%;

    main {
        padding: 20px 0;
        margin-bottom: auto;
        margin-left: auto;
        margin-right: auto;
        width: 100%;
        max-width: calc(100vw - 30px);
    }
`

export const Title = styled.h1`
    font-size: 30px;
    font-weight: bold;
    display: block;
    text-align: center;
    padding: 30px 0;
`