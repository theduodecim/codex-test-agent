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

```yaml
name: CI

on:
  push:
  pull_request:

jobs:
  test:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout repository
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: 22
          cache: npm

      - name: Install dependencies
        run: npm install

      - name: Run tests
        run: npm test
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
- Test coverage reports in CI
- Release automation
- Semantic versioning
- npm publishing pipeline

---

Built with ❤️ using TypeScript + GitHub Actions
