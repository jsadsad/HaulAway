import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import Navbar from './navbar';

const mapStateToProps = (state) => {
    return {
        loggedIn: state.session.isAuthenticated,
        userName: state.session.user.firstName,
    };
};

export default connect(mapStateToProps, { logout })(Navbar)



