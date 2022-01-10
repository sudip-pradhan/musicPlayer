import HeaderStore from "./stores/HeaderStore";
import { makeAutoObservable } from 'mobx'

class Store {
    headerStore= new HeaderStore()
}

const store = new Store()

export default store