## This is a simple express app that converts written text into an image using the npm package `text-to-image`

This application has feature :
That allows users to input text into a form.
On form submission, application sends a POST request `/generateImage` to the server with the provided text input.
The server then generates an image from the provided text using any npm package `text-to-image` for image manipulation.
Server returns the image into desired format such as .png, .jpeg
Image is displayed in the .png format
