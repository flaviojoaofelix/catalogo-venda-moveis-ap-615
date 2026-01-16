# Ruthless Code Review Report - 2026-01-16

## 1. Overview

This review enforces the highest standards of code quality, security, and performance. No issue is too small to be ignored.

## 2. Critical Findings

### 2.1 Type Safety & TypeScript Strictness

- **Issue**: In `src/data/products.ts`, `rawProducts` is typed as `unknown[]`.
  - **Why it's wrong**: This bypasses TypeScript's static analysis for the initial declaration. If a property is misspelled in `rawProducts`, TS won't catch it until runtime validation (Valibot) fails, or not at all if the schema is loose.
  - **Fix**: Remove the `: unknown[]` annotation. Let TypeScript infer the type or usage `satisfies` to check compatibility without widening the type. Or better, define the type that matches the schema input.
  - **Severity**: HIGH

### 2.2 Accessibility (a11y)

- **Issue**: `ProductModal.tsx` lacks a **Focus Trap**.
  - **Why it's wrong**: Users navigating with a keyboard can tab out of the modal into the background content, which should be inert.
  - **Fix**: Implement a focus trap logic (e.g., using a custom hook or library) to keep focus within the modal while open.
  - **Severity**: HIGH
- **Issue**: `ProductModal.tsx` close button is a text character `✕`.
  - **Why it's wrong**: Screen readers might announce "multiplication sign" or similar. It's also visually inconsistent across fonts.
  - **Fix**: Use an SVG icon with `aria-hidden="true"` and a visually hidden span for the label "Close".
  - **Severity**: MEDIUM

### 2.3 Code Cleanliness & Best Practices

- **Issue**: Commented-out code in `src/data/products.ts` (lines 116-135).
  - **Why it's wrong**: Dead code rots. It adds noise and confusion. Git is for history.
  - **Fix**: Delete it immediately.
  - **Severity**: MEDIUM
- **Issue**: Inline styles in `ProductModal.tsx` (Line 101: `style={{ padding: 0, border: 'none', background: 'transparent' }}`).
  - **Why it's wrong**: Breaks separation of concerns and CSP (Content Security Policy) strictness potential. Harder to maintain.
  - **Fix**: Move to `ProductModal.css` under definition for `.product-modal__thumbnail-btn`.
  - **Severity**: MEDIUM
- **Issue**: Inconsistent React imports.
  - **Details**: `Gallery.tsx` uses `import * as React` and `React.useState`. `ProductModal.tsx` uses `import { useState }`.
  - **Fix**: Standardize on named imports `import { useState } from 'react'` for consistency and better tree-shaking (though modern bundlers handle namespace imports well too, consistency is key).
  - **Severity**: LOW

### 2.4 CSS Architecture

- **Issue**: Global CSS imports (e.g., `import './Gallery.css'`).
  - **Why it's wrong**: Class names are global. `.gallery` or `.product-card` could clash with other libraries or future code.
  - **Fix**: Migrate to CSS Modules (`Gallery.module.css`) to scope styles locally.
  - **Severity**: MEDIUM (for a small project), HIGH (for scalability).

## 3. Recommendations & Next Steps

1. **Refactor `src/data/products.ts`**: Remove `unknown` cast, remove dead code.
2. **Fix Accessibility**: Add focus trap to Modal, improve close button.
3. **Clean Styles**: Move inline styles to CSS, standardize React imports.
4. **Migrate to CSS Modules**: (Optional but recommended) Rename css files to `.module.css` and update imports.

## 4. Conclusion

The codebase is generally clean but has some "lazy" habits (inline styles, `unknown` type, commented code) that need to be purged to meet the "Ruthless" standard.
