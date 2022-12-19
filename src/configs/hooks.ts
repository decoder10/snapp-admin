import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

export const useAppDispatch = () => useDispatch<DispatchFn>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
