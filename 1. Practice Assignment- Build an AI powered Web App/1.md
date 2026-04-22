# Practice Assignment: Build an AI Powered Web App

## Overview

Your goal is to build a small but complete web application that uses Google Gemini's free API to give it real intelligence.

You will use Cursor, an AI powered code editor, to help you scaffold and write the code. The goal is not to write every line manually. The goal is to learn how to direct AI tools to build something functional and presentable.

You will pick one of the two app ideas below and submit a working single page web app.

---

## Choose Your App

### Option A: ELI5 Explainer

The user types any complicated topic into a text box, clicks a button, and the app calls Gemini to explain it back in the simplest possible language, as if explaining to a five year old.

### Option B: Fridge Hero

The user enters three ingredients they have at home into three separate input fields, clicks a "Cook Magic" button, and the app returns a fancy dish name with a three step recipe.

The result should be displayed as a styled recipe card.

---

## What You Need to Set Up First

### 1. Get Your Free Gemini API Key

- Go to https://aistudio.google.com
- Sign in with any Google account
- Click "Get API Key" and then "Create API Key"
- Copy and save it. You will need it in your code

**Important:** Never share your API key publicly. For this assignment, placing it directly inside your HTML file is acceptable.

---

### 2. Install and Open Cursor

- Download Cursor from https://cursor.com
- Install it like any normal application
- Open it and create a new empty folder as your project

**Tip:** Use the chat panel in Cursor. Describe what you want in plain English and let it generate or modify code. You are expected to take help from Cursor throughout this assignment.

---

## What You Have to Build

### Part 1: The HTML Structure

Create a single file called `index.html`. It must contain:

- A page heading with your app's name
- For Option A: One text input field and one submit button
- For Option B: Three separate text input fields labeled:
  - Ingredient 1
  - Ingredient 2
  - Ingredient 3
- One button labeled "Cook Magic"
- An empty container div below the button where the result will appear

**Tip for Cursor:**  
"Create a clean HTML page for a Fridge Hero app with three ingredient input fields and a Cook Magic button."

---

### Part 2: Calling the Gemini API

Inside a `<script>` tag or a linked JavaScript file, write a function that:

- Reads input values when the button is clicked
- Builds a clear and specific prompt string
- Makes a `fetch` POST request to the Gemini API
- Extracts the response text
- Displays it inside your result container

## API Endpoint

```
https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=YOUR_API_KEY
```

---

## Request Body Format

```json
{
  "contents": [
    {
      "parts": [{ "text": "YOUR PROMPT HERE" }]
    }
  ]
}
```

---

## Extracting Response

```javascript
const data = await response.json();
const result = data.candidates[0].content.parts[0].text;
```

---

## Tips for Cursor

- Generate an async function using `fetch`
- Add a `try-catch` block for error handling
- Ask Cursor to explain each part of the API call

---

## Prompt Engineering Tip

### Fridge Hero

"I have [ingredient1], [ingredient2], and [ingredient3]. Give me a fancy dish name and a simple 3 step recipe."

### ELI5

"Explain [topic] as if I am five years old."

---

## Part 3: Styling the Output

Your app should not look like a plain HTML page. At minimum:

- Add a background color and centered layout
- Style the button (color, padding, cursor pointer)

### For Option B (Recipe Card)

- Light background
- Rounded corners (`border-radius`)
- Shadow (`box-shadow`)
- Padding

---

## Part 4: Loading State

When the user clicks the button:

- Change button text to "Loading..."
- Restore original text after response

---

## Final Requirements Summary

| Requirement        | Details                        |
| ------------------ | ------------------------------ |
| Single HTML file   | Everything inside `index.html` |
| Input fields       | Based on chosen option         |
| API integration    | Gemini API call works          |
| Response displayed | Output shown on page           |
| Styled output      | Clean UI / recipe card         |
| Loading state      | Button feedback implemented    |
| Responsive layout  | Works on mobile & desktop      |

---

## What to Submit

- Your `index.html` file

---

## Important Reminder

The goal is **not memorizing syntax**.

You should demonstrate:

- Using AI tools like Cursor effectively
- Building a working AI app
- Understanding API calls
- Applying prompt engineering
- Integrating AI into a real interface

You are expected to take help from Cursor, Gemini, or similar AI tools. However, you must understand the code you submit.
