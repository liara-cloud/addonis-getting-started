'use strict'

const Route = use('Route')

Route.get('/', async ({ view }) => {
  return view.render('home')
})
