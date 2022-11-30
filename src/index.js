export default {
  async fetch(request, env) {
    return await handleRequest(request)
  }
}

const extractEmoji = (input) =>
  input.match(/\p{Emoji_Presentation}|\p{Symbol}/gu);

const cleanEmoji = (emoji) =>
  emoji.replace(/&/g, '&amp;').replace(/</g, '&lt;');

const emojiToSvg = (emoji) =>
  `<svg xmlns='http://www.w3.org/2000/svg' width='64' height='64' viewBox='0 0 17 17'><text x='-2' y='13'>${emoji}</text></svg>`;

async function handleRequest(request) {
  let returnEmoji = cleanEmoji('🚫');
  const url = new URL(request.url);
  const pathParam = decodeURIComponent(url.pathname).replace('/', '');
  const emojiArray = extractEmoji(pathParam);

  if (emojiArray && emojiArray.length) {
    returnEmoji = cleanEmoji(emojiArray[0]);
  }

  const returnBody = emojiToSvg(returnEmoji);

  return new Response(returnBody, {
    headers: {
      'content-type': 'image/svg+xml;',
    },
  });
}
