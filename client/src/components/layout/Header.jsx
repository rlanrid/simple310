import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import firebase from '../../firebase.js'

const Header = () => {
    const user = useSelector((state) => state.user);
    const navigate = useNavigate();

    const LogOutHandler = () => {
        firebase.auth().signOut();
        navigate("/")
    }

    return (
        <header id='header' role='banner'>
            <div className='left'>
                <h1 className='logo'>
                    <Link to="/">Rlan's ai</Link>
                </h1>
                <nav className='nav'>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/list">List</Link>
                        </li>
                        <li>
                            <Link to="/write">Write</Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className='right'>
                {user.accessToken === "" ? (
                    <ul>
                        <li>
                            <Link to="/login">로그인</Link>
                        </li>
                        <li>
                            <Link to="/Join">회원가입</Link>
                        </li>
                    </ul>
                ) : (
                    <ul>
                        <li>
                            {user.displayName}님 반갑습니다.
                        </li>
                        <li>
                            <Link onClick={() => {
                                LogOutHandler();
                            }}>로그아웃</Link>
                        </li>
                    </ul>
                )}
            </div>
        </header >
    )
}

export default Header