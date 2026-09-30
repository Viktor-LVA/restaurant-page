import './menu.css'

export function insertMenuContent(div) {
    div.replaceChildren()
    const sepStyles = div.className.split(' ')
    sepStyles[1] = 'menu'
    div.className = sepStyles.join(' ')

    const h1 = document.createElement('h1')
    const p = document.createElement('p')

    h1.textContent = 'Admiral Benbow Restaurant: Menu Tab'
    p.textContent = 'Welcome to our beautiful restaurant Admiral Benbow! We can propose you best dishes of Old England.'

    div.append(h1)
    div.append(p)
}