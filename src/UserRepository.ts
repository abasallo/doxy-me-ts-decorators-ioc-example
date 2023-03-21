import { User } from './user.model'

export class UserRepository {
  getAll(): User[] {
    return [
      { id: 1, username: 'username-1', password: 'hashed-password-1' },
      { id: 2, username: 'username-2', password: 'hashed-password-2' }
    ]
  }
}
