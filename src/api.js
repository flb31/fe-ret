import fetch from "isomorphic-fetch";

const BASE_URL = "https://api.cebroker.com/v2/";

export function fetchCoursesFeatured( ) {
    return fetch( `${BASE_URL}/featuredCoursesProfession?profession=36` )
        .then( res => res.json( ) )
        .then( courses => courses.map( course => {
            course.featured = true;
            return course;
        }));
}

export function fetchCourses(limit, page, query = "") {
    return fetch( `${BASE_URL}search/courses/?expand=totalItems&pageIndex=${page}&pageSize=${limit}&sortField=RELEVANCE&profession=36&courseType=CD_ANYTIME&sortShufflingSeed=27&courseName=${query}` )
        .then( res => res.json( ) );
}
