import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, auto));
  gap: 1.75rem;


  @media (max-width: 500px){
    grid-template-columns: 1fr;
  }

  .snack{
    position: relative;
    background: ${({ theme }) => theme.colors.black};
    padding: 1.75rem 1.5rem;
    border-radius: 4px;

    h2{
      margin-bottom: .75rem;
      font-weight: 700;
      font-size: 1.5rem;
      text-align: center;
    }

    img{
      object-fit: cover;
      min-width: 100%;
      height: 11.25rem;
      border-radius: 4px;
      margin-bottom: .375rem;
      transition: all 300ms;
      opacity: .9;

      &:hover{
        opacity: 1;
        filter: drop-shadow(3px 10px 10px black);
      }
    }

    p {
      font-size: .875rem;
    }

    div {
      margin-top: .875rem;
      display: flex;
      justify-content: space-between;
      align-items: center;

      strong {
        font-size: 2rem;
        font-weight: 500;
      }

      button {
        background: ${({ theme }) => theme.colors.red};
        width: 3rem;
        height: 3rem;
        border-radius: 50%;
        border: none;

        display: flex;
        align-items: center;
        justify-content: center;

        transition: all 300ms;

        svg {
          stroke: ${({ theme }) => theme.colors.white};
          width: 1.5rem;
          height: 1.5rem;
        }

        &:hover{
          opacity: .6;
        }
      }
    }

  }

`
