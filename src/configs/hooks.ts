import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

export const useAppDispatch = () => useDispatch<DispFn>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
