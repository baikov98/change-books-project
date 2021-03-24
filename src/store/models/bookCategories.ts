import { createModel } from "@rematch/core";
import { RootModel } from ".";

const initialState = 
    { main: [
        {title: ['Жанр', 'genre'],
         opts: [
                ['Боевик', 'thriller'],
                ['Бизнес', 'business'],
                ['Детектив', 'detective'], 
                ['Для детей', 'childbooks'], 
                ['Зарубежная литература', 'foreign'],
                ['История', 'history'],
                ['Классическая литература', 'classic'], 
                ['Компьютеры', 'computers'],
                ['Красота и здоровье', 'beauty'],
                ['Культура и искусство', 'culture'],
                ['Любовный роман', 'lovestory'],
                ['Наука и образование', 'science'],
                ['Поэзия и драматургия', 'poetry'],
                ['Приключения', 'adventures'], 
                ['Публицистика', 'journalism'], 
                ['Религия', 'religion'],
                ['Современная проза', 'prose'],
                ['Ужасы', 'horror'],
                ['Фантастика', 'fantastic'],
                ['Фэнтэзи', 'fantasy'],
                ['Хобби и досуг', 'hobbies'],
                ['Эзотерика', 'esoterics'],
                ['Эротика', 'erotic'], 
                ['Юмор', 'humor'],
               ]}, 
        {title: ['Состояние', 'shape'],
         opts: [
                ['Новая', 'fresh'], 
                ['Хорошее', 'goodshape'], 
                ['Удовлетворительное', 'satisfactory'], 
                ['Потрепана', 'shabby']
               ]}, 
        {title: ['Обложка', 'jacket'],
         opts: [
                ['Суперобложка', 'dustjacket'], 
                ['Жесткая', 'tough'], 
                ['Мягкая', 'soft'], 
                ['Без обложки', 'withoutcover']
               ]}, 
        {title: ['Лауреат', 'laureate'],
         opts: [
                ['Нобелевская', 'nobel'], 
                ['Пулитцеровская', 'pylit'], 
                ['Гонкуровская', 'gonkyr'], 
                ['Букеровская', 'buker'], 
                ['Русский Букер', 'rusbuker']
               ]}, 
        {title: ['Дополнительно', 'additionally'],
         opts: [
                ['Экранизирована', 'filmed'], 
                ['Подарочное издание', 'giftedition'],
                ['Ограниченный тираж', 'limitededition'],
                ['Иностранный язык', 'foreignlanguage'],
               ]}, 
       
        ]
    }

export const onlyOneCheckBoxCategoryArray = ['Состояние', 'Обложка']

export const genresCheckBoxNameArray = ['thriller', 'business', 'detective', 'childbooks', 
'foreign', 'history', 'classic', 'computers', 'beauty', 'culture', 'lovestory', 'science', 'poetry', 
'adventures', 'journalism', 'religion', 'prose','horror', 'fantastic', 'fantasy', 'hobbies', 
'esoterics', 'erotic', 'humor']

export interface IBookInfoFields {
    title: string[];
    opts: string[][];
}
   
export interface ICategoryListItem {
    category: string;
    value: string[][]
} 

export interface IRequestCategoriesItem {
    name: string;
    children: []
}

interface IInputs {
    main: IBookInfoFields[],
} 

export const bookCategories = createModel<RootModel>()({
  state: {
      main: initialState.main
  } as IInputs,
})