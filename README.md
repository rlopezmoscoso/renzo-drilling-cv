# Renzo Lopez Moscoso — Professional CV Website

A two-page static professional website for Renzo Lopez Moscoso, Senior Drilling Engineer and Drilling Supervisor.

## Project Objective

The site functions as:

- A digital CV
- A concise technical portfolio
- A professional contact point
- A practical exercise for learning the workflow between ChatGPT, Codex, Git, GitHub, and static deployment

## Professional Focus

The website highlights experience in:

- Drilling Engineering
- HPHT Wells
- Drilling Supervision
- Workover
- Snubbing
- Coiled Tubing
- Rigless Operations
- Contract Management
- Operational Performance
- Drilling Data Analytics

## Pages

### Home

The Home page presents:

- Professional introduction
- Core expertise
- Experience metrics
- Selected achievements
- Digital engineering skills
- Contact information

### Experience

The Experience page presents:

- Professional history
- Key responsibilities
- Selected wells and projects
- Technical competencies
- Software
- Education
- Certifications
- Languages

## Technology

The project uses:

- HTML5
- CSS3
- Vanilla JavaScript

No frontend framework, package manager, database, or backend is required.

## Project Structure

```text
renzo-drilling-cv/
├── index.html
├── experience.html
├── css/
│   └── styles.css
├── js/
│   └── main.js
├── assets/
│   ├── images/
│   ├── icons/
│   └── documents/
├── PROJECT_SPEC.md
├── AGENTS.md
├── README.md
└── .gitignore
```

## Local Use

After the initial website files are created, the site can be opened directly by loading `index.html` in a browser.

A local development server is recommended because it more closely represents a deployed environment.

Example with Python:

```bash
python -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

## Documentation

Before modifying the project, read:

1. `PROJECT_SPEC.md`
2. `AGENTS.md`
3. This `README.md`

`PROJECT_SPEC.md` defines the product requirements.

`AGENTS.md` defines the coding and workflow rules for Codex or any other coding agent.

## Development Workflow

Recommended sequence:

1. Define the task in ChatGPT
2. Send the approved task to Codex
3. Review the changed files
4. Run the website locally
5. Check desktop and mobile layouts
6. Request corrections where necessary
7. Review the diff
8. Commit the approved changes
9. Push the commit to GitHub

## Suggested Initial Milestones

### Milestone 1 — Project Foundation

- Create file structure
- Build shared navigation
- Build shared footer
- Add base responsive CSS
- Add mobile menu behavior

### Milestone 2 — Home Page

- Hero
- Professional profile
- Core expertise
- Professional highlights
- Selected achievements
- Digital engineering
- Contact section

### Milestone 3 — Experience Page

- Experience introduction
- Professional timeline
- Selected wells and projects
- Skills
- Software
- Education
- Certifications
- Languages

### Milestone 4 — Quality Review

- Accessibility
- Responsive behavior
- Navigation
- Performance
- Content verification
- Browser testing

### Milestone 5 — Deployment

- Configure GitHub Pages
- Verify public URLs
- Complete final documentation

The current approved scope does not include a downloadable CV, downloadable PDF, CV download link, or CV placeholder control.

## Content Policy

The site shall not publish:

- Confidential operational information
- Restricted contractual data
- Professional-reference telephone numbers
- Unverified dates or achievements
- Client logos without authorization

## Deployment

The intended deployment target is GitHub Pages or an equivalent static hosting platform.

Deployment instructions will be added after the initial website implementation is complete.

## Status

Current status: two-page static Executive Technical website implemented for GitHub Pages-compatible deployment.
