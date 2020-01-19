import React, { useState, FC } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconProp, SizeProp } from '@fortawesome/fontawesome-svg-core'

import { colors } from 'styles/variables'

const { active: ACTIVE_COLOR, default: DEFAULT_COLOR } = colors.icon

interface IconProps {
  color?: string
  activeColor?: string
  size?: SizeProp
  faIcon: IconProp
}

const Icon: FC<IconProps> = ({ faIcon, size = '2x', color = DEFAULT_COLOR, activeColor = ACTIVE_COLOR }) => {
  const [faColor, setFaColor] = useState(color)

  const handleMouseLeave = () => setFaColor(color)
  const handleMouseEnter = () => setFaColor(activeColor)

  return <FontAwesomeIcon onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} color={faColor} icon={faIcon} size={size} />
}

export default Icon