import React from 'react'

const AddBoxIcon = ({ width = 22 }) => {
  return (
    <svg
      focusable='false'
      aria-hidden='true'
      viewBox='0 0 24 24'
      width={width}
      fill='currentColor'
    >
      <path d='M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10h-4v4h-2v-4H7v-2h4V7h2v4h4v2z'></path>
    </svg>
  )
}

export default AddBoxIcon
