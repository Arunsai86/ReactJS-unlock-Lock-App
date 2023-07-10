import {useState} from 'react'
import {
  Container,
  ImageElement,
  TextPara,
  ButtonCustom,
} from './styledComponents'

const Unlock = () => {
  const [isLock, setLock] = useState(true)
  const imageUrl = isLock
    ? 'https://assets.ccbp.in/frontend/hooks/lock-img.png'
    : 'https://assets.ccbp.in/frontend/hooks/unlock-img.png'
  const imageAlt = isLock ? 'lock' : 'unlock'
  const buttonText = isLock ? 'Unlock' : 'Lock'
  const text = isLock ? 'Your Device is Locked' : 'Your Device is Unlocked'
  const changeLockStatus = () => {
    setLock(prevState => !prevState)
  }
  return (
    <Container>
      <ImageElement src={imageUrl} alt={imageAlt} />
      <TextPara>{text}</TextPara>
      <ButtonCustom type="button" onClick={changeLockStatus}>
        {buttonText}
      </ButtonCustom>
    </Container>
  )
}
export default Unlock
