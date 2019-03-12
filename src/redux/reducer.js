import {
    COURSES_FEATURED_FETCH,
    COURSES_FEATURED_SUCCESS,
    COURSES_FEATURED_ERROR,
    COURSES_NORMAL_FETCH,
    COURSES_NORMAL_SUCCESS,
    COURSES_NORMAL_ERROR,
} from './action';

const coursesReducer = ( state = [ ], action ) => {

    switch ( action.type ) {
        case COURSES_FEATURED_FETCH:
            return Object.assign({}, state, {
                loading: true,
                error: false,
            });

        case COURSES_FEATURED_SUCCESS:
            // Structure array
            const courses = action.payload.map( item => {
                return Object.assign({}, item, {
                    course: item.coursePublication.course
                });
            });
            
            return Object.assign(courses, state, {
                loading: false,
                error: false,
            });
        case COURSES_FEATURED_ERROR:
            return Object.assign({}, state, {
                errorMessage: action.payload,
                loading: false,
                error: true,
            });
        
        case COURSES_NORMAL_FETCH:
            return Object.assign({}, state, {
                loading: true,
                error: false,
            });

        case COURSES_NORMAL_SUCCESS:
            return Object.assign(action.payload, state, {
                loading: false,
                error: false,
            });
        case COURSES_NORMAL_ERROR:
            return Object.assign({}, state, {
                errorMessage: action.payload,
                loading: false,
                error: true,
            });
        default:
            return state;
    }
};

export default coursesReducer;
