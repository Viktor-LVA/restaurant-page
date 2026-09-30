import './home.css'

export function insertHomeContent(div) {
    div.replaceChildren()
    const sepStyles = div.className.split(' ')
    sepStyles[1] = 'home'
    div.className = sepStyles.join(' ')
    
    const h1 = document.createElement('h1')
    const p = document.createElement('p')

    h1.textContent = 'Admiral Benbow Restaurant: Home Tab'
    p.textContent = 'Welcome to our beautiful restaurant Admiral Benbow! We can propose you best dishes of Old England.'

    div.append(h1)
    div.append(p)
}