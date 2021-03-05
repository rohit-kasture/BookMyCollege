import React, { useEffect, useState } from 'react';
import Dropdown from "../container/dropdown";
import { useSelector } from 'react-redux';
import './css/collegeCard.css';
import history from '../../history/history';

const dispatchCollegeDetails = (val, myCollege) => {
    console.log(val, myCollege)
    let collegeData = myCollege?.filter((myCollege) => myCollege?.state === val?.name)
    console.log(collegeData);
    // getColleges(collegeData)
}
const getColleges = (myCollege) => {
    return myCollege ? myCollege?.map((college) => {
        console.log(college)
        return (
            <>
                <div className="container pb-4" key={college?.id} style={{ height: '200px', width: '700px', alignContent: 'center', margin: '0 auto' }}>
                    <div className="row">
                        <div className="col-lg-3">
                            <div className="horizontal-card">
                                <img style={{ width: '400px', height: '300px' }} src={college?.src} />
                                <div className="horizontal-card-body">
                                    <h4 className="card-title">{college?.name}</h4>
                                </div>
                                <div className="horizontal-card-footer">
                                    <span>{college?.state}</span>
                                    <button className="ui button primary"
                                        style={{ marginLeft: '300px' }} onMouseDown={() => submitCollege(college)} >Apply</button>
                                </div>
                            </div></div> </div>
                </div>
            </>
        )
    })
        :
        <div class="ui loading form">
        </div>

}
function Home(props) {
    const state = useSelector(state => state.saga);
    console.log(state)

    //console.log(process.env.REACT_APP_BASE_URL)

    useEffect(() => {
    }, [])
    const [value, setValue] = useState(null);
    let myCollege = state?.myCollegesSuccess[0];
    return (<><div className="container" >
        <div style={{ width: 500 }} onclick={dispatchCollegeDetails(value, myCollege)}>
            <Dropdown options={state?.myStatesSuccess[0] ? state?.myStatesSuccess[0] : []} prompt='Select State...' value={value}
                id='id' label='name' onChange={val => setValue(val)} />
        </div>

    </div>
        <div>
            {getColleges(myCollege)}
        </div></>
    );
}

const submitCollege = (college) => {
    console.log(college)

    history.push({
        pathname: '/form',
        state: { detail: college }
    })

}
export default Home;