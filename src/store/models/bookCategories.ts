import { createModel } from "@rematch/core";
import { RootModel } from ".";

const initialState = 
    { main: [
        {title: ['Жанр', 'genre'],
         opts: [
                ['детектив', 'detective'], 
                ['детские книги', 'childbooks'], 
                ['история', 'history'], 
                ['мемуары', 'memoirs'], 
                ['приключения', 'adventures'], 
                ['психология', 'psychology'], 
                ['фантастика', 'fantasy'], 
                ['эзотерика', 'esoterics']
               ]}, 
        {title: ['Область наук', 'scienceField'],
         opts: [
                ['биология', 'biology'], 
                ['медицина', 'medicine'], 
                ['физика', 'physics'], 
                ['химия', 'chemistry']
               ]}, 
        {title: ['Состояние', 'shape'],
         opts: [
                ['новая', 'fresh'], 
                ['в хорошем состоянии', 'goodshape'], 
                ['б/у', 'boo'], 
                ['потрепана', 'shabby']
               ]}, 
        {title: ['Обложка', 'jacket'],
         opts: [
                ['суперобложка', 'dustjacket'], 
                ['жесткая', 'tough'], 
                ['мягкая', 'soft'], 
                ['без обложки', 'withoutcover']
               ]}, 
        {title: ['Лауреат', 'laureate'],
         opts: [
                ['нобелевская', 'nobel'], 
                ['пулитцеровская', 'pylit'], 
                ['гонкуровская', 'gonkyr'], 
                ['букеровская', 'buker'], 
                ['русский Букер', 'rusbuker']
               ]}, 
        {title: ['Экранизация', 'filmAdaptation'],
         opts: [
                ['экранизирована', 'filmed'], 
                ['не экранизирована', 'notfilmed']
               ]}, 
        {title: ['Язык издания', 'language'],
         opts: [
                ['русский', 'russian'], 
                ['английский', 'english']
               ]}
        ]
    }

export const onlyOneCheckBoxCategoryArray = ['Состояние', 'Обложка', 'Экранизация', 'Язык издания']

export const genresCheckBoxNameArray = ['detective', 'childbooks', 'history', 
                                          'memoirs', 'adventures', 'psychology',
                                          'fantasy', 'esoterics']

export interface IBookInfoFields {
    title: Array<string>;
    opts: Array<string[]>;
}

interface IInputs {
    main: IBookInfoFields[],
} 

export const bookCategories = createModel<RootModel>()({
  state: {
      main: initialState.main
  } as IInputs,
})