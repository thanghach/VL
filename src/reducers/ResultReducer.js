const defaultState = {
  loading: false,
  error: '',
  data: [
    { id: '1', name: 'teddy' },
    { id: '2', name: 'john' },
    { id: '3', name: 'mike' },
    { id: '4', name: 'david' }

  ]
};

export default (state = defaultState, action) => {
    switch (action.type) {

        case 'RESULT_FETCH_LOADING':
            return {
                ...state, loading: true
            };

        case 'RESULT_FETCH_SUCESSFULL':
            return {
                ...state, loading: false
            };

        case 'RESULT_FETCH_ERROR':
            return {
                ...state, loading: false, error: 'Loading error!!!'
            };
            
        default:
            return state;
    }
};
