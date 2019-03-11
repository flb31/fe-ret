import { fetchCourses as fetch } from "../api";

const storeData = ( data ) => ( {
    type: "COURSES_FETCH",
    data,
} );

export const fetchCourses = ( ) => ( dispatch ) => 
    fetch( ).then( res => dispatch( storeData( res ) ) );
