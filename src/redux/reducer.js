import {
    COURSES_FEATURED_FETCH,
    COURSES_FEATURED_SUCCESS,
    COURSES_FEATURED_ERROR
} from './action';

const coursesReducer = ( state = [ ], action ) => {
    
    switch ( action.type ) {
        case COURSES_FEATURED_FETCH:
            return Object.assign({}, state, {
                loading: true,
                error: false,
            });

        case COURSES_FEATURED_SUCCESS:
            return Object.assign(action.payload, state, {
                loading: false,
                error: false,
            });
        case COURSES_FEATURED_ERROR:
            const newState = Object.assign({}, state, {
                errorMessage: action.payload,
                loading: false,
                error: true,
            });
            return newState;
        default:
            return state;
    }
};

export default coursesReducer;
