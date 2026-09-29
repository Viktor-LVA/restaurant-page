import './about.css'

export function insertAboutContent(div) {
    div.replaceChildren()

    const h1 = document.createElement('h1')
    const p = document.createElement('p')

    h1.textContent = 'Admiral Benbow Restaurant: About Tab'
    p.textContent = 'Welcome to our beautiful restaurant Admiral Benbow! We can propose you best dishes of Old England.'

    div.append(h1)
    div.append(p)
}