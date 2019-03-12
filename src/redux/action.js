import { fetchCoursesFeatured as fetchFeatured, fetchCourses, searchCourses } from "../api";

export const COURSES_FEATURED_FETCH = "[FETCH] COURSES FEATURED";
export const COURSES_FEATURED_SUCCESS = "[SUCCESS] COURSES FEATURED";
export const COURSES_FEATURED_ERROR = "[ERROR] COURSES FEATURED";

export const COURSES_NORMAL_FETCH = "[FETCH] COURSES NORMAL";
export const COURSES_NORMAL_SUCCESS = "[SUCCESS] COURSES SUCCESS";
export const COURSES_NORMAL_ERROR = "[ERROR] COURSES NORMAL";

export const COURSES_SEARCH_FETCH = "[FETCH] COURSES SEARCH";
export const COURSES_SEARCH_SUCCESS = "[SUCCESS] COURSES SEARCH";
export const COURSES_SEARCH_ERROR = "[ERROR] COURSES SEARCH";

const storeData = ( type, data ) => ( {
    type,
    payload: data,
} );

export const fetchFeaturedCourses = ( ) => ( dispatch ) => {
    dispatch( storeData( COURSES_FEATURED_FETCH, {} ) );

    fetchFeatured( )
    .then( res => dispatch( storeData( COURSES_FEATURED_SUCCESS, res ) ) )
    .catch( error => dispatch( storeData( COURSES_FEATURED_ERROR, error ) ) );
}

export const fetchNormalCourses = ( ) => ( dispatch ) => {
    dispatch( storeData( COURSES_NORMAL_FETCH, {} ) );

    fetchCourses( 10, 1 )
    .then( res => dispatch( storeData( COURSES_NORMAL_SUCCESS, res.items ) ) )
    .catch( error => dispatch( storeData( COURSES_NORMAL_ERROR, error ) ) );
}

export const fetchSearchCourses = ( query ) => ( dispatch ) => {

    dispatch( storeData( COURSES_SEARCH_FETCH, {} ) );

    fetchCourses( 10, 1, query )
    .then( res => dispatch( storeData( COURSES_SEARCH_SUCCESS, res.items ) ) )
    .catch( error => dispatch( storeData( COURSES_SEARCH_ERROR, error ) ) );
}