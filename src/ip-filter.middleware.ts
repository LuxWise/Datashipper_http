import { Injectable, NestMiddleware } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Request, Response, NextFunction } from 'express';

const allowedIPs = ['54.93.115.145'];

@Injectable()
export class IpFilterMiddleware implements NestMiddleware {
  constructor(private readonly config: ConfigService) {}

  use(req: Request, res: Response, next: NextFunction) {
    const ip = req.ip || req.connection.remoteAddress;
    const isAllowed = allowedIPs.some((allowed) => ip?.includes(allowed));
    const auth = req.headers['api_key'];

    if (!isAllowed && !auth) {
      res.status(403).json({ message: 'Access denied: IP or token required' });
      return;
    }

    const api_key = this.config.get<string>('API_KEY');
    console.log(api_key);

    if (auth !== api_key) {
      res.status(403).json({ message: 'Access denied: Invalid API key' });
      return;
    }

    next();
  }
}
