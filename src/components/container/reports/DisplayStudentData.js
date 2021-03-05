import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { PUSH_STUDENT_FORM } from '../../../redux/actions/types';

function DisplayStudentData(props) {
    const state = useSelector(state => state.saga);
    const userData = useSelector(state => state.userData);

    console.log(state);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({ type: PUSH_STUDENT_FORM });
    }, [])

    const renderData = () => {
        return state?.studentDataSuccess[0]?.map((student) => {
            console.log(userData)
            if (student.stdId == userData?.loggedInUser?.user?.student_id)
                return (
                    < >
                        <tr key={student.id}>
                            <td >{student.refId}</td>
                            <td >{student.collegeName}</td>
                            <td >{student.state}</td>
                            <td >{student.branch}</td>
                            <td >{student.tenthPercentage}</td>
                            <td >{student.twelthPercentage}</td>
                            <td >PENDING</td>
                        </tr>
                    </>
                )
        })
    }
    return (
        <div>
            <table class="ui celled table">
                <thead>
                    <tr><th>RefId</th>
                        <th>College Name</th>
                        <th>State</th>
                        <th>Branch</th>
                        <th>Tenth Percentage</th>
                        <th>Twelth Percentage</th>
                        <th>Status</th>

                    </tr></thead>
                <tbody>
                    {renderData()}
                </tbody>
            </table>

        </div>
    );
}

export default DisplayStudentData;