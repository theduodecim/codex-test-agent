# 🚀 Codex Test Agent

![CI](https://github.com/theduodecim/codex-test-agent/actions/workflows/ci.yml/badge.svg)
![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Node](https://img.shields.io/badge/node-22.x-green.svg)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue.svg)

A minimal, production-ready TypeScript project configured with **Vitest** and **GitHub Actions CI**.

This repository serves as a clean template for building, testing, and validating TypeScript projects using automated CI pipelines.

---

## 📦 Tech Stack

- **TypeScript**
- **Vitest**
- **Node.js 22**
- **GitHub Actions**
- **MIT License**

---

## 📁 Project Structure

```
.
├── src/
│   └── index.ts
├── tests/
│   └── index.test.ts
├── .github/workflows/
│   └── ci.yml
├── package.json
├── tsconfig.json
├── vitest.config.ts
└── README.md
```

---

## 🚀 Getting Started

### 1️⃣ Install dependencies

```bash
npm install
```

### 2️⃣ Run tests

```bash
npm test
```

### 3️⃣ Run in watch mode

```bash
npx vitest
```

---

## 🧪 Test Coverage (Optional)

If coverage is enabled:

```bash
npm run coverage
```
## Usage Example

```ts
import { safeDivide, normalizeUsername, isValidPassword } from "codex-test-agent";

safeDivide(10, 2); // 5
normalizeUsername(" Juan Perez "); // "juan_perez"
isValidPassword("SecurePass1!"); // true

---

## ⚙️ Continuous Integration (GitHub Actions)

This project includes a CI pipeline that automatically runs on:

- `push`
- `pull_request`

### 🔧 Workflow File

Location:

```
.github/workflows/ci.yml
```

### 📄 Example Configuration

name: CI

on:
  push:
    branches: ["main"]
  pull_request:
    branches: ["main"]

jobs:
  test:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout repository
        uses: actions/checkout@v4

      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: 20

      - name: Install dependencies
        run: npm install

      - name: Type check
        run: npx tsc --noEmit

      - name: Run tests with coverage
        run: npm run coverage

      - name: Upload coverage HTML
        uses: actions/upload-artifact@v4
        with:
          name: coverage-report
          path: coverage
```

---

## 🛠 How to Enable GitHub Actions

1. Push this repository to GitHub
2. Ensure the workflow file exists at:

```
.github/workflows/ci.yml
```

3. Go to the **Actions** tab in GitHub
4. The CI pipeline will automatically run on push or pull request

If configured correctly, you will see:

- ✅ Install dependencies
- ✅ Run tests
- 🟢 CI passing

---

## 🔍 What the CI Pipeline Does

- Installs Node.js 22
- Installs project dependencies
- Executes the test suite with Vitest
- Fails automatically if any test fails

This guarantees code integrity before merging changes.

---

## 📜 License

This project is licensed under the MIT License.

---

## 🧠 Why This Template?

This repository provides:

- Clean TypeScript setup
- Modern test runner (Vitest)
- Automated CI pipeline
- Minimal boilerplate
- Ready-to-extend architecture

Perfect for:

- Starter projects
- CI experimentation
- TypeScript testing templates
- DevOps practice

---

## ✨ Future Improvements
- ESLint integration
- Release automation
- Semantic versioning
- npm publishing pipeline

## 🤖 AI-Assisted Development

This project was initialized using AI-assisted development (GitHub Copilot / Codex).

AI was used to:

- Generate initial TypeScript project structure
- Configure Vitest testing environment
- Create unit tests including edge cases
- Configure GitHub Actions CI pipeline

The repository demonstrates how AI can accelerate setup, testing, and CI automation while maintaining production-ready standards.

---


Built with ❤️ using TypeScript + GitHub Actions
