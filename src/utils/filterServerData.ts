import { IBookInfoFields, ICategoryListItem } from '../store/models/bookCategories'

interface IServerDataCatItem {
    name: string;
    children: []
}

const filterServerData = (data: IServerDataCatItem[], listOfCategories: IBookInfoFields[]) => { 
    const result = listOfCategories.map(i => {
        const title = i.title[0]
        const obj: ICategoryListItem = {
            category: title,
            value: []
        }
        data.forEach(item => {
            i.opts.forEach(val => {
                if (val[0] === item.name) obj.value.push(val)
            })
        })
        if (obj.value.length) return obj
    })
    const res = result.filter(element => element);
    return res
}

export default filterServerData