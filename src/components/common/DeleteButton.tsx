import { FC } from 'react'
import styled from 'styled-components'

type Props = {
  onClick: () => void
  isDisabled?: boolean
  isHidden?: boolean
}

const DeleteButton: FC<Props> = ({ onClick, isDisabled, isHidden }) => {
  return (
    <Button disabled={isDisabled} hidden={isHidden} onClick={onClick}>
      ✖
    </Button>
  )
}

const Button = styled.button<{ disabled?: boolean; hidden?: boolean }>`
  display: grid;
  outline: none;
  border: none;
  justify-self: center;
  align-self: center;
  background: #fff;
  color: #ae8888;
  font-weight: 700;
  cursor: pointer;
  transition: font-size 0.2s linear;
  background-color: transparent;
  z-index: 1;

  &:hover {
    font-size: 24px;
    text-shadow: 0 0 1px #000, 0 0 10px rgba(199, 107, 107, 0.8);
  }
  ${({ disabled }) => disabled && 'cursor: not-allowed; opacity: 0.5'}
  ${({ hidden }) => hidden && 'visibility: hidden'}
`

export default DeleteButton
