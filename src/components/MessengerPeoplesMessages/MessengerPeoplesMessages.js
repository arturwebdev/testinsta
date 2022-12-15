import './MessengerPeoplesMessages.css'
import IMAGES from '../../images'
import MessengerPeoplesMessage from '../MessengerPeoplesMessage/MessengerPeoplesMessage'

function MessengerPeoplesMessages() {
	const message = [
		{
			 id: '1',
			 img: IMAGES.cover1,
			 name: 'user_1',
			 active: 'Active 30m ago'
		},
		{
			 id: '2',
			 img: IMAGES.cover2,
			 name: 'user_2',
			 active: 'Active 30m ago'
		},
		{
			 id: '3',
			 img: IMAGES.cover3,
			 name: 'user_3',
			 active: 'Active 30m ago'
		},
		{
			 id: '4',
			 img: IMAGES.cover4,
			 name: 'user_4',
			 active: 'Active 30m ago'
		},
		{
			 id: '5',
			 img: IMAGES.cover5,
			 name: 'user_5',
			 active: 'Active 30m ago'
		},
		{
			 id: '6',
			 img: IMAGES.cover6,
			 name: 'user_6',
			 active: 'Active 30m ago'
		}
  ]
  return (
	 <div className='Messenger-left-col-peoples-messages'>
		{
			message.map(el => <MessengerPeoplesMessage key={el.id} img={el.img} name={el.name} active={el.active}/>)
		}
	 </div>
  )
}

export default MessengerPeoplesMessages
