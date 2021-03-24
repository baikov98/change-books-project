import {IBookInfoFields, ICategoryListItem} from '../store/models/bookCategories'

export interface IData {
    [key: string]: string | ICategoryListItem[]
}

const useFilterFormData = (data: IData, listOfCategories: IBookInfoFields[]) => {
    for (let key in data) {
        if (!data[key]) delete data[key]
    }
    data.categories = []
    const catList = data.categories
    listOfCategories.forEach((item, index) => {
        const title = item.title[0]
        item.opts.forEach((i, indx) => { 
            const findEl = catList.find((val: ICategoryListItem) => val.category === title)
            if (data.hasOwnProperty(i[1])) {
                findEl ? findEl.value.push(i) :
                catList.push({category: title, value: [i]})
            }
        })
    })

    for (let key in data) {
        if (typeof data[key] === 'boolean') delete data[key]
    }
    return data
}

export default useFilterFormData