import { ADDED, CHECKBOX, DELETED, EDITED, TOGGLE } from "../Actions/ToDoAction";

const initial_state = {
  data: {
    COMPLETE_SCHEDULES: [
      {
        id: 1,
        title: 'YOUR TITLE HERE !!!',
        description:'YOUR DESCRIPTIONS HERE...........',
      },
    ],

    GROCERY_LIST: [
      {
        id: 2,
        title: 'YOUR TITLE HERE !!!',
        description: 'YOUR DESCRIPTIONS HERE...........',
      },
    ],

    WORK_PROJECTS: [
      {
        id: 3,
        title: 'YOUR TITLE HERE !!!',
        description : 'YOUR DESCRIPTIONS HERE...........',
      },
    ],
  },
  editing:false,
  isCheckbox : false
};

export const todoReducer = (state = initial_state, action) => {
  const { type, payload } = action;

  switch (type) {
    case ADDED:
      // return { data: { ...state.data, ...payload } };
    case DELETED:
      return { data: { ...state.data, ...payload } };
      case EDITED:
      return { data: { ...state.data, ...payload } };
      case TOGGLE:
      return {...state, editing:!state.editing};
      case CHECKBOX:
        return {...state, editing:!state.isCheckbox};
    default:
      return state;
  }
};