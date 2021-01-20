import { AppState } from '../AppState'
import { api } from './AxiosService'
const key = 'houses/'

class HomesService {
  async getHomes() {
    // fetch data
    const res = await api.get(key)
    // add to AppState
    AppState.homes = res.data
  }

  async getOne(id) {
    // REVIEW since I changed the api default in the axios service I need to change what the individual id search is looking for
    // to the url link for it. How do I do that exactly?
    const res = await api.get(key + id)
    AppState.activeHome = res.data
  }

  async create(home) {
    const res = await api.post(key, home)
    AppState.homes.push(res.data)
    return res.data.id
  }
}

export const homesService = new HomesService()
