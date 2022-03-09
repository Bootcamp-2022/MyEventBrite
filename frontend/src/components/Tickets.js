import React from 'react'
import PropTypes from 'prop-types'

const Tickets = ({value,text,color}) => {
  return (
    <div className='tickets'>

        <h5  style={{ color:'blue' }}
        className={
            value ===0? text='Sold out':
            value < 5? text = 'Hurry up, tickets selling fast':''

        }>
        </h5>
        <span>{text && text}</span>
        </div>
  )
}

Tickets.defaultProps = {
    color: 'yellow',
  }

Tickets.propTypes = {
    value: PropTypes.number.isRequired,
     text: PropTypes.string,
     color: PropTypes.string,
  }

export default Tickets