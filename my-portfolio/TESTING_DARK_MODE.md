# Dark Mode Testing Guide

## Quick Start
The dev server should be running. Open your browser to the URL shown in the terminal (usually `http://localhost:5173`).

## Test Cases

### 1. **Test Default System Preference (First Visit)**

**Steps:**
1. Open browser DevTools (F12 or Cmd+Option+I on Mac)
2. Go to Application/Storage tab → Clear Local Storage for your site
3. Close the browser tab completely
4. Open a new tab and navigate to your site
5. Check your OS system theme:
   - **macOS**: System Settings → Appearance → Light/Dark
   - **Windows**: Settings → Personalization → Colors → Choose your mode
   - **Linux**: Depends on DE (GNOME, KDE, etc.)

**Expected Result:**
- ✅ Site should immediately show in dark mode if your OS is in dark mode
- ✅ Site should immediately show in light mode if your OS is in light mode
- ✅ **NO flash** of wrong theme before correct theme appears
- ✅ No scrolling required - theme should be correct from first pixel

---

### 2. **Test Manual Toggle**

**Steps:**
1. With clean localStorage (from Test 1), visit the site
2. Click the theme toggle button (sun/moon icon)
3. Observe the theme change
4. Refresh the page (F5 or Cmd+R)

**Expected Result:**
- ✅ Theme should toggle immediately when button clicked
- ✅ After refresh, site should remember your manual choice
- ✅ Should NOT revert to system preference after refresh

---

### 3. **Test System Preference Changes**

**Steps:**
1. Ensure you have NOT manually toggled (or clear localStorage first)
2. Visit the site
3. Change your OS theme while the site is open:
   - **macOS**: Toggle in System Settings
   - **Windows**: Toggle in Settings
4. Observe the site

**Expected Result:**
- ✅ Site should automatically update to match new OS theme
- ✅ No refresh needed - should update in real-time

---

### 4. **Test Manual Override Persistence**

**Steps:**
1. Manually toggle the theme on the site
2. Change your OS theme
3. Refresh the site
4. Observe the theme

**Expected Result:**
- ✅ Site should maintain your manual choice
- ✅ Should NOT follow OS theme changes after you've manually set it

---

### 5. **Test FOUC (Flash of Unstyled Content) Fix**

**Steps:**
1. Clear localStorage and browser cache
2. Open DevTools → Network tab
3. Enable "Slow 3G" throttling (or "Fast 3G")
4. Hard refresh (Ctrl+Shift+R or Cmd+Shift+R)
5. Watch the page load carefully

**Expected Result:**
- ✅ Page should show correct theme from the very first render
- ✅ NO flash of light mode before dark mode (or vice versa)
- ✅ Theme should be correct even if you scroll immediately on load

**Advanced Test:**
- Open browser console and add this before page load:
  ```javascript
  // Block the page for 2 seconds to test inline script
  document.documentElement.style.display = 'none';
  setTimeout(() => {
    document.documentElement.style.display = '';
  }, 2000);
  ```

---

### 6. **Test localStorage Behavior**

**Steps:**
1. Open DevTools → Application/Storage → Local Storage
2. Check localStorage for your site
3. First visit (no toggle): Should see `theme: null` or no theme key
4. After toggle: Should see `theme: "dark"` or `theme: "light"`

**Expected Result:**
- ✅ localStorage only has theme key AFTER manual toggle
- ✅ No theme in localStorage = follows system preference
- ✅ Theme in localStorage = uses that value

---

### 7. **Test Multiple Tabs Synchronization**

**Steps:**
1. Open your site in two tabs
2. Toggle theme in one tab
3. Check the other tab

**Expected Result:**
- ✅ Both tabs should update (if you implement storage event listener)
- Note: Current implementation may require refresh of second tab

---

## Debugging Tips

### Check Current Theme State
Open browser console and run:
```javascript
// Check localStorage
console.log('localStorage theme:', localStorage.getItem('theme'));

// Check system preference
console.log('System prefers dark:', window.matchMedia('(prefers-color-scheme: dark)').matches);

// Check current class
console.log('Has dark class:', document.documentElement.classList.contains('dark'));
```

### Force Clear and Test
```javascript
// Clear localStorage and reload
localStorage.removeItem('theme');
location.reload();
```

### Test System Preference Change Programmatically
```javascript
// This won't actually change OS theme, but you can test the listener
const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
// Manually trigger if possible
```

---

## Quick Test Checklist

- [ ] First visit: Matches OS theme
- [ ] No flash on initial load
- [ ] Manual toggle works
- [ ] Manual choice persists after refresh
- [ ] System preference changes update site (when no manual toggle)
- [ ] Manual toggle overrides system preference
- [ ] localStorage only set after manual toggle

---

## Common Issues

**Issue: Still seeing flash**
- Check that inline script is in `<head>` before any styles load
- Ensure script runs synchronously (no async/defer)

**Issue: Theme not matching system**
- Check browser DevTools → Console for errors
- Verify `matchMedia` is supported
- Check localStorage doesn't have old theme value

**Issue: Theme doesn't update on system change**
- Only works if you haven't manually toggled
- Try clearing localStorage first

