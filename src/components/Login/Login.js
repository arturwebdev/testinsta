import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { fetchUsers } from '../../store/slices/users/usersAPI'
import { selectUsers, toggleCurrentUser } from '../../store/slices/users/usersSlice'

function Login() {
    const formRef = useRef(null)
    const navigate = useNavigate()
    const { dataUsers, currentUser } = useSelector(selectUsers)

    const dispatch = useDispatch()

    useEffect(() => {
        if (!dataUsers.length) {
            dispatch(fetchUsers())
        }
    }, [])
 
    useEffect(() => {
        if (currentUser) {
            navigate('/')
        }
    }, [currentUser])
 
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(toggleCurrentUser({
            login: formRef.current[0].value,
            password: formRef.current[1].value
        }));

        formRef.current.reset()
    }



  return (
    <div style={{textAlign: 'center', padding: '50px'}}>
        <form ref={formRef} onSubmit={handleSubmit}>
            <input defaultValue={'bret'} type="text" placeholder='email' /><br/><br/>
            <input defaultValue={'gwenborough'} type="text" placeholder='password' /><br/><br/>
            <button>Log In</button>
        </form>
    </div>
  )
}

export default Login