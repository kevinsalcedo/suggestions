# Suggestions Web App

I took inspiration from the simplicity of the ChatGPT and Google Gemini UIs, framing the application in a similar fashion to a chat log. I went with a simple React web application using Vite's React template, and utilized a custom hook to read and write from the browser's local storage - a simple dictionary containing the request id along with the stringified code snippet and Visa Design components used within the snippet.

As for assumptions and shortcuts, I was less familiar with the grid system, and so I opted to just use Flexbox and normal CSS for layout rather than utilizing the responsive grid system. Given more time, I definitely would like to utilize grids for the overall page structure.

Given more time, I'd first hope to flesh out the Suggested Components section to contain docs-like explanations for each component, or at least links to relevant documentation when available. I'd also clean up and consolidate the Navigation codebase to make it more straightforward, and move more towards a chat-like experience where users can refine the request they made over multiple messages rather than just getting a response per user input. 

 In writing up this solution, I used Github Copilot to work through errors I ran into, as well as to help explain some properties of components such as Utility and UtilityFragment, since I didn't see much in the way of object properties on the Visa Design site. It's also been very helpful in helping to create basic boilerplate to work with to save time. 