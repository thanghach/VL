const defaultState = {
  loading: false,
  error: '',
  num1: 0,
  num2: 0
};

export default (state = defaultState, action) => {
    switch (action.type) {
        case 'NEW_RESULT_FETCH_LOADING':
            
            return {
                ...state,
                loading: true
            };

        case 'NEW_RESULT_FETCH_SUCESSFULL':
            return {
                ...state,
                loading: false,
                num1: '10',
                num2: action.data[1].id
            };

        case 'RESULT_FETCH_ERROR':
            return {
                ...state, loading: false, error: 'Loading error!!!'
            };
            
        default:
            return state;
    }
};
