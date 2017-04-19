# Intel Edison NodeJS Server

* Simple example of an Express server that require the mraa library available on the intel Edison board.
* This could serve as a boilerplate to get started on an edison project requiring to have access to the GPIO.
* The server has only 2 routes now and basically lights up any LED plugged on the pin #12 for 500ms everytime the index route gets hit.

## How to use it

### Just log in to your board through terminal
ssh root@xxx.xxx.xx.x and enter your password

### Clone the this Repo
* run `npm install` to grab the dependencies 
* Make sure to edit the package.json if there is a particular library or version you want to work with
* run `npm start` to start the server

### Running the app
* The app runs on `http://xxx.xxx.xx.x:3000` (xxx.xxx.xx.x being the ip of the board)
* everytime you refresh the page the LED lights up

### Running tests

Coming soon!

### Receiving updates from upstream

Just fetch the changes and merge them into your project with git.

## App Structure
The Server:
- Node/express (generated using the express generator).
- Expect a basic out of the box express app folder structure.

The Client:
- coming soon

## Contact

Hit me up here on github

## License
MIT
