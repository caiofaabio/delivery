import { useContext } from "react";

import { SnackContext } from "../context/SnackContext";

export function useSnack(){
  const contextData = useContext(SnackContext)

  return contextData
}
