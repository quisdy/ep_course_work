import './Hero.scss'
import HeroCard from '@/components/HeroCard'

export default () => {
	return (
		<section className="hero container" aria-labelledby="hero-title">

			<div className="hero__slider swiper"
				data-js-slider={JSON.stringify({
					spaceBetween: 20,
					slidePerView: 1.0625,
					centeredSlides: true,
					slidesPerView: "left",
				})}>

				<ul className="hero__slider-list swiper-wrapper">
					<li className="hero__slider-item swiper-slide">
						<HeroCard
							title='(1 Этап Вдохновения)'
							detailsCard={{
								quote: '"Рождение загадки в старинных манускриптах"',
								description: 'Мы погружаемся в мир легенд и литературы, ища те самые истории, которые станут основой для новых коллекций.',
							}}
						/>
					</li>
					<li className="hero__slider-item swiper-slide">
						<HeroCard
							title='(1 Этап Вдохновения)'
							detailsCard={{
								quote: '"Рождение загадки в старинных манускриптах"',
								description: 'Мы погружаемся в мир легенд и литературы, ища те самые истории, которые станут основой для новых коллекций.',
							}}
						/>
					</li>
					<li className="hero__slider-item swiper-slide">
						<HeroCard
							title='(1 Этап Вдохновения)'
							detailsCard={{
								quote: '"Рождение загадки в старинных манускриптах"',
								description: 'Мы погружаемся в мир легенд и литературы, ища те самые истории, которые станут основой для новых коллекций.',
							}}
						/>
					</li>
				</ul>

			</div>

		</section>
	)
}
