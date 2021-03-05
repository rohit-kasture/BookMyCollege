import React from "react";
import { useSelector } from "react-redux";
import api from "../../api/api";
import history from "../../history/history";

export default function Form(props) {
    let state = useSelector(state => state.userData);
    let details = props?.location?.state?.detail;
    const user = state?.loggedInUser?.user;
    const getDepartments = () => {
        return details?.departments?.map((dept, index) => {
            return (
                <option value={dept} key={index}>{dept}</option>
            )
        })
    }
    const getData = () => {
        let maximum = Math.ceil(1);
        let minimum = Math.floor(100000);
        let randomnumber = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
        let obj = {};
        const tenthMarks = document.getElementById("tenth").value;
        const twelthMarks = document.getElementById("twelth").value;
        const branch = document.getElementById("dept").value;
        obj = {
            "stdId": user?.student_id, "refId": randomnumber, "StudentName": user.fullname, "branch": branch
            , "Contact": user?.number, "tenthPercentage": tenthMarks, "twelthPercentage": twelthMarks, "collegeName": details?.name,
            "state": details?.state
        }
        return obj;
    }

    const handleSubmit = () => {
        history.push('/studentdetails')
        const data = getData();
        const postData = async () => {
            const response = await api.post('/student_data', data);
            alert("Student Alotted with a Reference id " + response.data.refId)
        };
        postData();
    }
    return (
        <>
            <div className="container" style={{ height: '200px', width: '700px', alignContent: 'center', margin: '0 auto' }}>
                <form className="ui form" onSubmit={handleSubmit}>
                    <div className="field">
                        <label>College Name</label>
                        <input type="text" name="college" value={details?.name} disabled />
                    </div>
                    <div className="field">
                        <label>State</label>
                        <input type="text" name="state" value={details?.state} disabled />
                    </div>
                    <div className="field">
                        <label>Choose Stream</label>
                        <select className="ui search dropdown" id="dept">
                            {getDepartments()}
                        </select>
                    </div>
                    <div className="field">
                        <label>10th Percentage</label>
                        <input type="number" name="tenth" placeholder="Percentage in class Ten" id="tenth" />
                    </div>
                    <div className="field">
                        <label>12th Percentage</label>
                        <input type="number" name="twelth" placeholder="Percentage in class Twelth" id="twelth" />
                    </div>
                    <button className="ui button" type="submit">Submit</button>
                </form>
            </div>
        </>
    );
}
