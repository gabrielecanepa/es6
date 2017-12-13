// **HTTP**
// HyperTextTransferProtocol, to transfer hypertexts among servers
// Every time a page is loaded other HTTP requests are done (for external resources, scripts, stylesheets, images, apis, fonts, ...)

// HTTP GET Request
// Usually an HTTP request is done with a GET method, containing an URL and an header.
// An header example:
// Accept:text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8 // -> asks for an html file
// Accept-Encoding:gzip, deflate // -> tells the server to accept compression
// Accept-Language:en-GB,en;q=0.9,en-US;q=0.8,it;q=0.7,pt;q=0.6,la;q=0.5 // -> languages set as favourites in the browser
// Cache-Control:max-age=0 // -> checks if the browser is capable of caching content (check https://cachingexplained.com/)
// Connection:keep-alive
// Host:perdu.com
// Upgrade-Insecure-Requests:1
// User-Agent:Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/62.0.3202.94 Safari/537.36 // -> the html can be changed based on the device used

// HTTP POST Request
// In a POST request there is still an URL and an header, but there is also a body.
// In a POST request the user is sending 'new' informations to the server; it usually happens when a form is sent

// curl
// -> terminal command use to test and make an HTTP request from the bash and get the body of the response, e.g. curl http://example.org
// curl -I
// -> to get the header of the response
// curl -i
// -> to get both header and body
// The HTTP answer is a code, 200 is ok, 404 page not found, 301 and 302 is redirection, 500 is server error


// **AJAX**
// Asynchronous JavaScript And XML is an HTTP request which is done inside the browser after the page is loaded
// Is used when new informations are available (chat, social networks, chats, ...), the first big website to use it was GMail
// For example in Algolia (https://community.algolia.com/places/) there is an AJAX request every time a charachter is typed
// In inspector XHR is used to filter AJAX HTTP requests
// The response is a JSON response that can be parsed as a JavaScript object, that can then build HTML elements

// AJAX Requests (Fetch)
// The old way to send an AJAX request is to use the XML HTTP Request (https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest)
// The best and easier way is to use fetch.

