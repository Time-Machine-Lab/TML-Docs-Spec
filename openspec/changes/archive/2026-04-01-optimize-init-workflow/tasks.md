## 1. Cleanup and Refactoring

- [x] 1.1 Remove the `contract` folder from the repository.
- [x] 1.2 Remove `sync-contract.mjs` script and its references from `package.json`.
- [x] 1.3 Remove `contract` bundling and copying logic from `src/core/init.ts` and `src/utils/fs.ts`.

## 2. Docs Scaffolding Implementation

- [x] 2.1 Add a utility function in `src/utils/fs.ts` to create directories and place a `.gitkeep` file inside them.
- [x] 2.2 Call the scaffolding utility in `src/core/init.ts` to create `docs/api`, `docs/sql`, `docs/project`, and `docs/project/domain` during initialization.

## 3. OpenSpec Integration

- [x] 3.1 Add a helper function to detect if `@fission-ai/openspec` is installed globally.
- [x] 3.2 Add logic to execute `npm install -g @fission-ai/openspec@latest` if OpenSpec is not detected.
- [x] 3.3 Add logic in `src/core/init.ts` to spawn `openspec init` silently using the selected IDE and project path as CLI arguments.

## 4. TML-Skills Fetching

- [x] 4.1 Add a lightweight download mechanism (e.g., using `degit`, or fetching and extracting a GitHub tarball) to `src/utils/fs.ts` or a new utility file.
- [x] 4.2 Update the tool adapters (e.g., `claude.ts`, `trae.ts`) to download and place the `tml-docs-spec-generate` skill into their respective skill directories if supported, or log a bypass message if not.

## 5. Testing and Validation

- [x] 5.1 Run `npm run build` to verify the CLI compiles successfully without the old contract dependencies.
- [x] 5.2 Run `node ./bin/tml-spec.js init` in a local test directory to validate the entire workflow (OpenSpec installation, silent init, skill download, and docs scaffolding).