import { NavLink } from 'react-router-dom'
import { DialogsPageType, DialogType, MessageType } from '../../redux/state'
import { DialogItem } from './DialogItem/DialogItem'
import classes from './Dialogs.module.css'
import { Message } from './Message/Message'

type DialogsPropsType = {
	state: DialogsPageType
}

export const Dialogs = (props: DialogsPropsType) => {
	const mappingDialogs = props.state.dialogsData.map((d: DialogType) => (
		<DialogItem key={d.id} name={d.name} id={d.id} />
	))

	const mappingMessages = props.state.messagesData.map((m: MessageType) => (
		<Message key={m.id} message={m.message} id={m.id} />
	))

	return (
		<div className={classes.dialogs_content}>
			<div className={classes.dialogs}>
				<NavLink to={'/dialogs'} className={classes.title}>Messaging</NavLink>
				<div>{mappingDialogs}</div>
			</div>
			<div className={classes.messages}>{mappingMessages}</div>
		</div>
	)
}
