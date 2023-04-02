<h2> text-to-image </h2>
This is a simple express app that converts written text into an image.

<h3>Requirements of the project: </h3>
<p> A form that allows the user to input text. </p>
<p> On form submission, your application should send a POST request to the server with the provided text input. </p>
<p> The server should generate an image from the provided text using any Node.js library for image manipulation. </p>
<p> The server should return the generated image as a response to the client in a desired format, such as 'jpeg', 'png', or 'gif'. </p>
<p> The front end should display the returned image to the user. </p>
<p> Your modified application should handle errors gracefully. If the provided text input is invalid or cannot be used to generate an image, your application should display an appropriate error message to the user. </p>

<h2> This application has features : </h2>
<h4> That allows users to input text into a form. </h4>
<h4> On form submission, application sends a POST request `/generateImage` to the server with the provided text input. </h4>
<h4> The server then generates an image from the provided text using any npm package `text-to-image` for image manipulation. </h4>
<h4> Server returns the image into desired format such as .png, .jpeg </h4>
<h4> Image is displayed in the .png format </h4>
