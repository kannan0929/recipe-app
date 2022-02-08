import icons from 'url:../../img/icons.svg';
import view from './view.js';

class resultsView extends view {
  _parentEl = document.querySelector('.results');
  _errorMessage = ' There is no results for the query you Entered';

  _generateMarkup() {
    console.log(this._data);
    return this._data.map(this._generateMarkupPreview).join('');
  }

  _generateMarkupPreview(results) {
    return `
    <li class="preview">
          <a class="preview__link " href="#${results.id}">
            <figure class="preview__fig">
              <img src="${results.image}" alt="${results.title}" />
            </figure>
            <div class="preview__data">
              <h4 class="preview__title">${results.title}</h4>
              <p class="preview__publisher">${results.publisher}</p>
            </div>
          </a>
        </li>
    `;
  }
}

export default new resultsView();
