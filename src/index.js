import { insertHomeContent } from './modules/home/home.js'
import { insertMenuContent } from './modules/menu/menu.js'
import { insertAboutContent } from './modules/about/about.js'

function getDiv() {
    return document.getElementById('content')
}

const container = getDiv()

insertHomeContent()//!!!

/*
Каждый модуль будет экспортировать функцию, которая создает элемент `div`, добавляет к нему соответствующее содержимое и стили!!!, а затем добавляет его в DOM.
Логику переключения вкладок следует написать внутри тега <tab> index.js. Для каждой кнопки в навигационной панели заголовка должны быть обработчики событий, которые очищают текущее содержимое тега <tab> div#content, а затем запускают соответствующий "модуль вкладок" для заполнения его новым содержимым.
*/