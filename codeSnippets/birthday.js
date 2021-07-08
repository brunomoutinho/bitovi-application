export const birthday = `/**
* birthday.js
*/
import { createBirthdayWizard, addBirthday } from './store'

function Birthday({ createBirthdayWizard, addBirthday }) {
 render (
   <Modal
     onCancel={addBirthday}
     onConfirm={createBirthdayWizard}
   >
     Would you like to add another person?
   </Modal>
 )
}

function mapDispatchToProps({
 addBirthday,
 createBirthdayWizard,
})

export default connect(Birthday, mapDispatchToProps)
`;

export const birthdaySolution2 = `/**
* birthday.js
*/
import { addBirthdayAndCreateBirthdayWizard, saveAllBirthdays } from './store'

function Birthday({ addBirthdayAndCreateBirthdayWizard, saveAllBirthdays }) {
 render (
   <Modal
     onCancel={saveAllBirthdays}
     onConfirm={addBirthdayAndCreateBirthdayWizard}
   >
     Would you like to add another person?
   </Modal>
 )
}

function mapDispatchToProps({
  saveAllBirthdays,
  addBirthdayAndCreateBirthdayWizard,
})

export default connect(Birthday, mapDispatchToProps)
`;
