import user from '../models/user.models.js'; 
import bcrypt from 'bcryptjs';
import { createTokenAccess } from '../libs/jwt.js';

export const register = async (req, res) => {
    const {email, password, username} = req.body;
    try {
        const passwordHash = await bcrypt.hash(password, 10);
        const newUser = new user({email, password, username});
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

export const login = (req, res) => res.send('Login');