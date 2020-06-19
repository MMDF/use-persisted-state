declare module "use-persisted-state" {
  import { Dispatch, SetStateAction } from 'react'

  export default function createPersistedState(name: string): <S>(initialState: S | (() => S)) => [S, Dispatch<SetStateAction<S>>]
}
