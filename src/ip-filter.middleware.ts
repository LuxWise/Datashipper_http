import { Injectable, NestMiddleware } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Request, Response, NextFunction } from 'express';

const allowedIPs = ['54.93.115.145', '186.28.168.156'];

const normalizeIp = (ip: string | undefined): string | undefined => {
  if (!ip) return undefined;
  if (ip.startsWith('::ffff:')) {
    return ip.split(':').pop();
  }
  return ip;
};

@Injectable()
export class IpFilterMiddleware implements NestMiddleware {
  constructor(private readonly config: ConfigService) {}

  use(req: Request, res: Response, next: NextFunction) {
    const forwardedFor = req.headers['x-forwarded-for'];
    const rawIp =
      typeof forwardedFor === 'string'
        ? forwardedFor.split(',')[0].trim()
        : req.socket.remoteAddress;

    const clientIp = normalizeIp(rawIp);
    const isAllowed = allowedIPs.includes(clientIp || '');
    const auth = req.headers['api_key'];
    const validApiKey = this.config.get<string>('API_KEY');

    if (!isAllowed && !auth) {
      console.log(`Access denied: no IP match and no API key`);
      return res
        .status(403)
        .json({ message: 'Access denied: IP or token required' });
    }

    if (isAllowed) {
      return next();
    }

    if (auth !== validApiKey) {
      console.log(`Access denied: invalid API key`);
      return res
        .status(403)
        .json({ message: 'Access denied: Invalid API key' });
    }

    next();
  }
}
