import Validator from '@ioc:Adonis/Core/Validator'

export default class CatValidator {
  static rules = {
    name: Validator.schema.string({}, [
      Validator.rules.minLength(3),
      Validator.rules.maxLength(30),
    ]),
    color: Validator.schema.string({}, [Validator.rules.maxLength(20)]),
  }

  static store = Validator.schema.create({
    name: CatValidator.rules.name,
    color: CatValidator.rules.color,
  })

  static update = Validator.schema.create({
    name: CatValidator.rules.name,
    color: CatValidator.rules.color,
  })
}
