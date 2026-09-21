# Quiz CLI

An interactive command-line quiz game for learning JavaScript, Node.js, and general programming concepts. The application is implemented with Node.js ES modules and uses only Node.js built-in APIs—no third-party runtime dependencies are declared.

> The runnable project is located in `test-app/`; this README is at the repository root.

## Features

- Interactive category selection from the terminal.
- Three question categories: JavaScript Basics, Node.js Fundamentals, and General Programming.
- Choice of all available questions, three questions, or five questions when the category has enough questions.
- Randomized question order using the Fisher–Yates shuffle algorithm.
- Numbered answer selection with validation and retry prompts.
- Per-question correctness feedback and explanations.
- Progress bar and final score percentage.
- Review of incorrect answers after each quiz.
- Option to play again without restarting the process.
- ANSI-colored terminal output implemented without an external color package.

## Technology stack

- **Runtime:** Node.js 18 or newer
- **Language/module system:** JavaScript with native ES modules (`"type": "module"`)
- **Input:** Node.js built-in `readline`
- **File loading:** Node.js built-in `fs/promises`, `path`, and `url`
- **Question data:** JSON
- **Testing command:** Node.js built-in test runner (`node --test`)

## Prerequisites

Install Node.js version 18 or newer. The required version is declared in `test-app/package.json` as:

```text
node >=18.0.0
```

No database, network service, API key, or environment variables are required by the application.

## Setup

From the repository root, enter the application directory:

```bash
cd test-app
```

The project has no declared dependencies, so there is no package installation step required. If you want to create a local npm lockfile or install lifecycle dependencies, npm can be run from `test-app`, but the committed manifest does not define any dependencies.

## Usage

Start the quiz with:

```bash
npm start
```

This runs `node index.js`. The application then:

1. Displays the quiz banner.
2. Prompts for a category.
3. Prompts for the number of questions.
4. Presents numbered choices for each question.
5. Displays correctness feedback and explanations.
6. Shows the final score and incorrect-answer review.
7. Asks whether to play again.

You can also launch the entry point directly:

```bash
node index.js
```

At selection prompts, enter the number corresponding to an option. For the replay prompt, enter a response beginning with `y` to continue; any other response ends the session.

## Question data

Questions are loaded at runtime from `test-app/data/questions.json`. The file contains a top-level `categories` object. Each category has a display `name` and a `questions` array. Each question contains:

- `question`: the prompt shown to the player
- `options`: an array of answer strings
- `answer`: the zero-based index of the correct option
- `explanation`: optional explanatory text shown after answering

To add or revise quiz content, update this JSON while preserving that structure. The application discovers category IDs from the JSON file, so newly added categories can appear in the category menu without changing the category-selection code.

## Project structure

```text
.
├── README.md
└── test-app/
    ├── package.json
    ├── index.js
    ├── data/
    │   └── questions.json
    └── src/
        ├── colors.js
        ├── input.js
        └── quiz.js
```

- `test-app/index.js` — application entry point, question loading, menu flow, replay loop, and top-level error handling.
- `test-app/src/input.js` — Promise-based wrappers around `readline`, including option selection, confirmation, and pause prompts.
- `test-app/src/quiz.js` — `Quiz` class, question shuffling, answer evaluation, progress display, scoring, and result review.
- `test-app/src/colors.js` — ANSI escape-code helpers for colored and styled terminal messages.
- `test-app/data/questions.json` — categories and quiz questions.
- `test-app/package.json` — npm metadata, scripts, module configuration, Node.js engine requirement, and MIT license declaration.

## Architecture and workflow

The application follows a small synchronous-command-line workflow with asynchronous input handling:

1. `index.js` resolves the project directory and reads `data/questions.json` with `fs/promises`.
2. Category IDs are derived from the JSON object and displayed through `select()` in `input.js`.
3. The selected category determines the available question count.
4. A `Quiz` instance copies and shuffles the selected questions.
5. `Quiz.askQuestion()` renders progress, gathers a numbered selection, records the answer, and prints feedback.
6. After all questions, `Quiz.showResults()` calculates the percentage and displays missed questions.
7. `confirm()` determines whether the main loop starts another round.

## Commands

Run commands from `test-app/`:

| Command | Description |
| --- | --- |
| `npm start` | Starts the interactive quiz (`node index.js`). |
| `npm test` | Runs Node.js's built-in test runner (`node --test`). |

The repository currently contains no test files, so `npm test` may report that no tests were discovered. No lint or build scripts are defined in `package.json`.

## Testing and validation

The declared test command is:

```bash
npm test
```

For a manual smoke test, run `npm start`, select each category, try valid and invalid numeric choices, answer questions, inspect the results, and test the replay prompt. The source code does not define a separate build step or CI workflow.

## Error handling and troubleshooting

- **`node: command not found` or an unsupported syntax error:** install Node.js 18 or newer and verify with `node --version`.
- **Questions cannot be loaded:** run the application from the repository checkout and confirm that `test-app/data/questions.json` exists and contains valid JSON.
- **The prompt rejects an answer:** enter a number within the displayed range. `select()` repeats until a valid option number is supplied.
- **Colors appear as escape characters:** the UI uses ANSI terminal escape codes; use a terminal with ANSI color support or disable/ignore styling at the terminal level. There is no color configuration in the application.
- **No tests are found:** `npm test` is configured, but no test files are present in the repository tree inspected for this README.

## Security and data handling

The application is local and interactive. It reads only the bundled questions file and standard input, and it does not define network access, credentials, secrets, persistence, or external integrations. Do not add secrets or private data to `questions.json` or source files.

## Contributing

No project-specific contribution guide is present. For changes, keep the existing ES module style, preserve the JSON question schema, update documentation when behavior changes, and run the available command(s) from `test-app/` before opening a pull request.

## License

`test-app/package.json` declares the project license as **MIT**. No separate license file is present in the repository listing.

## Repository notes and limitations

- The executable project is nested under `test-app/`, while this README is at the repository root.
- macOS metadata files (`.DS_Store` and `__MACOSX/` AppleDouble entries) are present in the repository listing but are not part of the application and are intentionally excluded from the documented structure.
- There is no documented deployment process because the application is a local CLI with no server or deployment configuration.
- There are no declared runtime dependencies, environment templates, database configuration, Docker files, CI workflows, or automated test files in the inspected repository.
