import './MessengerChatForm.css'
import IMAGES from '../../images'
import { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { newMess, selectUsers } from '../../store/slices/users/usersSlice'

function MessengerChatForm() {
	const formRef = useRef(null)
	const dispatch = useDispatch()
	const navigate = useNavigate()
	const { currentUser } = useSelector(selectUsers)
	
	useEffect(() => {
		if (!currentUser) {
			navigate('/login')
		}
	}, [currentUser])

	const handleSubmit = (e) => {
		e.preventDefault()
		const mess = formRef.current[0].value

		dispatch(newMess({
			mess,
			userId: currentUser.id
		}))

		formRef.current.reset()
	}
	return (
	 <div className='Chat-input'>
		<form ref={formRef} onSubmit={handleSubmit}>
			<input type='text' placeholder='Message...'/>

		</form>
		<img src={IMAGES.like} alt=''/>
	 </div>
  )
}

export default MessengerChatForm
