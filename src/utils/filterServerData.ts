import {IBookInfoFields, ICategoryListItem} from '../store/models/bookCategories'

interface IData {
    [key: string]: string | boolean | ICategoryListItem[]
}

const useFilterServerData = (data: IData[], listOfCategories: IBookInfoFields[]) => { 
    const result = [] as ICategoryListItem[]
    listOfCategories.forEach(i => {
        const title = i.title[0]
        const obj = {
            category: title,
            value: []
        } as ICategoryListItem
        data.forEach(item => {
            const word = item.name
            i.opts.forEach(val => {
                if (val[0] === word) {
                    obj.value.push(val)
                }
            })
        })
        if (obj.value.length) result.push(obj)
    })
    return result
}

export default useFilterServerData