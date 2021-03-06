import React, { useEffect, useState } from 'react';
import Dropdown from "../container/dropdown";
import { useDispatch, useSelector } from 'react-redux';
import './css/collegeCard.css';
import history from '../../history/history';

function Home(props) {
    const dispatch = useDispatch();
    const [myStates, setmyStates] = useState(null);
    const state = useSelector(state => state.saga);
    let myCollege = state?.myCollegesSuccess[0];

    useEffect(() => {

        dispatch(searchCollegeFilter(myStates, myCollege));

    }, [myStates])

    const renderCollegeList = (college) => {
        return (<div className="container pb-4" key={college?.id} style={{ height: '200px', width: '700px', alignContent: 'center', margin: '0 auto' }}>
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
        </div>)
    }
    const getColleges = () => {
        console.log(myStates, myCollege)

        return myCollege ? myCollege?.map((college) => {
            if (!myStates?.name)
                return <>{renderCollegeList(college)} </>

            if (myStates?.name === college?.state)
                return <>
                    {renderCollegeList(college)}
                </>

        })
            :
            <div className="ui loading form">
            </div>

    }
    return (<>
        <div className="container" >
            <div style={{ width: 500 }}>
                <Dropdown options={state?.myStatesSuccess[0] ? state?.myStatesSuccess[0] : []} prompt='Select State...' value={myStates}
                    id='id' label='name' onChange={myStates => setmyStates(myStates)} />
            </div>
        </div>
        <div>
            {getColleges()}
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