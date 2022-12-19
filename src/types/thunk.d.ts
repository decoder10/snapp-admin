type DispatchFn<state = RootState> = import('redux-thunk').ThunkDispatch<state, null, import('redux').AnyAction>;
