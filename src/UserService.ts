import { injectionTarget } from './injectionTarget'
import { inject } from './inject'
import { UserRepository } from './UserRepository'
import { User } from './user.model'

@injectionTarget()
export class UserService {
  userRepository: UserRepository

  constructor(@inject('UserRepository') userRepository?: UserRepository) {
    this.userRepository = userRepository
  }

  getAll(): User[] {
    return this.userRepository.getAll()
  }
}
