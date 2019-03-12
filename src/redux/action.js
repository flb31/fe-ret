import { fetchCoursesFeatured as fetchFeatured, fetchCourses } from "../api";

export const COURSES_FEATURED_FETCH = "[FETCH] COURSES FEATURED";
export const COURSES_FEATURED_SUCCESS = "[SUCCESS] COURSES FEATURED";
export const COURSES_FEATURED_ERROR = "[ERROR] COURSES FEATURED";

export const COURSES_NORMAL_FETCH = "[FETCH] COURSES NORMAL";
export const COURSES_NORMAL_SUCCESS = "[SUCCESS] COURSES SUCCESS";
export const COURSES_NORMAL_ERROR = "[ERROR] COURSES NORMAL";

const storeData = ( type, data ) => ( {
    type,
    payload: data,
} );

export const fetchFeaturedCourses = ( ) => ( dispatch ) => {
    fetchFeatured( )
    .then( res => dispatch( storeData( COURSES_FEATURED_SUCCESS, res ) ) )
    .catch( error => dispatch( storeData( COURSES_FEATURED_ERROR, error ) ) );
}

export const fetchNormalCourses = ( ) => ( dispatch ) => {
    fetchCourses( 10, 1 )
    .then( res => dispatch( storeData( COURSES_NORMAL_SUCCESS, res.items ) ) )
    .catch( error => dispatch( storeData( COURSES_NORMAL_ERROR, error ) ) );
}
