import { FC } from 'react'
import styled from 'styled-components'

type Props = {
	variant: checkBoxVariant
	onChange: () => void
	isChecked: boolean
	label?: string
	isDisabled?: boolean
	className?: string
}
export enum checkBoxVariant {
	primary,
	secondary,
}

const getLabel = (variant: checkBoxVariant) => (variant === checkBoxVariant.primary ? '✔' : '»')

const getStyles = (variant: checkBoxVariant, checked: boolean) =>
	variant === checkBoxVariant.primary
		? `	top: 14px;	left: 13px; 
			${checked && 'color: #85ada7;'}
		`
		: `	top: 23px;	left: 14px; transform: rotate(90deg);
			${checked && 'color: #000;'}
		`

const Checkbox: FC<Props> = ({ variant, onChange, isChecked, label, isDisabled, className }) => {
	return (
		<Label className={className}>
			<Input disabled={isDisabled} type='checkbox' checked={isChecked} onChange={onChange} />
			<Span variant={variant} checked={isChecked}>
				{getLabel(variant)}
			</Span>
			{label}
		</Label>
	)
}
const Label = styled.label`
	display: block;
	position: relative;
	z-index: 2;
`

const Input = styled.input`
	position: absolute;
	--webkit-appearance: none;
	opacity: 0;
`

const Span = styled.span<{ variant: checkBoxVariant; checked: boolean; disabled?: boolean }>`
	position: absolute;
	height: 1em;
	width: 1em;
	font-size: 28px;
	color: #d9d9d9;
	cursor: pointer;
	${({ variant, checked }) => getStyles(variant, checked)}
	${({ disabled }) => disabled && 'cursor: not-allowed; opacity: 0.5'}
`

export default Checkbox
