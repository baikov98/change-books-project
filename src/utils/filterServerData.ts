import { IBookInfoFields, ICategoryListItem } from '../store/models/bookCategories'

interface IServerDataCatItem {
    name: string;
    children: []
}

interface IObj {
    category: string;
    value: string[]
}

const filterServerData = (data: IServerDataCatItem[], listOfCategories: IBookInfoFields[]) => { 
    const result = listOfCategories.map(i => {
        const title = i.title[0]
        const obj: IObj = { 
            category: title,
            value: []
        }
        data.forEach(item => {
            i.opts.forEach(val => {
                if (val[0] === item.name) obj.value.push(val[0])
            })
        })
        if (obj.value.length) return obj
    })
    const res = result.filter(element => element);
    res.forEach(i => {
        if (i) i.value = [i.value.join(', ')]
    })
    return res
}

export default filterServerData