import { createModel } from "@rematch/core";
import { RootModel } from "."; 

const list =  [
  { 
    topic: 'Вопрос по книге',
    text: `Текст обращения пользователя. Текст для примера. Подскажите, пожалуйста, что делать? К
    ак отправить книгу? Текст обращения пользователя. Текст для примера. Подскажите, пожалуйста, что делать
    ? Как отправить книгу? Текст обращения пользователя. Текст для примера. Подскажите, пожалуйста, что делать? 
    Как отправить книгу? Текст обращения пользователя. Текст для примера. Подскажите, пожалуйста, что делать?Как 
    отправить книгу? `,
    date: '20.03.2021'
  },
  { 
    topic: 'Длинный вопрос по книге по книге',
    text: `Текст обращения пользователя. Текст для примера. Подскажите, пожалуйста, что делать? К
    ак отправить книгу? Текст обращения пользователя. Текст для примера. Подскажите, пожалуйста, что делать
    ? Как отправить книгу? Текст обращения пользователя. Текст для примера. Подскажите, пожалуйста, что делать? 
    Как отправить книгу? Текст обращения пользователя. Текст для примера. Подскажите, пожалуйста, что делать?Как 
    отправить книгу? `,
    date: '27.02.2021'
  },  { 
    topic: 'Как обменять?',
    text: `Текст обращения пользователя. Текст для примера. Подскажите, пожалуйста, что делать? К
    ак отправить книгу? Текст обращения пользователя. Текст для примера. Подскажите, пожалуйста, что делать
    ? Как отправить книгу? Текст обращения пользователя. Текст для примера. Подскажите, пожалуйста, что делать? 
    Как отправить книгу? Текст обращения пользователя. Текст для примера. Подскажите, пожалуйста, что делать?Как 
    отправить книгу? `,
    date: '15.02.2021'
  },
  { 
    topic: 'Длинный вопрос по книге по книге',
    text: `Текст обращения пользователя. Текст для примера. Подскажите, пожалуйста, что делать? К
    ак отправить книгу? Текст обращения пользователя. Текст для примера. Подскажите, пожалуйста, что делать
    ? Как отправить книгу? Текст обращения пользователя. Текст для примера. Подскажите, пожалуйста, что делать? 
    Как отправить книгу? Текст обращения пользователя. Текст для примера. Подскажите, пожалуйста, что делать?Как 
    отправить книгу? `,
    date: '11.02.2021'
  },
]

export const messages = createModel<RootModel>()({
  state: {
    error: null,
    list: [],
  },
  reducers: {
  },
});
