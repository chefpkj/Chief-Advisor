# Chief Advisor                                  
A personal assistant powered by OpenAI using ReactJS and Tailwind CSS for frontend and NodesJs for backend providing seamless experience.
The app stores user interactions from earlier logged in sessions separately for every account in a MongoDB database.

## App Demo
Link to video

## To Run App In Your Local Machine
You need to write the following commands on the terminal screen so that you can run this project locally.

```bash
  git clone "https://github.com/chefpkj/Chief-Advisor.git"
```
Go to the project's directory
```bash
  cd Chief-Advisor 
```
### To setup backend
Go to the project's backend directory
```bash
  cd server
```
Install dependencies
```bash
  npm i
```

Start the backend server
```bash
  nodemon index.js
```
Now we have started our backend server successfully. We need to start our frontend server now.

### To setup frontend
Go to the project's directory
```bash
  cd client
```
Install dependencies
```bash
  npm i
```
Start the backend server
```bash
  npm start
```
This application should now be running on `localhost`. But If you'll try to run it, it won't show you anything because of CORS (browser security feature). To bypass this you need to write the following commands on the terminal screen.
```bash
  open -n -a /Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome --args --user-data-dir="/tmp/chrome_dev_test" --disable-web-security
```
It will open a new window of chrome with disabled CORS. Now you can explore Chief Advisor!! 

## Problems I Faced
I had some issues in updating my state variable "qna" , because of two useEffects and dependecies of other component on qna, my body component had some issues and it started re-rendering again and again that was giving me unexpected outcomes. So that was a bummer for me, but I overcame that problem shortly.

## Technologies Used
- React.js
- Parcel
- openai
- cors
- Node.js
- Bcypt
- Json Web Token
- Formik
- Joi
- Tailwind-CSS
- Shimmer-UI
