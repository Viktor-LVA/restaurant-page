import './styles.css'

import { insertHomeContent } from './modules/home/home.js'
import { insertMenuContent } from './modules/menu/menu.js'
import { insertAboutContent } from './modules/about/about.js'

function getDiv() {
    return document.getElementById('content')
}

const container = getDiv()

function addListeners() {
    const buttons = document.querySelectorAll('button')

    buttons.forEach((button, index) => {
        button.addEventListener('click', () => {
            switch (index) {
                case 0:
                    insertHomeContent(container)
                    break;
                case 1:
                    insertMenuContent(container)
                    break;
                case 2:
                    insertAboutContent(container)
                    break;
                default:
                    break;
            }
        })
    })
}

addListeners()

insertHomeContent(container)