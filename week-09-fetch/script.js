// Loads content for a Wikipedia article and displays it in the page.
async function loadContent() {
  const pageId = 'Minecraft';
  const response = await fetch(
    'https://en.wikipedia.org/w/api.php?' +
    'action=parse&formatversion=2&format=json&origin=*&page='
    + pageId);
  const json = await response.json();
  const article = json.parse;

  // Get the links in the Wikipedia article, and display them in the page.
  const linksElement = document.getElementById('links');
  for (const link of article.links) {
    const linkElement = document.createElement('a');
    linkElement.href = 'https://en.wikipedia.org/wiki/' + link.title;
    linkElement.innerText = link.title;

    const liElement = document.createElement('li');
    liElement.appendChild(linkElement);

    linksElement.appendChild(liElement);
  }

  	loadImages(article.images);
	loadSections(article.sections)
	loadSummary(article)
}

// Takes an array of image file names, uses the Wikipedia API to get the full
// URL for each one, and then displays them in the page.
async function loadImages(images) {
  const imagesContainer = document.getElementById('images');
  for (const image of images) {
    // image is a local filename (e.g. Cat.jpg), so call the Wikipedia API to
    // get the full URL for the image.
    const response = await fetch(
      'https://en.wikipedia.org/w/api.php'
      + '?action=query&prop=imageinfo&iiprop=url&format=json&formatversion=2&origin=*'
      + '&titles=Image:' + image );
      const json = await response.json();

      const imageUrl = json.query.pages[0].imageinfo[0].url;

      // Skip images that can't be displayed as img elements
      if (imageUrl.endsWith('.ogg')
          || imageUrl.endsWith('.tiff')
          || imageUrl.endsWith('.webm')
          || imageUrl.endsWith('.ogv')) {
        continue;
      }

      const imageElement = document.createElement('img');
      imageElement.src = imageUrl;
      imagesContainer.appendChild(imageElement);
  }
}

async function loadSections(sections){
  const linksElement = document.getElementById('sections');
  for (const section of sections) {

      const linkElement = document.createElement('p');

      linkElement.href = 'https://en.wikipedia.org/wiki/' + sections;
      linkElement.innerText = sections;

      const liElement = document.createElement('p');
      liElement.appendChild(linkElement);

      linksElement.appendChild(liElement);
      break;
    }
}

function loadSummary(article) {
  const linksElement = document.getElementById('summary');
  let summaryStart = article.text.indexOf('<i><b>Minecraft</b></i> is');
  let summaryEnd = summaryStart + 563;
  let summary = article.text.substring(summaryStart, summaryEnd);
  
	const linkElement = document.createElement('p');

      linkElement.href = 'summary: ' + summary;
      linkElement.innerHTML = summary;

      const liElement = document.createElement('p');
      liElement.appendChild(linkElement);

      linksElement.appendChild(liElement);
	
	
}