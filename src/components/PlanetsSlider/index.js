import Slider from 'react-slick'

import PlanetItem from '../PlanetItem'

import './index.css'

const PlanetsSlider = props => {
  const {planetsList} = props

  return (
    <div className="planets-app-container" data-testid="planets">
      <h1 className="heading">PLANETS</h1>
      <Slider>
        {planetsList.map(eachPlant => (
          <PlanetItem key={eachPlant.id} planetDetails={eachPlant} />
        ))}
      </Slider>
    </div>
  )
}

export default PlanetsSlider
