import user from '../models/user.models.js'; 
import bcrypt from 'bcryptjs';
import { createTokenAccess } from '../libs/jwt.js';

export const register = async (req, res) => {
    const {email, password, username} = req.body;
    try {
        const passwordHash = await bcrypt.hash(password, 10);
        const newUser = new user({
            email, 
            password: passwordHash, 
            username
        });
        const savedUser = await newUser.save();
        const token = await createTokenAccess({ id: savedUser._id });
        res.cookie('token', token, {});
        res.status(201).json({
            message: 'Usuario registrado exitosamente',
            user: {
                id: savedUser._id,
                username: savedUser.username,
                email: savedUser.email
            }
        });
    } catch (error) {
        return res.status(500).json({ message: 'Error al registrar usuario', error: error.message });
    }
};

export const login = async (req, res) => {
    const {email, password} = req.body;
    try {
        const userFound = await user.findOne({ email });
        if (!userFound) {
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }
        const isMatch = await bcrypt.compare(password, userFound.password);
        if (!isMatch) {
            return res.status(401).json({ message: 'Contraseña incorrecta' });
        }

        const token = await createTokenAccess({ id: userFound._id });
        res.cookie('token', token, {});
        res.status(200).json({
            message: 'Inicio de sesión exitoso',
            user: {
                id: userFound._id,
                username: userFound.username,
                email: userFound.email
            }
        });
    } catch (error) {
        return res.status(500).json({ message: 'Error al Ingresar', error: error.message });
    }
};

export const logout = (req, res) => {
    res.clearCookie('token');
    res.status(200).json({ message: 'Sesión cerrada exitosamente' });
}


export const profile = async (req, res) => {
    res.send('profile');
};