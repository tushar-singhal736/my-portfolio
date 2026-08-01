# Portfolio ke liye kya kya dena hai

Sab data **ek hi file** mein bharna hai: **`src/config/profile.js`**

Aur **2 files** apne folder mein rakhni hain (photo + resume).

---

## 1. Photo (aapki tasveer)

- **Kahan rakhein:** `myapp/public/` folder ke andar  
- **Filename:** `profile.jpg` (ya `profile.png`)  
- **Size:** 400x400 px ya square ratio theek rahega  
- Agar photo nahi doge to naam ka pehla letter circle mein dikhega  

**Path:**  
`myapp` → `public` → yahan `profile.jpg` paste karo  

Config mein: `photo: '/profile.jpg'` (agar naam alag hai to wahi likho)

---

## 2. Resume (PDF)

- **Kahan rakhein:** `myapp/public/` folder ke andar  
- **Filename:** `resume.pdf`  
- Click par resume download/open hoga  

**Path:**  
`myapp` → `public` → yahan `resume.pdf` paste karo  

Config mein: `resume: '/resume.pdf'`

---

## 3. Config file mein ye sab bharo

File open karo: **`src/config/profile.js`**

### Basic info
| Field      | Kya likhna hai              | Example                |
|-----------|-----------------------------|------------------------|
| `name`    | Apna full naam              | `'Rahul Kumar'`        |
| `title`   | Job title                   | `'Full Stack Developer'` |
| `tagline` | Short intro line            | `'I build web apps.'`  |
| `taglineTech` | Technologies (array)    | `['React', 'Node.js']` |

### About
| Field             | Kya likhna hai                    |
|-------------------|------------------------------------|
| `aboutParagraphs` | 2–3 lines apne baare mein (array)  |
| `stats.years`     | Experience (e.g. `'2+'`)           |
| `stats.projects`  | Kitne projects (e.g. `'15+'`)      |
| `stats.technologies` | Kitni techs (e.g. `'10+'`)     |

### Links (sab connect ho jayenge)
| Field   | Kya likhna hai        | Example                          |
|---------|------------------------|----------------------------------|
| `email` | Apna email            | `'rahul@gmail.com'`              |
| `phone` | Optional – agar chahiye | `'+91 98765 43210'`            |
| `links` | Array of objects      | Neeche dekho                     |

**links** array aise bharo:

```javascript
links: [
  { name: 'GitHub',   href: 'https://github.com/yourusername',   icon: '↗' },
  { name: 'LinkedIn', href: 'https://linkedin.com/in/yourusername', icon: 'in' },
  { name: 'Twitter',  href: 'https://twitter.com/yourusername',  icon: '𝕏' },
  { name: 'Portfolio', href: 'https://yourportfolio.com',       icon: '◆' },
  // aur jitne chahiye utne add karo
],
```

### Skills
`skills` array mein **name**, **level** (0–100), **category** dena hai:

- **Category:** `'Frontend'` | `'Backend'` | `'Database'` | `'Tools'`

Example:

```javascript
skills: [
  { name: 'React', level: 90, category: 'Frontend' },
  { name: 'Node.js', level: 85, category: 'Backend' },
  { name: 'MongoDB', level: 80, category: 'Database' },
  { name: 'Git', level: 85, category: 'Tools' },
],
```

### Projects
Har project ke liye:

- `title` – Project ka naam  
- `desc` – Short description  
- `tech` – Technologies (array)  
- `link` – Live link ya GitHub link  
- `gradient` – same rehne do ya color change karo  

---

## Short checklist – aapko ye dena hai

1. **Photo** → `public/profile.jpg` (ya .png)  
2. **Resume** → `public/resume.pdf`  
3. **`src/config/profile.js`** mein:
   - name, title, tagline, taglineTech  
   - aboutParagraphs, stats  
   - email, links (GitHub, LinkedIn, Twitter, etc.)  
   - skills (name, level, category)  
   - projects (title, desc, tech, link)  

Bas itna bharo – photo, resume aur saari links portfolio mein connect ho jayengi.
