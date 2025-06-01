export const passwordValidationRules = {
    required: { value: true, message: 'Password is required' },
    validate: {
      isCapital: (value) =>
        /[A-Z]/.test(value) ||
        'The password must contain at least one capital letter.',
      isLowerCase: (value) =>
        /[a-z]/.test(value) ||
        'The password must contain at least one lowercase letter.',
      isNumber: (value) =>
        /\d/.test(value) || 'The password must contain at least one number.',
      isLength: (value) =>
        value.length >= 8 || 'Password must be at least 8 characters long',
      isSymbol: (value) =>
        /[!@#$%^&*(),.?":{}|<>]/.test(value) ||
        'The password must contain at least one character. (For example, !@#$%^&*()-_=+[]{};:\'",.<>?/)',
    },
  };