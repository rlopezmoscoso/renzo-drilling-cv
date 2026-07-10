# AGENTS.md

## 1. Purpose

This file defines the permanent working rules for any coding agent modifying this repository.

Read this file and `PROJECT_SPEC.md` before making changes.

## 2. Project Constraints

The project is a two-page static professional CV website.

Use only:

- HTML5
- CSS3
- Vanilla JavaScript

Do not introduce:

- React
- Next.js
- Vue
- Angular
- Bootstrap
- Tailwind CSS
- npm
- Build tools
- Third-party JavaScript frameworks
- Backend services
- Databases

Do not install dependencies unless the user explicitly approves them.

## 3. Source of Truth

Use the following priority:

1. Latest user instruction
2. `PROJECT_SPEC.md`
3. `AGENTS.md`
4. `README.md`
5. Existing implementation

If instructions conflict, report the conflict before making a destructive or scope-changing modification.

## 4. Content Integrity

Never invent:

- Employment dates
- Company names
- Job titles
- Well names
- Technical achievements
- Production figures
- Certifications
- Educational credentials

Use only approved content from the project documentation.

When information is missing, use a clearly marked placeholder or leave the field out.

Do not publish:

- Professional-reference telephone numbers
- Confidential operational details
- Restricted contractual data
- Personal information not approved for public display

## 5. Development Rules

### HTML

- Use semantic HTML5 elements
- Maintain one clear `h1` per page
- Preserve logical heading hierarchy
- Use accessible navigation
- Use descriptive link text
- Add alt text to meaningful images
- Avoid unnecessary wrapper elements

### CSS

- Use CSS custom properties for:
  - colors
  - typography
  - spacing
  - border radii
  - container widths
- Follow a mobile-first approach
- Keep selectors readable and maintainable
- Avoid excessive nesting
- Avoid inline styles
- Do not use `!important` unless technically justified
- Respect `prefers-reduced-motion`

### JavaScript

- Use JavaScript only where required
- Keep the implementation small and dependency-free
- Avoid global variables where practical
- Handle missing DOM elements safely
- Do not add decorative scripts that reduce performance
- Do not create console errors

## 6. Visual Rules

The website shall feel:

- Technical
- Senior
- Professional
- Modern
- Industrial
- Restrained

Avoid:

- Generic CV templates
- Excessive gradients
- Excessive animation
- Flashy effects
- Oversized decorative typography
- Stock-photo-heavy layouts
- Unnecessary icons
- Poor contrast

## 7. Responsive Rules

Test layouts at:

- 360 px
- 768 px
- 1024 px
- 1440 px

Check:

- Navigation
- Heading wrapping
- Card layout
- Timeline layout
- Button sizing
- Horizontal overflow
- Text readability

No page shall produce unintended horizontal scrolling.

## 8. Accessibility Rules

At minimum:

- Keyboard-accessible navigation
- Visible focus states
- Sufficient contrast
- Semantic landmarks
- Proper button and link elements
- Accessible mobile menu
- `aria-expanded` on the mobile menu control
- Reduced-motion support
- Descriptive document title and meta description

## 9. File Organization

Use:

```text
index.html
experience.html
css/styles.css
js/main.js
assets/images/
assets/icons/
assets/documents/
```

Do not create additional directories without a clear reason.

## 10. Change Discipline

For each task:

1. Read the relevant documentation
2. Inspect existing files
3. Implement only the requested scope
4. Avoid unrelated refactoring
5. Review the diff
6. Test navigation and layout
7. Report modified files
8. Explain important technical decisions
9. List remaining issues or placeholders

## 11. Verification Checklist

Before completing a task, verify:

- Both HTML pages open
- Internal navigation works
- No missing local assets
- No broken file paths
- No console errors
- No obvious spelling errors
- No unintended horizontal overflow
- Mobile navigation works
- Keyboard focus is visible
- Content matches approved project documentation

## 12. Commit Guidance

Use focused commits.

Recommended commit prefixes:

- `chore:` project setup or maintenance
- `feat:` new functionality or section
- `fix:` bug correction
- `style:` visual changes without functional changes
- `docs:` documentation changes
- `refactor:` code restructuring without behavior changes

Examples:

```text
chore: create initial static site structure
feat: build home page hero and profile sections
feat: add professional experience timeline
fix: correct mobile navigation behavior
style: refine responsive spacing and typography
docs: update deployment instructions
```

Do not combine unrelated changes in one commit.

## 13. Completion Report Format

At the end of each Codex task, provide:

### Files changed

List every modified or created file.

### Work completed

Summarize the implementation.

### Technical decisions

Explain important decisions briefly.

### Verification performed

List tests or checks completed.

### Remaining items

Identify placeholders, unresolved issues, or the next logical task.
