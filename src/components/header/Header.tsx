import * as React from 'react'
import * as styles from './Header.module.scss'
import cs from 'classnames'

export const Header = () => {
  return (
    <div className={cs(styles.header, "bg-primary-cream flex items-center justify-between flex-wrap border-b border-primary-blue")} >
      header
    </div>
  )
}

export default Header
