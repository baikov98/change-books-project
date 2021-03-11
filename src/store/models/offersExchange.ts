import { createModel } from "@rematch/core";
import { RootModel } from "."; 

const full = [
    {
        username: "Хитрый перец",
        city: 'Хабаровск',
        rating: "4.7",
    },
    {
        username: "Золотая рыбка",
        city: 'Самара',
        rating: "4.4",
    },
    {
        username: "Ранняя Пташка",
        city: 'Екатеринбург',
        rating: "4.1",
    },
]

const part = [
    {
        username: "Хитрый перец",
        city: 'Хабаровск',
        rating: "4.7",
    },
    {
        username: "Золотая рыбка",
        city: 'Самара',
        rating: "4.4",
    },
    {
        username: "Ранняя Пташка",
        city: 'Екатеринбург',
        rating: "4.1",
    },
]

const other = [
    {
        username: "Хитрый перец",
        city: 'Хабаровск',
        rating: "4.7",
    },
    {
        username: "Золотая рыбка",
        city: 'Самара',
        rating: "4.4",
    },
    {
        username: "Ранняя Пташка",
        city: 'Екатеринбург',
        rating: "4.1",
    },
]


export const offersExchange = createModel<RootModel>()({
  state: {
    error: null,
    full,
    part,
    other,
  },
  reducers: {
  },
});
