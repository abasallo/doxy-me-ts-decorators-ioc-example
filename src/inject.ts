/* eslint-disable @typescript-eslint/no-explicit-any */
import { Injection } from './injection.model'

export const inject = (key: string) => (target: object, propertyKey: string | symbol, parameterIndex: number) => {
  const injections: Injection[] = (target as any).injections || []
  const newInjection: Injection = { index: parameterIndex, key }
  Object.defineProperty(target, 'injections', { value: [...injections, newInjection] })
}
