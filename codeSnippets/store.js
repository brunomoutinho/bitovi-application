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
