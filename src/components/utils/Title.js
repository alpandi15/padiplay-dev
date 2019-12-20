import React from 'react'
import Helmet from 'react-helmet'

const TitleComponent = ({ title }) => {
  let defaultTitle = 'Padiplay'
  return (
    <Helmet>
      <title>{title || defaultTitle}</title>
    </Helmet>
  )
}

export default TitleComponent
