import PropTypes from 'prop-types'

const clientProp =  PropTypes.shape({
  general: PropTypes.shape({
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    avatar: PropTypes.string
  }),

  job: PropTypes.shape({
    title: PropTypes.string,
    company: PropTypes.string
  }),

  contact: PropTypes.shape({
    phone: PropTypes.string,
    email: PropTypes.string,
  }),

  address: PropTypes.shape({
    street: PropTypes.string,
    city: PropTypes.string,
    zipCode: PropTypes.string,
    country: PropTypes.string,
  }),
})

export default clientProp