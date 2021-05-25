import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Cat from 'App/Models/Cat'
import CatValidator from 'App/Validators/CatValidator'

export default class CatsController {
  public async index() {
    return await Cat.all()
  }

  public async show({ params }: HttpContextContract) {
    return await Cat.findOrFail(params.id)
  }

  public async store({ request }: HttpContextContract) {
    await request.validate({
      schema: CatValidator.store,
    })

    const data = request.only(['name', 'color'])

    return await Cat.create(data)
  }

  public async update({ request, params }: HttpContextContract) {
    await request.validate({
      schema: CatValidator.update,
    })

    const cat = await Cat.findOrFail(params.id)
    const data = request.only(['name', 'color'])

    cat.merge(data)

    return await cat.save()
  }

  public async destroy({ params }: HttpContextContract) {
    const cat = await Cat.findOrFail(params.id)
    await cat.delete()
  }
}
