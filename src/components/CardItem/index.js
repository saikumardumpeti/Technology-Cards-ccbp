// Write your code here.
import './index.css'

const CardsList = props => {
  const {cardsList} = props
  const {title, description, imgUrl, className} = cardsList
  return (
    <li className={`${className} technology-cards`}>
      <div className="container">
        <h1>{title}</h1>
        <p>{description}</p>
        <img src={imgUrl} alt={title} className="image" />
      </div>
    </li>
  )
}

export default CardsList
