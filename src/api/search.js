import axios from 'axios'
import { URL } from './config'

const searchAPI = async ({ query, page }) => {
  const keyword = query || 'home'
  try {
    const { data } = await axios(`${URL}/${keyword}/30/${page}`)
    return data
  } catch (e) {
    throw new Error(e)
  }
}

export default searchAPI
