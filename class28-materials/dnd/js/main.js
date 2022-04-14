//Example fetch using DnD5eAPI - place subclasses in ul
document.querySelector('button').addEventListener('click', getFetch)

function getFetch() {
    const choice = document.querySelector('input').value
    const url = `https://www.dnd5eapi.co/api/spells/${choice}`

    fetch(url)
        .then(res => res.json()) // parse response as JSON
        .then(data => {
            console.log(data);
            const list = document.querySelector('ul');
            const name = document.querySelector('h2');
            const spellClass = document.querySelector('h3');
            // const subClasses = document.querySelector('h4');
            name.innerText = data.name;
            spellClass.innerText = data.classes[0].name;
            data.subclasses.forEach(e => {
                const item = document.createElement('li');
                item.innerText = e.name;
                list.appendChild(item);
            })
        })
        .catch(err => {
            console.log(`error ${err}`)
        });
}

