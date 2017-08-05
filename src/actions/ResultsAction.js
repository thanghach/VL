import axios from 'axios';

export const ResultFetch = () => (dispatch) => {
        // axios.get('http://storeapp.site/vietlott/api')
        dispatch(actionPending());
        axios.get('https://www.reddit.com/r/reactjs.json')
            .then((response) => {
                dispatch(actionSuccess(response.data.data.children));
            })
            .catch((err) => {
                dispatch(actionFail(err));
            });
    }
            // fetch('https://jsonplaceholder.typicode.com/posts')
            // .then((response) => {
            //     return response.json();
            // })
            // .then((responseJson) => {
            //     console.log(responseJson);
            //     return {
            //         type: 'RESULT_FETCH_SUCESSFULL',
            //         payload: responseJson[0].id
            //     };
            // })
            // .catch((error) => {
            //     //console.log(error);
            // });
;

export const actionPending = () => ({
    type: 'RESULT_FETCH_LOADING'
});

export const actionSuccess = (data) => ({
    type: 'RESULT_FETCH_SUCESSFULL',
    payload: data
});

export const actionFail = (error) => ({
    type: 'RESULT_FETCH_FAIL',
    error
});
