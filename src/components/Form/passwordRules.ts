export const passwordValidationRules = {
    required: { value: true, message: 'Password is required' },
    validate: {
      isCapital: (value: string) =>
        /[A-Z]/.test(value) ||
        'The password must contain at least one capital letter.',
      isLowerCase: (value: string) =>
        /[a-z]/.test(value) ||
        'The password must contain at least one lowercase letter.',
      isNumber: (value: string) =>
        /\d/.test(value) || 'The password must contain at least one number.',
      isLength: (value: string) =>
        value.length >= 8 || 'Password must be at least 8 characters long',
      isSymbol: (value: string) =>
        /[!@#$%^&*(),.?":{}|<>]/.test(value) ||
        'The password must contain at least one character. (For example, !@#$%^&*()-_=+[]{};:\'",.<>?/)',
    },
  };