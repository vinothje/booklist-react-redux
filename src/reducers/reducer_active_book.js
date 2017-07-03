import { ACTIVEBOOK } from '../actions/index';

export default function(state=null, action) {
    switch(action.type) {
        case ACTIVEBOOK :
            console.log('selected book', action.payload);
            return action.payload;
        default :
            return state;
    }
    return state;
}
