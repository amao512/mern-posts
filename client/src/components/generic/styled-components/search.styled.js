import styled from 'styled-components'

export const Search = styled.input`
    width: 100%;
    padding: 12px 15px;
    outline: none;
    font-size: 18px;
    background-color: #fff;
    border: 1px solid rgba(0,0,0,.15);
    margin-bottom: 5px;
    border-radius: 4px;

    @media (max-width: 768px){
        border-radius: 0;
        border: none;
    }
`