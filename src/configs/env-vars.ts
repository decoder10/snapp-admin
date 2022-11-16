const { env } = process;

// export const API_ROOT =
//   env.REACT_APP_ENV === 'development' ? env.REACT_APP_API_DEV : env.REACT_APP_ENV === 'staging' ? env.REACT_APP_API_STAGE : env.REACT_APP_API_PROD;
export const API_ROOT = env.REACT_APP_API_ROOT;
