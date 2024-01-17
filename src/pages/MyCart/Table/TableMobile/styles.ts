import styled from "styled-components";

const Container = styled.div`

  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  position: relative;

  > button {
    background-color: red;
    border: none;
    padding: 0.5rem;
    border-radius: 50%;
    position: absolute;
    width: 5rem;
    height: 5rem;
    font-weight: bold;
    font-size: .875rem;
    color: white;
    z-index: 2;

    right: 0;
    top: -16px;
  }

  .order-item {
    background: ${({ theme }) => theme.colors.black};
    padding: 1.75rem 1.5rem;
    border-radius: 4px;

    display: grid;
    grid-template-columns: 250px 1fr;
    gap: 1.5rem;

    > div:first-child {
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 4px;
        transition: all 400ms;

        &:hover {
          transform: scale(1.01);
        }
      }
    }

    > div:last-child {
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      h4 {
        margin-bottom: .5rem;
        font-weight: 400;
        font-size: 1.75rem;
      }

      > span {
        font-weight: 700;
        font-size: 2rem;
      }

      div {
        display: flex;
        align-items: center;
        gap: 2rem;
        margin: .875rem 0px;

        div {
          flex: 0, 0, 0;
          display: flex;
          align-items: center;
          gap: .5rem;

          button {
            background: none;
            flex: 0;
            border: none;

            display: flex;
            align-items: center;
            justify-content: center;

            img {
              width: 2rem;
            }
          }

          span {
            display: block;
            background: ${({ theme }) => theme.colors.white};
            padding: .125rem .75rem;
            border-radius: 4px;

            font-weight: 500;
            font-size: 1.75rem;
            color: ${({ theme }) => theme.colors.black}
          }
        }

        button {
          flex-shrink: 0;
          background: none;
          border: none;

          display: flex;
          align-items: center;
          justify-content: center;

          svg {
            fill: ${({ theme }) => theme.colors.yellow};
            width: 2rem;
            height: 2rem;
          }
        }
      }

      h5 {
        span {
          display: block;
          font-size: 1.75rem;
          font-weight: 400;
        }


        font-weight: 700;
        font-size: 2.5rem;
      }

    }

    @media (max-width: 540px){
      grid-template-columns: 1fr;

      padding: 1rem;

      > div:first-child {
        height: 10rem;
      }

      > div:last-child {
        div {
          gap: 2rem;
        }

        h5 {
          span {
            font-size: 1.5rem;
          }
          font-size: 2.25rem;
        }
      }
    }
  }
`


export  { Container }
