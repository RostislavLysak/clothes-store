const config = {
  JWT_SECRET:
    'R5xIORSlCGAK3hPxq4aKF0X8E7n9JApIBwI9M2NPOQ26CvTkovdNCeEjER4Qw9F_rhsai0Or5I3kYgsaXrH6FwsaL1fpjwt2MSmj6kie3bqaheF4Zl5gQmHFhwSymYW',

  ACCESS_TOKEN_EXPIRES_IN: '15m',
  ACCESS_TOKEN_ALGORITHM: 'HS512',
  REFRESH_TOKEN_EXPIRES_IN: '10d',
  REFRESH_TOKEN_ALGORITHM: 'HS512',
  locales: ['en', 'ua'],
  defaultLocale: 'en',
} as const

export default config
