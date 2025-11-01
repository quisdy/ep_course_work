import './Header.scss'
import clsx from 'clsx'
import Logo from '@/components/Logo'
import BurgerButton from '@/components/BurgerButton'

export default (props) => {
	const { url } = props

	const menuItems = [
		{ label: 'О нас', href: '/' },
		{ label: 'Коллекции', href: '/' },
		{ label: 'Контакты', href: '/' },
	]

	const menuItemsProfile = [
		{ label: 'Профиль', href: '/' },
		{ label: 'Корзина', href: '/' },
	]

	return (
		<header className="header" data-js-overlay-menu="">
			<div className="header__inner container">
				<nav className="header__menu" data-js-overlay-menu-overlay="">
					<ul className="header__menu-list">
						{menuItems.map(({ label, href }) => (
							<li className="header__menu-item">
								<a
									className={clsx(
										'header__menu-link',
										href === url && 'is-active'
									)}
									href={href}
								>
									{label}
								</a>
							</li>
						))}
					</ul>
				</nav>
				<Logo className="header__logo" />
				<ul className="header__menu-profile">
					{menuItemsProfile.map(({ label, href }) => (
						<li className="header__menu-item">
							<a
								className={clsx(
									'header__menu-link',
									href === url && 'is-active'
								)}
								href={href}
							>
								{label}
							</a>
						</li>
					))}
				</ul>
				<BurgerButton className="header__burger-button visible-mobile"
					extraAttrs={{
						'data-js-overlay-menu-burger-button': '',
					}}
				/>
			</div>
		</header>
	)
}