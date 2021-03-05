import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TOGGLE_LOGIN_LOGOUT, REGISTER_USER_OR_ADMIN } from '../../../redux/actions/types'
import history  from '../../../history/history'

function Logout(props) {
    const dispatch = useDispatch();
    const state = useSelector(state=>state.data);
    useEffect(() => {
        dispatch({ type: TOGGLE_LOGIN_LOGOUT, payload: true });
        document.getElementById("user").innerText = ``;
        dispatch({ type: REGISTER_USER_OR_ADMIN, payload: false });
        console.log(state)
        history.push('/login');
    }, []);

    return (
        <>
            LOGOUT
        </>
    );
}

export default Logout;