import jwt from 'jsonwebtoken';
import { TOKEN_SECRET } from '../config.js';

export const requireAuth = (req, res, next) => {
    const { token } = req.cookies;
    if (!token) {
        return res.status(401).json({ message: 'Acceso denegado, no se proporcionó token' });
    }

    jwt.verify(token, TOKEN_SECRET, (err, decoded) => { // 'decoded' holds the token payload
        if (err) {
            return res.status(403).json({ message: 'Token inválido o expirado' });
        }
        req.user = decoded; // Guardar la información del usuario decodificada en la solicitud
        next(); // Continuar con el siguiente middleware o ruta
    });
};