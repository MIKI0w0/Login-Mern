import jwt from 'jsonwebtoken';
import { TOKEN_SECRET } from '../config.js';

export const requireAuth = (req, res, next) => {
    console.log('Auth middleware triggered');
}