import { AppState } from '../AppState'
import { api } from './AxiosService'
const key = 'cars/'
class CarsService {
  async getCars() {
    // fetch data
    const res = await api.get(key)
    // add to AppState
    AppState.cars = res.data
  }

  async getOne(id) {
    const res = await api.get(key + id)
    AppState.activeCar = res.data
  }

  async create(car) {
    const res = await api.post(key, car)
    AppState.cars.push(res.data)
    return res.data.id
  }
}

export const carsService = new CarsService()
