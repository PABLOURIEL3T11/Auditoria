users = []

def addUser(name, email):
    users.append({'name': name, 'email': email})
    print("User added: " + name)

def displayUsers():
    for user in users:
        print("Name: " + user['name'] + ", Email: " + user['email'])

def getUserByEmail(email):
    for user in users:
        if user['email'] == email:
            return user
    return None

def deleteUser(email):
    for i in range(len(users)):
        if users[i]['email'] == email:
            del users[i]
            print("User deleted: " + email)
            return
    print("User not found: " + email)

addUser("John Doe", "john.doe@example.com")
addUser("Jane Smith", "jane.smith@example.com")
displayUsers()

deleteUser("john.doe@example.com")
displayUsers()

user = getUserByEmail("nonexistent@example.com")
if user:
    print("Found user: " + user['name'])
else:
    print("User not found")
