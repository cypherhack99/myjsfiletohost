<!--[ Script to activate ToC ]-->

  document.addEventListener('DOMContentLoaded', () =>
  new TableOfContents({
      from: document.querySelector('#postBody'),
      to: document.querySelector('#toContent')
  }).generateToc()
);

