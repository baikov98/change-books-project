import {IBookInfoFields, ICategoryListItem} from '../store/models/bookCategories'
import { useSelector, useDispatch } from 'react-redux'
import { getBookCategories } from '../store/selectors'

interface IData {
    [key: string]: string | boolean | ICategoryListItem[]
}


const useFilterServerData = (data: IData[]) => { 
    const listOfCategories = useSelector(getBookCategories) as IBookInfoFields[]
    const result = [] as ICategoryListItem[]
    data.forEach(item => {
        const word = item.name
        listOfCategories.forEach(i => {
            const title = i.title[0]
            const obj = {
                category: title,
                value: []
            } as ICategoryListItem
            i.opts.forEach(val => {
                if (val[0] === word) {
                    obj.value.push(val)
                }
            })
            if (obj.value.length) result.push(obj)
        })
    })
    return result
}

export default useFilterServerData