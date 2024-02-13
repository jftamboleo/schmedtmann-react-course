const initialStateCustomer = {
  fullName: '',
  nationalId: '',
  createdAt: ''
}

export const customerReducer = (state = initialStateCustomer, action) => {
  switch (action.type) {
    case 'customer/createCustomer': {
      return {
        ...state,
        fullName: action.payload.fullName,
        nationalId: action.payload.nationalId,
        createdAt: action.payload.createdAt
      }
    }
    case 'customer/updateName': {
      return {
        ...state,
        fullName: action.payload
      }
    }
    default: {
      return state
    }
  }
}

export const createCustomer = (fullName, nationalId) => {
  return { type: 'customer/createCustomer', payload: { fullName, nationalId, createdAt: new Date().toISOString() } }
}

export const updateName = (fullName) => {
  return { type: 'customer/updateName', payload: fullName }
}