const news = [
    {
        id: 1,
        name: "News Title 1",
        author: "Author 1",
        date: "2022-01-01",
        text: "News Content 1"
    },
    {
        id: 2,
        name: "News Title 2",
        author: "Author 2",
        date: "2022-01-02",
        text: "News Content 2"
    },
    {
        id: 3,
        name: "News Title 3",
        author: "Author 3",
        date: "2022-01-03",
        text: "News Content 3"
    },
    {
        id: 4,
        name: "News Title 4",
        author: "Author 4",
        date: "2022-01-04",
        text: "News Content 4"
    },
    {
        id: 5,
        name: "News Title 5",
        author: "Author 5",
        date: "2022-01-05",
        text: "News Content 5"
    }
];

const accordionContainer = document.getElementById('accordion-container');

news.forEach((item) => {
    const accordionItem = document.createElement('div');
    accordionItem.setAttribute('class', 'accordion-item');

    const header = document.createElement('div');
    header.setAttribute('class', 'accordion-header');
    header.textContent = item.name;
    accordionItem.appendChild(header);

    const panel = document.createElement('div');
    panel.setAttribute('class', 'accordion-panel');
    panel.innerHTML = `
      <p><strong>Author:</strong> ${item.author}</p>
      <p><strong>Date:</strong> ${item.date}</p>
      <p>${item.text}</p>
    `;
    accordionItem.appendChild(panel);

    header.addEventListener('click', () => {
        panel.classList.toggle('active');
    });

    accordionContainer.appendChild(accordionItem);
});