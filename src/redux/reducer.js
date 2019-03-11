
const coursesReducer = ( state = [ ], action ) => {
    switch ( action.type ) {
        case "COURSES_FETCH_FEATURED":
            return action.data;
        default: return state;
    }
};

export default coursesReducer;
