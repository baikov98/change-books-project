import { createModel } from "@rematch/core";
import { RootModel } from ".";

const initialState = {
    main: [
      {
        name: "authorName",
        required: true,
        label: 'Имя автора*',
        type: '',
        placeholder: 'Имя автора',
        error: 'authorName',
      },
      {
        name: "authorSurname",
        required: true,
        label: 'Фамилия автора*',
        type: '',
        placeholder: 'Фамилия автора',
        error: 'authorSurname',
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

type errorType = 'authorName' | 'authorSurname' | 'book' | 'isbn' | 'year'

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
    main: initialState.main,
  } as IInputs,
})