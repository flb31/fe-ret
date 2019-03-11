
const coursesReducer = ( state = [ ], action ) => {
    switch ( action.type ) {
        case "COURSES_FETCH":
            return action.data;
        default: return state;
    }
};

export default coursesReducer;
