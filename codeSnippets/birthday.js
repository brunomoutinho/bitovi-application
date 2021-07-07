export const birthday = `/**
* birthday.js
*/
import { createBirthdayWizard, addBirthday } from './store'

function Birthday({ createBirthdayWizard }) {
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
