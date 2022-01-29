

export const COURSES: any = [

    {
        id: 1,
        description: "place id : A11",
        available: "yes",
        category: 'etage 1 ',
    },
    {
    id: 2,
    description: "place id : A32",
    available: "yes",
    category: 'etage 1 '
},
{
    id: 3,
    description: "place id : A78",
    available: "yes",
    category: 'etage 1 '
},
{
    id: 2,
    description: "place id : A86",
    available: "yes",
    category: 'etage 1 ',

},
{
    id: 2,
    description: "place id : B2",
    available: "yes",
    category: 'etage 2 '
},
{
    id: 2,
    description: "place id : A12",
    available: "yes",
    category: 'etage 2 '
},
{
    id: 2,
    description: "place id : b60",
    available: "yes",
    category: 'etage 2 '
},
{
    id: 2,
    description: "place id : B65",
    available: "yes",
    category: 'etage 2 '
},
{
    id: 2,
    description: "place id : B102",
    available: "yes",
    category: 'etage 2 '
},
{
    id: 2,
    description: "place id : C1",
    available: "yes",
    category: 'etage 3 '
},
{
    id: 2,
    description: "place id : A2",
    available: "yes",
    category: 'etage 1 '
},
{
    id: 2,
    description: "place id : C2",
    available: "yes",
    category: 'etage 3 '
},
{
    id: 2,
    description: "place id : C3",
    available: "yes",
    category: 'etage 3 '
},
{
    id: 2,
    description: "place id : C4",
    available: "yes",
    category: 'etage 3 '
},
];



export function findCourseById(courseId:number) {
    return COURSES.find(course => course.id == courseId);
}
