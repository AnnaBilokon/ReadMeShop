// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faHeart } from '@fortawesome/free-solid-svg-icons'
import './TabButton.css'

export default function TabButton({ children, onSelect }) {
  return (
    <>
      {/* <FontAwesomeIcon icon={faHeart} /> */}
      <button onClick={onSelect} className="tab-button">
        {children}
      </button>
    </>
  )
}
