# Answer Explanation:

# Solution Guide — Build an AI-Powered Web App

## Table of Contents

1. [Before You Start — Read This First](#1-before-you-start--read-this-first)
2. [Get Your Free Gemini API Key](#2-get-your-free-gemini-api-key)
3. [Install & Set Up Cursor](#3-install--set-up-cursor)
4. [Choose Your App](#4-choose-your-app)
5. [Full Code — Option A: ELI5 Explainer](#5-full-code--option-a-eli5-explainer)
6. [Full Code — Option B: Fridge Hero](#6-full-code--option-b-fridge-hero)
7. [Understanding the Code (Plain English)](#7-understanding-the-code-plain-english)
8. [API Troubleshooting — Errors & Fixes](#8-api-troubleshooting--errors--fixes)
9. [How to Submit](#9-how-to-submit)

# 1. Before You Start — Read This First

This guide will take you from a blank screen to a fully working AI-powered web app. You do not need to know how to code beforehand. Every step is explained in plain language.

**What you will build:** A single HTML file that connects to Google's AI (Gemini) and gives intelligent answers based on what the user types in.

**How you will build it:** Mostly using **Cursor** — an AI-powered code editor. You describe what you want in plain English, and it writes the code for you.

> **⚠️ Important — Do Not Skip** You must use your own Gemini API key to run this app. Without a valid API key, nothing will work. Getting one is free and takes about 2 minutes. Follow Step 2 carefully before doing anything else.

> **💡 Tip: Use Cursor's AI chat throughout** Whenever you are stuck, describe your problem in Cursor's chat panel. Example: _"My button is not doing anything when I click it. Here is my code. What is wrong?"_ — Cursor will explain and fix it for you.

---

# 2. Get Your Free Gemini API Key

An **API key** is like a password that proves to Google that you are allowed to use their AI service. Without it, the app has no way to talk to Gemini. Getting one is completely free.

**Step 1** — **Go to Google AI Studio** Open your browser and visit: `https://aistudio.google.com`

**Step 2** — **Sign in with your Google account** Any Gmail account works. Click "Sign in" and log in.

**Step 3** — **Click "Get API Key"** Look for the button labeled Get API Key on the left sidebar or the main screen. Click it.

**Step 4** — **Create a new API key** Click **Create API key** → then select **Create API key in new project**. A long string of letters and numbers will appear on screen. That is your API key.

**Step 5** — **Copy it and save it somewhere safe** Click the copy icon next to the key. Paste it into a Notepad or Notes file on your computer. You will need it very soon.

**What does an API key look like?** It is a long string like this (yours will be different):

> AIzaSyB3kXmP8nQrT2vW9uLdCeF6gHjKoYiNpAs

> **🔐 Never share your API key publicly.** Do not post it on social media, GitHub, or WhatsApp groups. If someone else uses your key, your usage quota will be consumed. For this assignment only, it is acceptable to place it directly in your HTML file.

> **💡 Free Tier Limits:** The free Gemini API gives you 15 requests per minute and 1,500 requests per day. This is more than enough for this assignment.

---

# 3. Install & Set Up Cursor

Cursor is a code editor — think of it like Microsoft Word, but for writing code. What makes it special is that it has an AI assistant built inside. You describe what you want and it writes the code for you.

**Step 1** — **Download Cursor** Visit `https://cursor.com` and click the **Download** button. Choose the version for your operating system (Windows or macOS).

**Step 2** — **Install it like any normal app**

- On **Windows**: Open the downloaded `.exe` file and click **Next** → **Next** → **Install**.
- On **Mac**: Open the `.dmg` file and drag Cursor into your Applications folder.

**Step 3** — **Open Cursor and create a project folder** Open Cursor. Click **File** → **Open Folder**. Create a new empty folder anywhere on your computer — name it something like `my-ai-app`. Open that folder in Cursor.

**Step 4** — **Create your HTML file** In the left panel (the file explorer), right-click and choose **New File**. Name the file exactly: `index.html` — this is the only file you need to work on.

**Step 5** — **Open the Cursor AI Chat** Press **Ctrl + L** (Windows) or **Cmd + L** (Mac) to open the AI chat panel on the right side. This is where you will type instructions in plain English.

> **💡 How to use Cursor's AI Chat effectively** Be specific. Instead of "make a button," say: "Add a button that says 'Explain This' and when clicked, it reads the text from the input box and sends it to the Gemini API." The more detail you give, the better the result.

---

# 4. Choose Your App

You only need to build one of the two options below.

**Option A — ELI5 Explainer** The user types any complex topic (like "What is quantum physics?") and clicks a button. The app asks Gemini to explain it as if the user is 5 years old.

**Option B — Fridge Hero** The user types 3 ingredients they have at home. Clicks "Cook Magic". The app asks Gemini for a fancy dish name and a 3-step recipe, displayed as a styled card.

Both options use the exact same technology. The only difference is the number of input fields and the prompt sent to Gemini.

> **💡 Recommendation for first-timers:** Option A (ELI5) is slightly simpler because it only has one input box. Go for Option B if you want the extra challenge.

---

# 5. Full Code — Option A: ELI5 Explainer

Copy the entire code below into your `index.html` file.

Then find the line that says `YOUR_API_KEY_HERE` and **replace it with the actual API key you copied in Step 2**. It should look like:

```javascript
const API_KEY = "AIzaSyB3kXm...";
```

(Use your real key, not the example above.)

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>ELI5 Explainer</title>
    <style>
      * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
      }

      body {
        font-family: "Segoe UI", sans-serif;
        background: #f0f4ff;
        min-height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 20px;
      }

      .container {
        background: white;
        border-radius: 20px;
        box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12);
        padding: 40px;
        max-width: 600px;
        width: 100%;
      }

      h1 {
        font-size: 28px;
        color: #2d3a8c;
        margin-bottom: 8px;
      }

      .subtitle {
        color: #888;
        margin-bottom: 28px;
        font-size: 15px;
      }

      input[type="text"] {
        width: 100%;
        padding: 14px 18px;
        border: 2px solid #dde3f5;
        border-radius: 12px;
        font-size: 15px;
        outline: none;
        transition: border 0.2s;
        margin-bottom: 16px;
      }

      input[type="text"]:focus {
        border-color: #4f8ef7;
      }

      button {
        width: 100%;
        padding: 14px;
        background: #4f8ef7;
        color: white;
        border: none;
        border-radius: 12px;
        font-size: 16px;
        font-weight: 600;
        cursor: pointer;
        transition:
          background 0.2s,
          transform 0.1s;
      }

      button:hover {
        background: #3a7be0;
      }
      button:active {
        transform: scale(0.98);
      }
      button:disabled {
        background: #aac4f5;
        cursor: not-allowed;
      }

      #result {
        margin-top: 28px;
        padding: 24px;
        background: #f7f9ff;
        border: 1px solid #dde3f5;
        border-radius: 14px;
        font-size: 15px;
        line-height: 1.8;
        color: #333;
        display: none;
      }

      #error {
        margin-top: 16px;
        padding: 14px 18px;
        background: #fff0f0;
        border: 1px solid #ffd0d0;
        border-radius: 10px;
        color: #c0392b;
        font-size: 14px;
        display: none;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <h1>🧒 ELI5 Explainer</h1>
      <p class="subtitle">
        Type anything confusing. Get the simplest explanation possible.
      </p>

      <input
        type="text"
        id="topicInput"
        placeholder="e.g. How does the internet work?"
      />

      <button id="explainBtn" onclick="explainTopic()">
        Explain Like I'm 5 ✨
      </button>

      <div id="error"></div>
      <div id="result"></div>
    </div>

    <script>
      // ── Put your Gemini API key between the quotes below ──
      const API_KEY = "YOUR_API_KEY_HERE";

      // ── This is the address of the Gemini AI service ──
      // The ${API_KEY} part automatically inserts your key into the URL
      const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${API_KEY}`;

      // ── This function runs when the button is clicked ──
      async function explainTopic() {
        // Read whatever the user typed in the input box
        const topic = document.getElementById("topicInput").value.trim();
        const btn = document.getElementById("explainBtn");
        const resultBox = document.getElementById("result");
        const errorBox = document.getElementById("error");

        // If the box is empty, stop here and warn the user
        if (!topic) {
          alert("Please type a topic first!");
          return;
        }

        // Show "Loading..." while waiting for Gemini's reply
        btn.textContent = "Loading... ⏳";
        btn.disabled = true;
        resultBox.style.display = "none";
        errorBox.style.display = "none";

        // This is the message (prompt) we will send to Gemini
        const prompt = `Explain "${topic}" as if I am 5 years old. Use simple words, a short story or analogy, and make it fun.`;

        try {
          // Send the request to Gemini
          const response = await fetch(API_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              contents: [{ parts: [{ text: prompt }] }],
            }),
          });

          // If Gemini returned an error (e.g. wrong API key), show what went wrong
          if (!response.ok) {
            const errData = await response.json();
            throw new Error(errData.error?.message || "API request failed");
          }

          // Parse Gemini's reply
          const data = await response.json();

          // Dig into the response structure to get the actual text
          // Think of it like opening nested boxes: data > candidates > content > parts > text
          const text = data.candidates[0].content.parts[0].text;

          // Show the result on the page (replace line breaks with HTML line breaks)
          resultBox.innerHTML = text.replace(/\n/g, "<br/>");
          resultBox.style.display = "block";
        } catch (err) {
          // If anything went wrong, show a readable error message
          errorBox.textContent = "❌ Error: " + err.message;
          errorBox.style.display = "block";
        } finally {
          // This always runs — even if there was an error — to restore the button
          btn.textContent = "Explain Like I'm 5 ✨";
          btn.disabled = false;
        }
      }
    </script>
  </body>
</html>
```

---

# 6. Full Code — Option B: Fridge Hero

Same instructions: copy everything below into `index.html`, then replace `YOUR_API_KEY_HERE` with your actual Gemini API key.

````html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Fridge Hero</title>
    <style>
      * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
      }

      body {
        font-family: "Segoe UI", sans-serif;
        background: linear-gradient(135deg, #fff8e7 0%, #fff0d0 100%);
        min-height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 20px;
      }

      .container {
        background: white;
        border-radius: 24px;
        box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
        padding: 40px;
        max-width: 560px;
        width: 100%;
      }

      h1 {
        font-size: 30px;
        color: #c0392b;
        margin-bottom: 6px;
      }
      .subtitle {
        color: #999;
        margin-bottom: 30px;
        font-size: 14px;
      }

      label {
        display: block;
        font-size: 13px;
        font-weight: 600;
        color: #555;
        margin-bottom: 6px;
        margin-top: 14px;
      }

      input[type="text"] {
        width: 100%;
        padding: 13px 16px;
        border: 2px solid #ffe0b2;
        border-radius: 12px;
        font-size: 15px;
        outline: none;
        transition: border 0.2s;
      }

      input[type="text"]:focus {
        border-color: #ff8c42;
      }

      button {
        margin-top: 24px;
        width: 100%;
        padding: 15px;
        background: #e74c3c;
        color: white;
        border: none;
        border-radius: 14px;
        font-size: 16px;
        font-weight: 700;
        cursor: pointer;
        letter-spacing: 0.5px;
        transition:
          background 0.2s,
          transform 0.1s;
      }

      button:hover {
        background: #c0392b;
      }
      button:active {
        transform: scale(0.98);
      }
      button:disabled {
        background: #f1948a;
        cursor: not-allowed;
      }

      /* ── Recipe Card ── */
      #recipeCard {
        margin-top: 30px;
        background: #fffbf0;
        border: 1px solid #ffe0b2;
        border-radius: 18px;
        box-shadow: 0 4px 18px rgba(231, 76, 60, 0.1);
        padding: 28px 30px;
        display: none;
      }

      .dish-name {
        font-size: 22px;
        font-weight: 800;
        color: #c0392b;
        margin-bottom: 16px;
      }

      .recipe-steps {
        list-style: none;
        padding: 0;
      }

      .recipe-steps li {
        display: flex;
        gap: 14px;
        padding: 12px 0;
        border-bottom: 1px dashed #ffe0b2;
        font-size: 14px;
        line-height: 1.6;
        color: #444;
      }

      .recipe-steps li:last-child {
        border-bottom: none;
      }

      .step-badge {
        flex-shrink: 0;
        width: 26px;
        height: 26px;
        background: #e74c3c;
        color: white;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 12px;
        font-weight: 700;
        margin-top: 2px;
      }

      #error {
        margin-top: 16px;
        padding: 14px;
        background: #fff0f0;
        border: 1px solid #ffd0d0;
        border-radius: 10px;
        color: #c0392b;
        font-size: 14px;
        display: none;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <h1>🍳 Fridge Hero</h1>
      <p class="subtitle">
        Tell me what's in your fridge. I'll make something amazing.
      </p>

      <label for="ing1">Ingredient 1</label>
      <input type="text" id="ing1" placeholder="e.g. Eggs" />

      <label for="ing2">Ingredient 2</label>
      <input type="text" id="ing2" placeholder="e.g. Spinach" />

      <label for="ing3">Ingredient 3</label>
      <input type="text" id="ing3" placeholder="e.g. Cheese" />

      <button id="cookBtn" onclick="cookMagic()">🪄 Cook Magic</button>

      <div id="error"></div>
      <div id="recipeCard">
        <div class="dish-name" id="dishName"></div>
        <ul class="recipe-steps" id="recipeSteps"></ul>
      </div>
    </div>

    <script>
      // ── Put your Gemini API key between the quotes below ──
      const API_KEY = "YOUR_API_KEY_HERE";

      // ── This is the address of the Gemini AI service ──
      const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${API_KEY}`;

      // ── This function runs when the button is clicked ──
      async function cookMagic() {
        const ing1 = document.getElementById("ing1").value.trim();
        const ing2 = document.getElementById("ing2").value.trim();
        const ing3 = document.getElementById("ing3").value.trim();
        const btn = document.getElementById("cookBtn");
        const card = document.getElementById("recipeCard");
        const errorBox = document.getElementById("error");

        // Make sure all three ingredient fields are filled in
        if (!ing1 || !ing2 || !ing3) {
          alert("Please fill in all 3 ingredients!");
          return;
        }

        // Show "Loading..." while waiting for Gemini's reply
        btn.textContent = "🪄 Cooking Magic... ⏳";
        btn.disabled = true;
        card.style.display = "none";
        errorBox.style.display = "none";

        // Ask Gemini to reply in a specific JSON format so we can display it as a card
        const prompt = `I have these 3 ingredients: ${ing1}, ${ing2}, and ${ing3}.
Give me a creative fancy dish name and exactly 3 simple cooking steps.
Respond ONLY with a valid JSON object and nothing else — no explanation, no markdown, no extra text.
Use this exact format:
{
  "dishName": "Name of the dish",
  "steps": ["Step 1 description", "Step 2 description", "Step 3 description"]
}`;

        try {
          // Send the request to Gemini
          const response = await fetch(API_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              contents: [{ parts: [{ text: prompt }] }],
            }),
          });

          // If Gemini returned an error (e.g. wrong API key), show what went wrong
          if (!response.ok) {
            const errData = await response.json();
            throw new Error(errData.error?.message || "API request failed");
          }

          // Parse Gemini's reply
          const data = await response.json();
          const rawText = data.candidates[0].content.parts[0].text;

          // Clean up the response:
          // Sometimes Gemini wraps JSON in ```json ... ``` — this removes those wrappers
          const cleaned = rawText.replace(/```json|```/g, "").trim();

          // Extract just the JSON object { ... } even if there's any extra text around it
          const jsonMatch = cleaned.match(/\{[\s\S]*\}/);
          if (!jsonMatch) {
            throw new Error(
              "AI returned an unexpected format. Please try again.",
            );
          }

          // Parse the JSON text into a JavaScript object we can work with
          const recipe = JSON.parse(jsonMatch[0]);

          // Populate the recipe card with the dish name
          document.getElementById("dishName").textContent =
            "🍽 " + recipe.dishName;

          // Add each step as a list item with a numbered badge
          const stepsList = document.getElementById("recipeSteps");
          stepsList.innerHTML = "";
          recipe.steps.forEach((step, i) => {
            stepsList.innerHTML += `
            <li>
              <span class="step-badge">${i + 1}</span>
              <span>${step}</span>
            </li>`;
          });

          card.style.display = "block";
        } catch (err) {
          // If anything went wrong, show a readable error message
          errorBox.textContent = "❌ Error: " + err.message;
          errorBox.style.display = "block";
        } finally {
          // This always runs — even if there was an error — to restore the button
          btn.textContent = "🪄 Cook Magic";
          btn.disabled = false;
        }
      }
    </script>
  </body>
</html>
````

---

# 7. Understanding the Code (Plain English)

You must understand the code you submit. Here is a plain-English explanation of every important piece.

---

## The API Key and URL

```javascript
const API_KEY = "YOUR_API_KEY_HERE";
const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${API_KEY}`;
```

Think of the API URL as the **address of a restaurant**. The API key is your **reservation number**. Without it, the restaurant won't serve you.

Notice the backtick characters (`` ` ``) around the URL — these are not regular quotes. They are called a _template literal_ in JavaScript. They let you insert a variable's value directly inside a string using `${variableName}`. So `${API_KEY}` gets replaced with your actual key when the code runs.

---

## async function and await

```javascript
async function explainTopic() {
const response = await fetch(...);
}
```

`async` means: _"This function will do something that takes time — like a network request."_

`await` means: _"Stop here and wait until the result comes back before moving on."_

Without `await`, JavaScript would skip ahead to the next line before the data has arrived, giving you nothing to work with.

---

## The fetch() call

```javascript
const response = await fetch(API_URL, {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    contents: [{ parts: [{ text: prompt }] }],
  }),
});
```

`fetch` is the browser's built-in tool for making network requests.

- `method: "POST"` — we are _sending_ data to the server (not just loading a page)
- `headers` — tells the server the format of the data we're sending (JSON)
- `body` — the actual message we are sending. `JSON.stringify` converts a JavaScript object into a text string that can be sent over the internet

---

## Extracting the reply

```javascript
const data = await response.json();
const text = data.candidates[0].content.parts[0].text;
```

Gemini's response is a deeply **nested object** — like a box inside a box inside a box.

Reading it step by step:

- `data` — the entire response
- `.candidates[0]` — take the first candidate answer (there is only one)
- `.content` — the content object inside that candidate
- `.parts[0]` — take the first part (there is only one)
- `.text` — the actual text of Gemini's reply
  That final `.text` is the AI-generated answer you display on screen.

---

## try / catch / finally

```javascript
try {
  // code that might fail
} catch (err) {
  // what to do if it fails — show an error message
} finally {
  // always runs no matter what — used to restore the button
}
```

This is your **safety net.** If the API call fails for any reason (wrong key, no internet, quota exceeded), instead of crashing silently, the `catch` block shows a readable error message. `finally` always runs — even if there was an error — which is why the button restoration code goes here.

---

## Why does Option B use JSON.parse?

In Option B, we specifically ask Gemini to reply in **JSON format** so we can split the response into a dish name and separate steps and display them beautifully in a recipe card.

`JSON.parse` converts the text string from Gemini's reply into an actual JavaScript object that we can work with, like `recipe.dishName` and `recipe.steps`.

---

# 8. API Troubleshooting — Errors & Fixes

This is the section most students will need. Match your error to one of the fixes below.

---

## ❌ Error: `API_KEY_INVALID or 400 Bad Request`

**What it means:** Your API key is wrong, has extra spaces, or still contains the placeholder text `YOUR_API_KEY_HERE`.

**Fix:** Go back to `aistudio.google.com`, copy your key again carefully. Open your `index.html` file and find this line:

```js
const API_KEY = "YOUR_API_KEY_HERE";
```

Replace `YOUR_API_KEY_HERE` with your actual key. Make sure there are no spaces inside the quotes before or after the key. Save the file and try again.

---

## ❌ Error: `403 Forbidden or API not enabled`

**What it means:** The Gemini API is not active for your Google project.

**Fix:** Go to aistudio.google.com and create a new API key by selecting "Create API key in new project". New projects have the API enabled by default. Replace the old key in your code with the new one.

---

## ❌ Error: `429 Too Many Requests or RESOURCE_EXHAUSTED`

**What it means:** You have hit the free rate limit. The free tier allows 15 requests per minute.

**Fix:** Wait 60 seconds and try again. If it keeps happening, you may have hit the daily limit of 1,500 requests. Wait until the next day — the quota resets automatically every 24 hours.

---

## ❌ Error: `Failed to fetch or the button does nothing at all`

**What it means:** The browser could not reach the Gemini API. There are two common causes.

**Fix — Check your internet connection first.** Open any website in your browser. If nothing loads, you have no internet connection.

**Fix — Check you replaced the API key.** If you forgot to replace `YOUR_API_KEY_HERE`, fetch will fail. Check that line in your code.

**Fix — Try a different browser.** If Chrome is not working, try Firefox or Edge. Sometimes browser extensions can interfere with network requests.

If none of the above works, open the **Browser Console**: Press **F12** → Click the **Console** tab. Look for a red error message. Copy that message and paste it into Cursor's AI chat and ask: _"I got this error in my browser console: [paste error here]. What does it mean and how do I fix it?"_

---

## ❌ Button clicks but nothing happens at all (no error shown either)

**What it means:** There is likely a JavaScript syntax error that is preventing any code from running at all.

**Fix:** Press **F12** to open **Developer Tools** → Click the **Console** tab. If you see any red error messages there, that is your problem. Copy the exact error text and paste it into Cursor's AI chat: _"I got this console error: [paste error here]. Here is my code: [paste code]. Please fix it."_

---

## ❌ `SyntaxError: Unexpected token` when displaying the recipe (Option B only)

**What it means:** The JSON Gemini sent back could not be parsed. This usually means Gemini added some text before or after the JSON.

**Fix:** The code already handles this with the `cleaned.match(/\{[\s\S]\*\}/)` line, which extracts just the JSON block even if there is extra text around it. If you still see this error, it means Gemini sent something very unusual. Try clicking the button again — it often resolves on the next attempt. If it keeps failing, add this line **after** `const rawText = ...` to see what Gemini actually returned:

```javascript
console.log("Raw response:", rawText);
```

Then press **F12**, check the **Console**, and paste what you see there into Cursor's chat for help.

---

## ❌ `Cannot read properties of undefined (reading 'content')`

**What it means:** Gemini returned a response, but it was blocked by its own safety filters, or the API key quota is exhausted.

**Fix:** Try a different, more neutral topic or ingredient. Also check `aistudio.google.com` to see if you have remaining quota. If the daily quota is exhausted, the page will show a usage warning.

> 🔍 **How to use Browser DevTools for debugging** Press F12 in your browser → Go to the Network tab → Click your button → A new entry will appear in the list. Click on it → Click Response to see exactly what Gemini sent back. This will show you the raw reply and any error messages directly from Google's server.

> 🤖 **Using Cursor to debug** Copy the exact error message from the console, paste it into Cursor's chat, and say: "I got this error: [paste error]. Here is my code: [paste code]. What is wrong and how do I fix it?" Cursor will almost always give you the exact fix.

---

# 9. How to Submit

**Step 1 — Test your app one final time** Double-click your `index.html` file to open it in your browser. Try it with a real input. Make sure the result appears on the page — not just in the browser console.

**Step 2 — Locate your file** Find the `index.html` file inside the folder you created (e.g., `my-ai-app`). That is the only file you need.

**Step 3 — Submit the file** Upload the `index.html` file directly to the submission portal. Do not submit the entire folder, a ZIP file, a screenshot, or a video. The evaluator needs the actual working HTML file.

> ✅ **What a good submission looks like** A single `index.html` file that opens in a browser, looks styled and clean, accepts user input, calls the Gemini API on button click, and displays a result on the page. That is all that is expected.

---

_Solution Guide — Assignment #1 · Build an AI-Powered Web App · For Internal Use Only_
