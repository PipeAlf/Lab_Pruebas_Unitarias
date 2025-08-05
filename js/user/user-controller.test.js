const UserController = require("./user-controller");
const User = require("./user");

const userController = new UserController();

test('add user to userController', () => {    
    let user = new User(1234,"Santiago", "santiago@generation.org");
    userController.add(user);    
    expect(userController.getUsers()).toContain(user);
  });

test('remove user to userController', () => {    
    let user = new User(1234,"Santiago", "santiago@generation.org");
    userController.add(user);    
    userController.remove(user);
    expect(userController.users).not.toContain(user);
  });

  // Tarea 2.1
test('add user that is not in the users list', () => {
    let newUser = new User(5678, "Maria", "maria@generation.org");
    
    expect(userController.getUsers()).not.toContain(newUser);
    
    userController.add(newUser);
    
    expect(userController.getUsers()).toContain(newUser);
});

// Tarea 2.2
test('remove user that is not in the users list', () => {

    let userNotInList = new User(9999, "Laura", "laura@generation.org");

    const originalUsers = userController.getUsers().slice();

    expect(userController.getUsers()).not.toContain(userNotInList);

    userController.remove(userNotInList);

    expect(userController.getUsers()).toEqual(originalUsers);

    expect(userController.getUsers()).not.toContain(userNotInList);
});

//Tarea 2.3 Email Cuando existe 

test('findByEmail retorna el usuario cuando el email existe', function() {
  let user = new User(1234, "Yohana", "yohana@test.com");
  userController.add(user);
  let foundUser = userController.findByEmail("yohana@test.com");
  expect(foundUser).toBe(user);
});

//Tarea 2.3 Email cuando no existe

test('findByEmail retorna undefined cuando el email no existe', function() {
  let foundUser = userController.findByEmail("nonexistent@test.com");
  expect(foundUser).toBeUndefined();
});

//Tarea 2.4 Find by ID cuando no existe

  test('findById() - should return undefined if id does not exist', () => {
    let user = new User(99, 'Carlos', 'carlos@example.com');
    userController.add(user);
    let found = userController.findById(123);
    expect(found).toBeUndefined();
  });

//Tarea 2.4 Find by ID cuando existe
test('findById() - should return user if id exists', () => {
    let user = new User(42, 'Carlos', 'carlos@example.com');
    userController.add(user);
    let found = userController.findById(42);
    expect(found).toBe(user);
  });