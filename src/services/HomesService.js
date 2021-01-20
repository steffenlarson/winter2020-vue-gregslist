import { AppState } from '../AppState'
import { api } from './AxiosService'
const key = 'houses/'
// NOTE used a variable to use the url appendage anywhere without having to type it out all the time.

class HomesService {
  async getHomes() {
    // fetch data
    const res = await api.get(key)
    // add to AppState
    AppState.homes = res.data
  }

  async getOne(id) {
    const res = await api.get(key + id)
    AppState.activeHome = res.data
  }

  async create(home) {
    const res = await api.post(key, home)
    AppState.homes.push(res.data)
    return res.data.id
  }
  // NOTE will eventually add delet and put. How do they interact with everything? similarly like we have already done? we will just have to add buttons and things onto the page?
}

export const homesService = new HomesService()
