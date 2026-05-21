let users = [{ id: 1, name: 'John Doe', email: 'john@gmail.com' },
{ id: 2, name: 'Jane Doe', email: 'jane@gmail.com' }];

let nextId = 3;

export const getUsers = (req, res) => {
    res.json(users);
}

export const createUser = (req, res) => {
    
    const { name, email } = req.body;

    if (!name || !email) {
        return res.status(400).json({ error: 'Name and email are required' });
    }
    const newUser = { id: nextId++, name, email };
    users.push(newUser);
    res.status(201).json({ data: newUser });
}

export const getUserById = (req, res) => {
    const user = users.find(u => u.id === +req.params.id);
    if (!user) {
        return res.status(404).json({ error: 'User not found' });
    }
    res.json({ data: user })
}

export const updateUser = (req, res) => {
    const user = users.find(u => u.id === +req.params.id);
    if (!user) {
        return res.status(404).json({ error: 'User not found' });
    }


    if (!req.body.name && !req.body.email) {
        return res.status(400).json({ error: 'At least one of name or email is required' });
    }

    user.name = req.body.name || user.name;
    user.email = req.body.email || user.email;
    res.json({ data: user });
}

export const deleteUser = (req, res) => {
    const userIndex = users.findIndex(u => u.id === +req.params.id);
    if (userIndex === -1) {
        return res.status(404).json({ error: 'User not found' });
    }
    users.splice(userIndex, 1);
    res.status(204).send();
}

