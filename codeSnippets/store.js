export const store = `/**
 * store.js (I'm assuming the store is configured
 * to use thunk-middleware, for example, to deal
 * with async requests)
 */
import { submit } from './api'

function addBirthday() {
  return (dispatch, getState) => {
    const birthdayData = getBirthdayData(getState())
    submit(birthdayData)
      .then(response => dispatch(successBirthdayAdded()))
      .catch(error => {
        console.error(\`Error: \${JSON.stringify(error)}\`)
        dispatch(errorBirthdayNotAdded())
      })
  }
}

/* store implementation */

function successBirthdayAdded() {
  return {
    type: "SUCCESS_BIRTHDAY_ADDED"
  }
}

function errorBirthdayNotAdded() {
  return {
    type: "ERROR_BIRTHDAY_NOT_ADDED"
  }
}

function createBirthdayWizard() {
  return {
    type: "CREATE_BIRTHDAY_WIZARD"
  }
}

function selectBirthdayData(store) {
  return store.birthdayData
}
`;

export const storeSolution1 = `
/**
 * Creating a new action to both save the birthday
 * and create a the birthday wizard.
 */
function saveAndCreateBirthdayWizard() {
  return (dispatch, getState) => {
    const birthdayData = getBirthdayData(getState())
    submit(birthdayData)
      .then(response => dispatch(successBirthdayAdded()))
      .then(() => dispatch(createBirthdayWizard()))
      .catch(error => {
        console.error(\`Error: \${JSON.stringify(error)}\`)
        dispatch(errorBirthdayNotAdded())
      })
  }
}
`;

export const storeSolution2 = `
/**
 * Creating just the new actions
 */
function addBirthdayAndCreateBirthdayWizard() {
  return (dispatch) => {
    dispatch(addBirthday())
    dispatch(createBirthdayWizard())
  }
}

function addBirthday() {
  return (dispatch, getStore) => {
    const birthday = getCurrentBirthday(getStore())
    dispatch(saveCurrentBirthdayLocally(birthday))
  }
}

function saveCurrentBirthdayLocally(birthday) {
  return {
    type: "SAVE_CURRENT_BIRTHDAY_LOCALLY",
    payload: birthday
  }
}

function saveAllBirthdays() {
  return (dispatch, getStore) => {
    const birthdays = getAllBirthdays(getStore())
    submit(birthdays)
      .then(response => dispatch(successBirthdayAdded()))
      .catch(error => {
        console.error(\`Error: \${JSON.stringify(error)}\`)
        dispatch(errorBirthdayNotAdded())
      })
  }
}

export function store(state, action) {
  switch(action.type) {
    // other handlers
    "SAVE_CURRENT_BIRTHDAY_LOCALLY": {
      const birthdays = [...state.birthdays, action.birthday]
      return { ...state, birthdays }
    }
  }
}

function getCurrentBirthday(store) {
  return store.birthdayData
}

function getAllBirthdays(store) {
  return store.birthdays
}
`;
