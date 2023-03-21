/* eslint-disable @typescript-eslint/no-explicit-any */
import { Container } from './container'
import { Injection } from './injection.model'

export const injectionTarget =
  () =>
  // eslint-disable-next-line @typescript-eslint/ban-types
  <T extends { new (...args: any[]): {} }>(constructor: T): T | void => {
    return class extends constructor {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      constructor(...args: any[]) {
        const injections = (constructor as any).injections as Injection[]
        const injectedArgs: any[] = injections.map(({ key }) => Container.get(key))
        super(...injectedArgs)
      }
    }
  }
