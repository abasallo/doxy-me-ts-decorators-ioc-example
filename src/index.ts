import { UserRepository } from './UserRepository'
import { UserService } from './UserService'
import { Container } from './container'

Container.register('UserRepository', new UserRepository())

const userService = new UserService()

console.log(userService.getAll())
