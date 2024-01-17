import styled from "styled-components";

export const Container = styled.footer`
  padding-top: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;


  button{
    background: ${({theme}) => theme.colors.red};
    width: 100%;
    max-width: 16.5rem;
    min-height: 4rem;

    border: none;
    border-radius: 8px;

    font-weight: 700;
    font-size: 1.25rem;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.white};

    transition: background .3s;

    &:hover {
      opacity: .8;
    }
  }

  span {
    font-weight: 500;
    text-transform: uppercase;

    strong {
      margin-left: .75rem;
      font-weight: 700;
      font-size: 2.5rem;
    }
  }

  @media (max-width: 540px){
    flex-direction: column-reverse;
    align-items: flex-start;
    justify-content: flex-start;

    button{
      max-width: 100%;
    }

    span {
      max-width: 100%;
      width: 100%;
      text-align: end;

      strong {
        font-size: 2.75rem;
      }
    }
  }

`
