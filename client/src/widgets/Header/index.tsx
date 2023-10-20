import Logo from '../../shared/assets/logo.png'

const Header = () => {
	return (
		<header className='header'>
			<div className="container">
				<div className="header__content">
					<img src={Logo} alt="logo" className="header__logo"/>
				</div>
			</div>
		</header>
	)
}

export default Header