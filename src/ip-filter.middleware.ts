import { Injectable, NestMiddleware } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Request, Response, NextFunction } from 'express';

const allowedIPs = ['186.28.168.156'];

@Injectable()
export class IpFilterMiddleware implements NestMiddleware {
  constructor(private readonly config: ConfigService) {}

  use(req: Request, res: Response, next: NextFunction) {
    const ip = req.ip || req.connection.remoteAddress;

    const forwardedFor = req.headers['x-forwarded-for'];
    const clientIp =
      typeof forwardedFor === 'string'
        ? forwardedFor.split(',')[0].trim()
        : req.socket.remoteAddress;

    console.log(`IP del cliente: ${clientIp}`);
    console.log(ip);
    const isAllowed = allowedIPs.some((allowed) => ip?.includes(allowed));
    const auth = req.headers['api_key'];

    if (!isAllowed && !auth) {
      console.log(`Not allowed, with IP : ${ip}`);
      res.status(403).json({ message: 'Access denied: IP or token required' });
      return;
    }

    const api_key = this.config.get<string>('API_KEY');

    if (auth !== api_key) {
      res.status(403).json({ message: 'Access denied: Invalid API key' });
      return;
    }

    next();
  }
}
