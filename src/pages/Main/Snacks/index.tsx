import { ReactNode } from "react";
import CurrencyFormat from "../../../utils";
import SkeletonSnack from "./SkeletonSnack";
import { Container } from "./style"
import { FiPlus } from 'react-icons/fi';
import { SnackData } from "../../../interfaces/SnackData";

interface SnacksProps {
  snacks: SnackData[]
}

export default function Snacks({ snacks }: SnacksProps){
  return(
    <Container>
      {!snacks.length ? (
        [1,2,3,4].map((n) => (
          <SkeletonSnack key={n} />
        ))
      ) : (
            snacks.map((snack) => (
              <div key={snack.id} className="snack">
                <h2>{snack.name}</h2>
                <img src={snack.image} alt={snack.name} />
                <p>{snack.description}</p>
                <div>
                  <strong>{CurrencyFormat(snack.price)}</strong>
                  <button type="button">
                    <FiPlus />
                  </button>
                </div>
              </div>
            ))
          )
    }
    </Container>
  )
}
