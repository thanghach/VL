const defaultState = {
  loading: false,
  error: ''
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
                num1: action.data[1].num1,
                num2: action.data[1].num2,
                num3: action.data[1].num3,
                num4: action.data[1].num4,
                num5: action.data[1].num5,
                num6: action.data[1].num6

            };

        case 'RESULT_FETCH_ERROR':
            return {
                ...state, loading: false, error: 'Loading error!!!'
            };
            
        default:
            return state;
    }
};
