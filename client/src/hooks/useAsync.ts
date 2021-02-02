import { useReducer, useEffect } from 'react';

interface IState {
  isLoading: boolean;
  data?: any;
  error?: any;
}

interface IAction {
  type: 'LOADING' | 'SUCCESS' | 'FAILURE';
  data?: any;
  error?: any;
}

function reducer(state: IState, action: IAction) {
  switch (action.type) {
    case 'LOADING':
      return {
        isLoading: true,
        data: null,
        error: null,
      };
    case 'SUCCESS':
      return {
        isLoading: false,
        data: action.data,
        error: null,
      };
    case 'FAILURE':
      return {
        isLoading: false,
        data: null,
        error: action.error,
      };
    default:
      throw new Error('Unhandled action type');
  }
}

function useAsync(
  callback: any,
  deps = [],
  init = false
): [IState, () => Promise<void>] {
  const [state, dispatch] = useReducer(reducer, {
    isLoading: false,
    data: null,
    error: null,
  });

  const fetchData = async () => {
    dispatch({ type: 'LOADING' });

    try {
      const data = await callback();
      dispatch({ type: 'SUCCESS', data });
    } catch (err) {
      dispatch({ type: 'FAILURE', error: err });
    }
  };

  useEffect(() => {
    if (!init) return;
    fetchData();
  }, deps);

  return [state, fetchData];
}

export default useAsync;
