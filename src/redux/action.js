import { fetchCourses as fetchFatured } from "../api";

const storeData = ( data ) => ( {
    type: "COURSES_FETCH_FEATURED",
    data,
} );

export const fetchCoursesFeatured = ( ) => ( dispatch ) => 
    fetchFatured( ).then( res => dispatch( storeData( res ) ) );
