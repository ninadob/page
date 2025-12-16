# Nina Dobrushina &mdash; Personal Website

This repository contains the full source code for [Nina Dobrushina’s personal website](https://ninadob.github.io/page/), built with **Jekyll** and hosted via **GitHub Pages**.  

It relies heavily on the **YAML** format for structured data. If something looks broken after you edit a `.yml` file, check its validity here: [yamllint.com](https://www.yamllint.com/).

---

## 📁 Repository Structure

```
page-main/
├── _data/                         # YAML files with all content (what appears on the site)
├── _includes/                     # Small HTML blocks reused in many pages (navigation, parts of the layout)
├── _layouts/                      # Page template that define how pages look
├── _site/                         # Automatically generated site (don’t edit manually)
├── assets/                        # Images, styles, scripts, and other design files
├── publications/index.html        # /publications/
│
├── Gemfile                        # Technical file that lists Jekyll dependencies
├── Gemfile.lock                   # Auto-generated dependency versions
├── _config.yml                    # General site settings
│
├── index.html                     # /
├── education_and_positions.html   # /education
├── events.html                    # /events
├── research_track.html            # /research_track
├── teaching.html                  # /teaching
```

---

### `_data/`

This folder contains text files in **YAML** format.  
Each file corresponds to one part of the website (education, teaching, publications, etc.).  

---

#### **education.yml**

Stores information about positions, education, memberships, and other academic duties.

```
positions:
  - year: XXXX–XXXX
    place: "Position, Institution, Location"
    ...

education:
  - year: XXXX–XXXX
    place: "Degree, University"
    ...

memberships:
  - "Organization name"
  ...

other academic duties:
  - year: XXXX
    place: "Role, Event or Journal"
    ...
```

---

#### **general.yml**

Contains general personal information displayed on the home page such as
```
name
born
nationality
university
position
ORCID
email
marital status
CV filename
```

---

#### **lectures.yml**

Describes invited talks, conferences, and organized events.

```
invited:
  - "Free text, name of organization or event"
  ...

conferences:
  - year: XXXX
    place: "Talk title or session description"
    ...
organization:
  - year: XXXX
    place: "Conference or workshop organized"
    ...
```

---

#### **publications.yml**

Organizes publications by category.  
Each section has a name and a list of references.

```
sections:
  - name: peer-reviewed journals
    papers:
      - "Reference"
      ...

  - name: edited volumes
    papers:
      - "Reference"
      ...

  - name: book chapters
    papers:
      - "Reference"
      ...

  - name: online publications and databases
    papers:
      - "Reference"
      ...

  - name: conference proceedings
    papers:
      - "Reference"
      ...

  - name: book reviews
    papers:
      - "Reference"
      ...
```
---

#### **teaching.yml**

Lists teaching information such as courses, awards, and supervision.

```
courses:
  info:
    - "General information or teaching statement"
    - "Additional comment if needed"
  list:
    - "Course name"

awards:
  - "Award or recognition"

supervisions:
  - "Student or project supervised"

phds:
  - "PhD student and topic"
```

---

### `_includes/`

Contains small reusable parts of the layout.  
You normally don’t need to change these unless you want to modify the overall structure of the website.

- **main.html** &mdash; general page structure
- **nav.html** &mdash; top navigation bar  
- **personal_data.html** &mdash; automatically shows info from `_data/general.yml`

---

### HTML files

Each HTML file represents a separate visible page on the website.  
Their names match the page addresses &mdash; for example, `events.html` corresponds to `/events`. They use information from the `_data` folder to build each page.