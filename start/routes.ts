import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async () => {
  return Route.resource('/cats', 'CatsController').routes.map((route) => ({
    endpoint: route['pattern'],
    action: route['name'].replace('cats.', ''),
    methods: route['methods'],
  }))
})

Route.resource('/cats', 'CatsController').apiOnly()
