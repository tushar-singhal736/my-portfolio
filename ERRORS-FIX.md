# Portfolio – Common Errors & Fix

## 1. "Missing script: start"
**Reason:** Terminal **myapp** folder ke andar nahi hai.  
**Fix:**
```bash
cd myapp
npm start
```

---

## 2. "Something is already running on port 3000"
**Reason:** App pehle se chal rahi hai.  
**Fix:** Browser mein jao: **http://localhost:3000** — portfolio wahi open hoga.  
Agar nayi run karni hai to pehle purani process band karo (terminal mein Ctrl+C), phir dubara `npm start`.

---

## 3. Node warning: "fs.F_OK is deprecated"
**Reason:** Ye react-scripts ki warning hai, aapke code ki nahi.  
**Fix:** Ignore karo — app normal chalegi.

---

## 4. Browser blank / white screen
**Fix:**
- Browser console kholo: **F12** → **Console** tab
- Jo error dikhe (red text) uska screenshot bhejo ya copy-paste karo
- Refresh karo: **Ctrl + R** ya **F5**

---

## 5. "Cannot find module" / Import error
**Fix:** Dependencies dobara install karo:
```bash
cd myapp
npm install
npm start
```

---

## Build check (optional)
Agar pata karna ho ki code sahi hai:
```bash
cd myapp
npm run build
```
Agar "Compiled successfully" aaye to code theek hai.

---

**Agar koi aur error ho to exact message (ya screenshot) bhejo.**
