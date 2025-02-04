const HTMLheader = document.querySelector('Header');
const HTMLbody = document.querySelector('body');

function createHeader ()  {
    const Headertitle = document.createElement('div');
    Headertitle.setAttribute('class', 'title');
    Headertitle.innerHTML = `
    <h1 class="titletext">Keyboard Piano</h1>
    `;
    HTMLheader.append(Headertitle);

}
createHeader();