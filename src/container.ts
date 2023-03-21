/* eslint-disable @typescript-eslint/no-explicit-any */
export class Container {
  private static registry: Map<string, any> = new Map()

  static register(key: string, instance: any) {
    if (!Container.registry.has(key)) {
      Container.registry.set(key, instance)
    }
  }

  static get(key: string): any {
    return Container.registry.get(key)
  }
}
