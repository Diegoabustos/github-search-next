import React, { useReducer } from 'react';
import profileContext from './profileContext';
import profileReducer from './profileReducer';
import {
    ENTER_PROFILE,
    INFO_USER,
    INFO_REPOS,
} from '../types';



const ProfileState = (props) => {
    const initialState = {
        enterProfile: '',
        profileInfo: '',
        repositoriesInfo: '',
    };

    // Dispatch to execute the actions
    const [state, dispatch] = useReducer(profileReducer, initialState);

    // funtions series of the search bar
    const enterProfileFn = (e) => {
        dispatch({
            type: ENTER_PROFILE,
            payload: e,
        })
    }

    const profileInfoFn = (response) => {
        dispatch({
            type: INFO_USER,
            payload: response
        })
    }
    const repositoriesInfoFn = (responseRepos) => {
        dispatch({
            type: INFO_REPOS,
            payload: responseRepos
        })
    }

    return (
        <profileContext.Provider
            value={{
                enterProfile: state.enterProfile,
                repositoriesInfo: state.repositoriesInfo,
                profileInfo: state.profileInfo,
                enterProfileFn,
                profileInfoFn,
                repositoriesInfoFn,
            }}
        >
            {props.children}
        </profileContext.Provider>
    );
};

export default ProfileState;