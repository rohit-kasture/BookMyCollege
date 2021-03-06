import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import icon from '../../shared/student_counselling_icon.png'

const Header = (props) => {
    const state = useSelector(state => state.userData);

    return (
        <div className="ui blue inverted segment headerComponent">
            <div className="ui green inverted pointing menu">

                <img className="logoIMG" src={icon} alt="" style={{ height: '50px', width: '104px' }} ></img>
                {!state.toggleLoginLogout &&
                  <>
                  <Link to="/home" id="student" className="item">Home</Link>
                  <Link to="/studentdetails" id="student" className="item">Councelling Details</Link>
                  </>
                }
                <div className="item" style={{ float: 'right', textAlign: 'right', marginLeft: 'auto' }}>
                    <p id="user" style={{ margin: 'auto' }}></p>
                    {state.toggleLoginLogout ?

                        <Link to="/login" className="ui primary" > SignIn/Register </Link>
                        :
                        <Link to="/logout" id="logout" className="ui primary" style={{ color: 'blue', paddingLeft: 13 }}> Logout </Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default Header;