type TRules = {
  [key: string]: (v: string) => boolean | string
}

const rules: TRules = {
  firstName: (v) => {
    if (!v) {
      return 'firstName.required'
    }
    if (v.length < 3) {
      return 'firstName.min'
    }
    if (v.length > 12) {
      return 'firstName.max'
    }
    return true
  },
  lastName: (v) => {
    if (!v) {
      return 'lastName.required'
    }
    if (v.length < 3) {
      return 'lastName.min'
    }
    if (v.length > 12) {
      return 'lastName.max'
    }
    return true
  },

  email: (v) => {
    if (!v) {
      return 'email.required'
    }

    if (v.length < 6) {
      return 'email.min'
    }
    return true
  },
  password: (v) => {
    if (!v) {
      return 'password.required'
    }
    if (v.length < 6) {
      return 'password.min'
    }
    return true
  },
}

export const validate = (value: string) => {
  return rules[value]
}
