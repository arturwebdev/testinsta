import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, useNavigate } from 'react-router-dom'
import IMAGES from '../../images'
import { logOut, selectUsers } from '../../store/slices/users/usersSlice'
import Posts from '../Posts/Posts'
import Stories from '../Stories/Stories'
import Suggestions from '../Suggestions/Suggestions'

function Main() {
    const {currentUser} = useSelector(selectUsers)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    useEffect(() => {
        if (!currentUser) {
            navigate('/login')
        }
    }, [currentUser])
  return (
    <section className="main">
        <div className="wrapper">
            <div className="left-col">
                <Stories/>
                <Posts />
            </div>
            <div className="right-col">
                <NavLink className="profile-card">
                    <div className="profile-pic">
                          <img src={`https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png`} alt=""/>
                    </div>
                    <div>
                        <p className="username">{currentUser?.username}</p>
                        <p className="sub-text">{currentUser?.name}</p>
                    </div>
                    <button onClick={() => dispatch(logOut())} className="action-btn">switch</button>
                </NavLink>
            </div>
        </div>
    </section>
  )
}

export default Main