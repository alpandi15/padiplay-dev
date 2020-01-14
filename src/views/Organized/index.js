import React, { useEffect } from 'react'
import $ from 'jquery'

const Organized = () => {
  useEffect(() => {
    $('.generate').click(() => {
      alert('Generate From jQuery')
    })
  }, [])

  return (
    <div>
      Organized Page
      <button className="generate">Generate</button>
    </div>
  )
}

export default Organized
