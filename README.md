# Streamlit Resume Matcher

[![Streamlit App](https://static.streamlit.io/badges/streamlit_badge_black_white.svg)](https://cosine-resume.streamlit.app/)

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Installation](#installation)
- [Architecture](#architecture)
- [License](#license)

## Introduction

A simple resume matcher app built using Streamlit and Angular. The app calculates the match percentage between a job description and a resume using cosine similarity.

After opening the app, press F12 to force the Angular app to load via an iframe. Let me know how to fix this issue.

## Features

- Upload a job description and a resume
- Calculate the match percentage based on cosine similarity
- Display the results using Streamlit components

## Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/streamlit-resume-matcher.git
```

2. Install the required dependencies:

```bash
pip install -r requirements.txt
```

3. Please add a `.env` file in the root directory with the following content:

```bash
ENVIRONMENT=development
```

4. Run the Streamlit app:

```bash
streamlit run lib/main.py
```

or

```bash
python -m streamlit run lib/main.py
```

## Architecture

Personally, I don't like to count on Streamlit components for the frontend, so instead of building a custom component, I decided to embed an Angular app inside the Streamlit app. Angular is responsible for all the business logic and Streamlit handles the coming data and calculates the cosine similarity. Finally, the app uses the Streamlit components to display the results.

Please note there is an experimental feature called [st.experimental_fragment](https://docs.streamlit.io/develop/quick-reference/changelog), which might reinforce the data binding between the Angular app and the Streamlit app. The ideal scenario would be to use this feature to pass the data between the two apps. Use Angular to handle the business logic and UI. Let Streamlit only handle the Python code.

## License

This project is licensed under the [MIT License](https://github.com/WodenWang820118/streamlit-resume-matcher/blob/main/LICENSE).
