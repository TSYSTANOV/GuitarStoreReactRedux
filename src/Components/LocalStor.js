
class LocalStorageItems{
    setItems(itemArray){
        localStorage.setItem('guitarCart', JSON.stringify(itemArray))
    }
    getItems(){
        return localStorage.getItem('guitarCart') ? JSON.parse(localStorage.getItem('guitarCart')):[]
    }
}

const LocalStorage_Component = new LocalStorageItems()
export {LocalStorage_Component}