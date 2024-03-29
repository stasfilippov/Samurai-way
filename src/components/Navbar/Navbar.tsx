import { NavLink } from 'react-router-dom'
import st from './Navbar.module.css'
import {NavbarPropsType} from './NavbarContainer';


export const Navbar = (props: NavbarPropsType) => {
	const itemsNav = props.menuDate.map(el => (
		<div className={st.item} key={el.id}>
			<NavLink activeClassName={st.active} to={el.slug}>
				{el.menuName}
			</NavLink>
		</div>
	))

	const friendsList = props.friendsData.map(el => {
		let path = 'ava' + el.id
		return (
			<div key={el.id} className={st.friendsListItem}>
				<img className={st.friendsImg} src={require('../../images/'+ path + '.png')} alt='ava' />
				<li>{el.nameFriend}</li>
			</div>
		)
	})

	return (
		<div className={st.navWrapper}>
			<nav className={st.nav}>{itemsNav}</nav>
			<div className={st.friendsNav}>
				<div className={st.friendsNavTitle}>Friends</div>
				<ul className={st.friendsList}>{friendsList}</ul>
			</div>
		</div>
	)
}

export default Navbar
