import express from 'express';
import { getUsers, createUser, getUserById, updateUser, deleteUser } from '../Controllers/user.js';

const router = express.Router();

// Get all users
router.get('/', getUsers);

// Get user by ID
router.get('/:id', getUserById);

// Create a new user

router.post('/', createUser);

// Update user by ID

router.put('/:id', updateUser);

// Delete user by ID

router.delete('/:id', deleteUser);

// Export the router

export default router;


