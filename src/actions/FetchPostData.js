import {FETCH_BUTTON_CLICKED} from './types'

export const fetchPostdata = () => {
    return {
    type:FETCH_BUTTON_CLICKED,
    payload:[
        {
            userid:1,
            id:1,
            title:"A"
        },
        {
            userid:2,
            id:2,
            title:"B"
        },
        {
            userid:3,
            id:3,
            title:"C"
        }
    ]
}
}