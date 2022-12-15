import { useSelector } from 'react-redux'
import { selectUsers } from '../../store/slices/users/usersSlice'
import './MessengerChat.css'

function MessengerChat() {
  const {currentUser} = useSelector(selectUsers)
  return (
	 <div className='MessengerChat'>
    {
      currentUser?.messages.map(mess => (
        <h1 key={mess.id} className={mess.user}>{mess.user}: {mess.text}</h1>
      ))
    }
	 </div>
  )
}

export default MessengerChat
