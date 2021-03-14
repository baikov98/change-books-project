
interface IListCategories {
    title: Array<string>;
    opts: Array<string[]>;
}

interface ICategoryListItem {
    [key: string]: string 
}
// поставил any т.к. значения у объекта data могут быть string | Array<string[]>
// = TS ругается на push
const filterFormData = (data: any, listOfCategories: IListCategories[]) => { 
    for (let key in data) {
        if (!data[key]) delete data[key]
    }
    data.categoryList = []
    const catList = data.categoryList
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

export default filterFormData