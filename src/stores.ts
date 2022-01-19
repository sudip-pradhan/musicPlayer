import HeaderStore from "./stores/HeaderStore";
import YTPlaylistStore from "./stores/YTPlaylistStore";

class Store {
    headerStore = new HeaderStore()
    ytPlaylistStore = new YTPlaylistStore()
}

const store = new Store()

export default store