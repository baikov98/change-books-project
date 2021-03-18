import { IData } from "./filterFormData";
import { genresCheckBoxNameArray } from '../store/models/bookCategories'

const genresChecker = (data: IData) => {
    for (let key in data) if (!data[key]) delete data[key]
    return Object.keys(data).some((i) => genresCheckBoxNameArray.includes(i))
}

export default genresChecker