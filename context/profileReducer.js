import { 
    ENTER_PROFILE,
    INFO_USER,
    INFO_REPOS,
} from '../types';

export default (state, action) => {
    switch(action.type) {
        case ENTER_PROFILE:
            return {
                ...state,
                enterProfile: action.payload
            }
        case INFO_USER:
            return {
                ...state,
                profileInfo: action.payload
            }
        case INFO_REPOS:
            return {
                ...state,
                repositoriesInfo: action.payload
            }
    }
}