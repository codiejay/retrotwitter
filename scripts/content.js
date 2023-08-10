const replaceSvgWithImage = () => {
  const twitterLogo = document.querySelector('[aria-label="Twitter"]');
  const svgElement = twitterLogo?.querySelector('svg');

  if (!svgElement) return;

  const imgElement = document.createElement('img');
  imgElement.style.width = '30px';
  imgElement.src =
    'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Logo_of_Twitter.svg/512px-Logo_of_Twitter.svg.png?20220821125553';
  svgElement.replaceWith(imgElement);
};

const updatePostSpanText = () => {
  const composeTweet = document.querySelector('[href="/compose/tweet"]');
  const spanElements = composeTweet?.querySelectorAll('span');

  if (!spanElements) return;

  for (let span of spanElements) {
    if (span.textContent.trim() === 'Post') {
      span.innerText = 'Tweet';
      break;
    }
  }
};

const updateSiteIcon = () => {
  //Update the site icon to twitter icon
  const siteIcon = document.querySelector('link[rel="shortcut icon"]');
  siteIcon.href =
    'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Logo_of_Twitter.svg/512px-Logo_of_Twitter.svg.png?20220821125553';
    
};

const siteIcon = document.querySelector('link[rel="shortcut icon"]');
  siteIcon.href =
    'https://abs.twimg.com/responsive-web/client-web/icon-svg.168b89da.svg';

window.onload = () => {
  setTimeout(() => {
    replaceSvgWithImage();
    updatePostSpanText();
    // updateSiteIcon();
  }, 500);
};
