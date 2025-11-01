import './DetailsCard.scss'
import clsx from 'clsx'

export default (props) => {
	const {
		className,
		quote,
		description,
	} = props

	return (
		< div
			className={clsx('hero-card', className)}
		>
			<span className="hero-card__quote">
				<h4 className="hero-card__quote-text">
					{quote}
				</h4>
			</span>
			<p className="hero-card__description">
				{description}
			</p>
		</div>
	)
}