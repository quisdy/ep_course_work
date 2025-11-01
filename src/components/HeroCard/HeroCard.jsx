import './HeroCard.scss'
import clsx from 'clsx'
import DetailsCard from '@/components/DetailsCard'

export default (props) => {
	const {
		className,
		title,
		detailsCard,
	} = props


	return (
		<div
			className={clsx('hero-card', className)}
		>
			<h4 className="hero-card__title">
				{title}
			</h4>
			<DetailsCard
				className="hero-card__details-card"
				{...detailsCard}
			/>
		</div>
	)
}