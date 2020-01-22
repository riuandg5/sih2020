# sih2020

Smart India Hackathon 2020 Problem Statements

## See my instance of app on [Heroku](https://sih20.herokuapp.com)

## Steps to run your own instance of app

### 1. `git clone git@github.com:riuandg5/sih2020.git`

### 2. `npm install`

### 3. Signup/Signin on [WrapApi v2](https://wrapapi.com/), bookmark the [API](https://wrapapi.com/api/riuandg5/sih/problems2020/latest) and generate your own API key.

### 4. Create Environment Variable with value as given (in production mode on hosting platform) OR create `config.json` file in root directory of cloned repository with the following content (in development mode on local machine).

```
// Environment Variables
    USERNAME = your wrapapi username
    REPOSITORY = your wrapapi repository name
    ENDPOINT = repository's endpoint name
    KEY = your wrapapi key
    TOTALPAGES = 36
```

```json
// config.json
{
  "username": "your wrapapi username",
  "repository": "your wrapapi repository name",
  "endpoint": "repository's endpoint name",
  "key": "your wrapapi key",
  "totalPages": 36
}
```

### 5. Deploy (on hosting platform) OR `npm start` (on local machine).
