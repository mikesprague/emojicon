export default {
  async fetch(request, env) {
    return await handleRequest(request)
  }
}

async function handleRequest(request) {
  const url = new URL(request.url);
  const emoji = decodeURIComponent(url.pathname).replace('/', '');
  const cleanEmoji = emoji.replace(/&/g, '&amp;').replace(/</g, '&lt;');
  const returnBody = `<svg xmlns='http://www.w3.org/2000/svg' width='64' height='64' viewBox='0 0 17 17'><text x='-2' y='13'>${cleanEmoji}</text></svg>`;

  return new Response(returnBody, {
    headers: {
      'content-type': 'image/svg+xml;',
    },
  });
}
