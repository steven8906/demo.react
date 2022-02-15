import axios from "axios"
import { URL_BASE_GIT } from "../Config/Constants"
export default class HttpService {

    static Get = async (action) => axios.get(`${URL_BASE_GIT}/${action}`)
}