users = []

def add_user(name, email):
    if email in [user['email'] for user in users]:
        print("Error: User with this email already exists.")
        return
    users.append({'name': name, 'email': email})
    print(f"User added: {name}")  # Uso de f-string

def display_users():
    for user in users:
        print(f"Name: {user['name']}, Email: {user['email']}")  # Uso de f-string

def get_user_by_email(email):
    for user in users:
        if user['email'] == email:
            return user
    return None

def delete_user(email):
    for i in range(len(users)):
        if users[i]['email'] == email:
            del users[i]
            print(f"User deleted: {email}")  # Uso de f-string
            return
    print(f"User not found: {email}")  # Uso de f-string

def main():
    add_user("John Doe", "john.doe@example.com")
    add_user("Jane Smith", "jane.smith@example.com")
    display_users()
    delete_user("john.doe@example.com")
    display_users()
    user = get_user_by_email("nonexistent@example.com")
    if user:
        print(f"Found user: {user['name']}")  # Uso de f-string
    else:
        print("User not found")

main()
