import { createModel } from "@rematch/core";
import { RootModel } from ".";

const initialState = {
    main: [
      {
        name: "author",
        required: true,
        label: 'Фамилия и имя автора*',
        type: '',
        placeholder: 'Фамилия и имя автора',
        error: 'author',
      },
      {
        name: "book",
        required: true,
        label: 'Название книги*',
        type: '',
        placeholder: 'Название книги',
        error: 'book',
      },
      {
        name: "isbn",
        required: false,
        label: 'ISBN',
        type: '',
        placeholder: '000-0-00000-000-0',
        error: 'isbn',
      },
      {
        name: "year",
        required: false,
        label: 'Год издания*',
        type: '',
        placeholder: 'Год издания',
        error: 'year',
      },
    ]
}

type errorType = 'author' | 'book' | 'isbn' | 'year'

export interface IBookInfoFields {
    name: string;
    required: boolean;
    label: string;
    type: string;
    placeholder: string;
    error:errorType;
}

interface IInputs {
  main: IBookInfoFields[],
}

export const bookInfoFields = createModel<RootModel>()({
  state: {
    error: null,
    main: initialState.main,
  } as IInputs,
})