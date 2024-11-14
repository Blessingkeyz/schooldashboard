import { defineStore } from 'pinia'

export const useTeachersStore = defineStore('teachers', {
  state: () => ({
    teachers: [
      {
        id: 1,
        name: 'Dimitres Viga',
        subject: 'Mathematics',
      },
      {
        id: 2,
        name: 'Tom Housenburg',
        subject: 'Science',
      },
      {
        id: 3,
        name: 'Dana Benevista',
        subject: 'Art',
      },
      {
        id: 4,
        name: 'Salvadore Morbeau',
        subject: 'Biolgy',
      },
      {
        id: 5,
        name: 'Maria Historia',
        subject: 'Biology',
      },
      {
        id: 6,
        name: 'Jack Sully',
        subject: 'Physics',
      },
      {
        id: 7,
        name: 'Lula Beatrice',
        subject: 'Algorithm',
      },
      {
        id: 8,
        name: 'Nella Vita',
        subject: 'English',
      },
      {
        id: 9,
        name: 'Nadia Laravela',
        subject: 'Programming',
      },
      {
        id: 10,
        name: 'Dakota Farral',
        subject: 'Science',
      },
      {
        id: 11,
        name: 'Miranda Adida',
        subject: 'Art',
      },
      {
        id: 12,
        name: 'Indiana Barker',
        subject: 'Biology',
      },
    ],
  }),
  getters: {},
  actions: {},
})
