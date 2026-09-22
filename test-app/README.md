# Quiz CLI

An interactive terminal quiz game covering JavaScript, Node.js, and general programming concepts. The application runs locally with Node.js and presents randomized multiple-choice questions with immediate feedback, explanations, progress tracking, scoring, and an incorrect-answer review.

## Features

- Choose among JavaScript Basics, Node.js Fundamentals, and General Programming.
- Select all available questions or a smaller 3- or 5-question quiz when that option is available.
- Randomize question order using Fisher-Yates shuffling.
- Validate interactive input and answer numbered multiple-choice questions.
- Show immediate correctness feedback, explanations, and a progress bar.
- Display a percentage score and performance message at the end.
- Review incorrect answers.
- Replay the quiz without restarting the application.
- Use ANSI colors and Unicode/emoji terminal output.

## Categories and quiz data

The bundled data currently contains five questions in each category, for 15 questions total:

- JavaScript Basics
- Node.js Fundamentals
- General Programming

Quiz content is stored in `data/questions.json`.

## Technology stack

- JavaScript using ES modules
- Node.js
- Node.js built-in test runner command (the project currently contains no test files)
- No third-party runtime or development dependencies

## Prerequisites

- Node.js 18.0.0 or newer, as declared in `package.json`.
- An interactive terminal that supports the application's ANSI color and Unicode/emoji output.

## Installation

From the repository root, change into the application directory:

```bash
cd test-app
```

Installing packages is optional. The project declares no dependencies, so this command does not install third-party packages:

```bash
npm install
```

## Running the quiz

Run the application from `test-app/` with either command:

```bash
npm start
```

or:

```bash
node index.js
```

Do not run these commands from the repository root unless you provide the corresponding `test-app/` path, because the application entry point and `package.json` are inside that directory.

## Interactive usage

1. Start the application.
2. Choose a quiz category.
3. Choose the number of questions: all available questions, 3, or 5 where available.
4. Press Enter to begin.
5. Answer each numbered multiple-choice question.
6. Read the immediate feedback, explanation, and progress information after each answer.
7. Review the final percentage score, performance message, and any incorrect answers.
8. Choose `y` or `n` when asked whether to replay.

The game is terminal-interactive and does not accept documented command-line flags.

## Project structure

```text
.
├── test-app/
│   ├── index.js              # Application entry point
│   ├── package.json           # npm metadata and scripts
│   ├── data/
│   │   └── questions.json     # Static quiz questions and answers
│   └── src/
│       ├── colors.js          # Terminal color formatting
│       ├── input.js           # Interactive input handling
│       └── quiz.js            # Quiz flow, scoring, and presentation
│
└── __MACOSX/, .DS_Store      # Repository metadata, not application files
```

## Quiz data customization

To customize the quiz, edit `test-app/data/questions.json` while preserving the existing directory layout and JSON structure.

Each question includes a set of answer options and an answer value represented as a **zero-based index** into that options list. For example, an answer value of `0` identifies the first option, `1` identifies the second option, and so on. Keep each answer index aligned with its question's options after making changes.

## Testing

The `test` script invokes Node.js's built-in test runner:

```bash
cd test-app
npm test
```

No test files are currently included, so this command does not represent project-specific automated test coverage. There are no configured linting, build, or type-check commands.

## Configuration and environment variables

This project has no environment variables, `.env` files, external services, database configuration, or persistence settings. Quiz content is static and is loaded from `data/questions.json`.

## Limitations

- The application requires an interactive terminal; it is not documented for non-interactive or piped use.
- ANSI colors and Unicode/emoji may not render correctly in every terminal.
- Quiz questions and results are local and in-memory. There is no network access, database, saved progress, leaderboard, or deployment configuration.
- The available content is limited to the questions currently present in `data/questions.json`.

## License

`package.json` declares the MIT license. No separate `LICENSE` file is currently present in the repository; consult the repository maintainers for the authoritative license text.
