import React from 'react'
import ThemeSelector from './ThemeSelector'
import FormatSelector from './FormatSelector'

const Download = () => {
  return (
    <div>
        <h3>Download Invoice</h3>
        <hr />
        <ThemeSelector />
        <hr />
        <FormatSelector />
    </div>
  )
}

export default Download