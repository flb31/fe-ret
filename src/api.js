import fetch from "isomorphic-fetch";

export function fetchCourses( ) {
    return fetch( "https://api.cebroker.com/v2/featuredCoursesProfession?profession=36" )
        .then( res => res.json( ) )
        .then( courses => courses.map( course => {
            course.featured = true;
            return course;
        }));
}
