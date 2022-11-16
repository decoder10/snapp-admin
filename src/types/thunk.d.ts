/* eslint-disable @typescript-eslint/no-explicit-any */
type DispFn<state = RootState> = import('redux-thunk').ThunkDispatch<state, null, import('redux').AnyAction>;
