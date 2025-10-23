// New prefers-color-scheme media query to detect OS light/dark mode setting
var prefers_light = window.matchMedia('(prefers-color-scheme: light)')
var prefers_dark = window.matchMedia('(prefers-color-scheme: dark)')

// Change to dark and rotate the switch icon
function darkmode() {
  console.log('[lightswitch] darkmode() before:', document.body.className);
  if (document.body.classList.contains('light')) {
    document.body.classList.replace('light', 'dark');
  } else if (!document.body.classList.contains('dark')) {
    document.body.classList.add('dark');
  }

  // also set data-theme on <html> for CSS that targets [data-theme="dark"]
  document.documentElement.setAttribute('data-theme', 'dark');

  const navLight = document.getElementById("nav-light");
  console.log('[lightswitch] navLight element:', navLight);
  if (navLight) navLight.classList.add("flipswitch");
  console.log('[lightswitch] darkmode() after:', document.body.className);
}

// Change to light and rotate the switch icon
function lightmode() {
  console.log('[lightswitch] lightmode() before:', document.body.className);
  if (document.body.classList.contains('dark')) {
    document.body.classList.replace('dark', 'light');
  } else if (!document.body.classList.contains('light')) {
    document.body.classList.add('light');
  }

  // also set data-theme on <html>
  document.documentElement.setAttribute('data-theme', 'light');

  const navLight = document.getElementById("nav-light");
  console.log('[lightswitch] navLight element:', navLight);
  if (navLight) navLight.classList.remove("flipswitch");
  console.log('[lightswitch] lightmode() after:', document.body.className);
}

// Initialization triggers light/dark mode based on prior preference, then OS setting
if(localStorage.getItem("mode")=="dark") {
  darkmode();
} else if(localStorage.getItem("mode")=="light") {
  lightmode();
} else if(prefers_light.matches) {
  lightmode();
} else if(prefers_dark.matches) {
  darkmode();
} else {
  // fallback default
  lightmode();
}

// Fires when user clicks light/dark mode switch in top right
function handleThemeUpdate() {
  console.log('[lightswitch] handleThemeUpdate clicked, current body:', document.body.className);
  if (document.body.classList.contains('light')) {
    darkmode();
    localStorage.setItem("mode", "dark");
  } else {
    lightmode();
    localStorage.setItem("mode", "light");
  }
}

// Runs when OS changes light/dark mode. Changes only if you were on default
// color state (light on light mode, dark on dark mode).
function OSColorChange() {
  if (prefers_light.matches) {
    lightmode();
    localStorage.setItem("mode", "light");
  } else if (prefers_dark.matches) {
    darkmode();
    localStorage.setItem("mode", "dark");
  }
}

// Listeners for when you change OS setting for light/dark mode
if (prefers_light.addEventListener) {
  prefers_light.addEventListener('change', OSColorChange);
  prefers_dark.addEventListener('change', OSColorChange);
} else {
  prefers_light.addListener(OSColorChange);
  prefers_dark.addListener(OSColorChange);
}