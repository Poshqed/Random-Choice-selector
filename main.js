const tags = document.querySelector('.tags');
const textarea = document.querySelector('#choices');

textarea.focus()


textarea.addEventListener('keyup', (e) => {
    createTags(e.target.value);
    if (e.key === 'Enter') {
        setTimeout(() => {
            e.target.value = '';
        })
        randomSelect();
    }
})

function createTags(input) {
    const choices = input.split('&').filter(choice => choice.trim() !== '').map(choice => choice.trim())

    tags.innerHTML = ' '

    choices.forEach(choice => {
        const newSpan = document.createElement('span');
        newSpan.classList.add('tag');
        newSpan.innerText = choice;
        tags.appendChild(newSpan);
    });
}

function randomSelect() {
    const times = 30;

    const interval = setInterval(() => {
        const randomTag = pickRandomTag()


        highlightTag(randomTag)
        setTimeout(() => {
            unHighlightTag(randomTag)
        }, 100)
    }, 100);

    setTimeout(() => {
        clearInterval(interval)

        setTimeout(() => {
            const randomTag = pickRandomTag()
            highlightTag(randomTag)
        }, 100)
    }, times * 100)
}

function pickRandomTag() {
    const allTags = document.querySelectorAll('.tag');
    return allTags[Math.floor(Math.random() * allTags.length)]
}

function highlightTag(tag) {
    tag.classList.add('highlight')
}

function unHighlightTag(tag) {
    tag.classList.remove('highlight')
}