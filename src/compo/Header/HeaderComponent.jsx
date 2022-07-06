import {connect} from "react-redux";
import Header from "./Header";
import {useEffect} from "react";
import {loginMeThunk, logoutThunk, setAuthUserData} from "../../redux/authReducer";


const HeaderContainer = (props) => {
    useEffect( () => {
        props.loginThunk()
    }, [props]);

    return <Header {...props}/>
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
});

export default connect(mapStateToProps, {loginThunk: loginMeThunk, logoutThunk})(HeaderContainer);