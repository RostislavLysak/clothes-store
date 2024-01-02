import jwt from 'jsonwebtoken'
import config from '@/config'
import crypto from 'crypto'

interface TTokenPayload {
  userId: string
}

export interface IAccessTokenPayload extends jwt.JwtPayload, TTokenPayload {}
export interface IRefreshTokenPayload extends IAccessTokenPayload {
  jti: string
}

class TokenService {
  _signAccessToken(payload: TTokenPayload) {
    return jwt.sign(payload, config.JWT_SECRET, {
      expiresIn: config.ACCESS_TOKEN_EXPIRES_IN,
      algorithm: config.ACCESS_TOKEN_ALGORITHM,
    })
  }

  _signRefreshToken(payload: TTokenPayload) {
    const jti = `${payload.userId}:${crypto.randomUUID()}`
    return jwt.sign({ ...payload, jti }, config.JWT_SECRET, {
      expiresIn: config.REFRESH_TOKEN_EXPIRES_IN,
      algorithm: config.REFRESH_TOKEN_ALGORITHM,
    })
  }

  generateTokens(payload: TTokenPayload) {
    const accessToken = this._signAccessToken(payload)
    const refreshToken = this._signRefreshToken(payload)

    return {
      accessToken,
      refreshToken,
    }
  }

  verifyAccessToken(token: string) {
    return jwt.verify(token, config.JWT_SECRET) as
      | IAccessTokenPayload
      | undefined
  }
  verifyRefreshToken(token: string) {
    return jwt.verify(token, config.JWT_SECRET) as
      | IRefreshTokenPayload
      | undefined
  }
}

export default new TokenService()
