import { redirect } from '@sveltejs/kit'
import type { Actions, PageServerLoad } from './$types'

export const load: PageServerLoad = async () => {
  
}

export const actions: Actions = {
  default({ cookies }) {
    // eat the cookie
    cookies.set('token', '', {
      path: '/',
      expires: new Date(0),
    })

    // redirect the user
    throw redirect(302, '/authentication/signin')
  },
}