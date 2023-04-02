<h1> Deployed Project : <a href="https://texttoimage-4buf.onrender.com/" target="blank"> text-to-image </a></h1>
<h3> This is a simple express app that converts written text into an image. </h3>
<hr>

<h2>How to run the Application: </h2>
<hr>
1. Download the zip file or clone the repository into the project folder. </br>
2. Open the source code into your IDE (VScode, Atom) </br>
3. Run `npm install` </br>
4. Run `node index.js` or `nodemon index.js` </br>
5. Open `localhost:3000` into the browser. </br>
<hr>
<hr>

<h2>Features of the project : </h2>
<hr>
<h4> <li> A form that allows the user to input text. </h4>
<h4> <li> On form submission, application sends a POST request `/generateImage` to the server with the provided text input. </h4>
<h4> <li> The server generates an image from the provided text using npm package `text-to-image` </h4>
<h4> <li> The server returns the generated image as a response to the client in a desired format. </h4>
<h4> <li> The front end of hte application displays the returned image to the user. </h4>
<h4> <li> Application handles all the error messages. </h4>
<hr>


