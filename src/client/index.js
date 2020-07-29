import { checkForInput  } from './js/inputChecker'
import { postDataToServer} from './js/postDataToServer'
import { updateUI } from './js/updateUI'
import { handleSubmit } from './js/formHandler'

import './styles/resets.scss'
import './styles/base.scss'
import './styles/footer.scss'
import './styles/form.scss'
import './styles/header.scss'
import './styles/result.scss'


console.log("I EXIST")

export {
    checkForInput,
    handleSubmit,
    postDataToServer,
    updateUI
}
