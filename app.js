// Ultra-Clean Logo Transition Engine
// Recreates: Staggered Cascading Wave, Blur Fade, and Top-Right Slide Transition
// Designed by Antigravity (Advanced Agentic Coding Team, Google DeepMind)

const LOGO_SVGS = [
    // --- Set 0 (Video Set 1) ---
    // Figma
    `<svg viewBox="0 0 100 150" fill="#ffffff"><path d="M25 37.5C25 51.3 36.2 62.5 50 62.5C50 48.7 38.8 37.5 25 37.5Z" fill="#ffffff"/><path d="M25 75C25 88.8 36.2 100 50 100V75H25Z" fill="#ffffff"/><path d="M25 112.5C25 126.3 36.2 137.5 50 137.5C63.8 137.5 75 126.3 75 112.5C75 98.7 63.8 87.5 50 87.5C36.2 87.5 25 98.7 25 112.5Z" fill="#ffffff"/><path d="M50 75H75V50H50V75Z" fill="#ffffff"/><path d="M75 37.5C75 51.3 63.8 62.5 50 62.5V12.5C63.8 12.5 75 23.7 75 37.5Z" fill="#ffffff"/></svg>`,
    // Stripe
    `<svg viewBox="0 0 200 65" fill="#ffffff"><path d="M23.1 31.9c0-5.8 4.2-9.6 10.9-9.6 6.3 0 10.3 3.3 10.3 3.3l-2.9 5.3s-3.3-2.3-7.2-2.3c-3.6 0-5.2 1.6-5.2 3.6 0 5.4 15.6 2.4 15.6 12.8 0 6.3-4.6 10.1-11.4 10.1-6.8 0-11.7-3.9-11.7-3.9l3.1-5.3s4.2 2.9 8.3 2.9c3.6 0 5.8-1.5 5.8-3.8.1-6.1-16.8-2.7-16.8-13.1zm28.7 1.5V23.1h5.6v10.3c0 4.1 1.9 5.7 5.2 5.7 3.3 0 5.2-1.6 5.2-5.7V23.1h5.6v21.3h-5.6v-3.7s-2.1 4.3-7.6 4.3c-6.1.1-8.4-3.7-8.4-9.6zm33.3-21.9c0-2.1 1.7-3.6 3.8-3.6 2.1 0 3.8 1.5 3.8 3.6 0 2.1-1.7 3.6-3.8 3.6-2.1 0-3.8-1.5-3.8-3.6zm1 10.7h5.6v21.3h-5.6V22.2zm14.6 0h5.6v3.7s2.5-4.3 7.8-4.3c6.1 0 9 4.3 9 10.2 0 6.6-3.5 10.9-9.8 10.9-4.8 0-7-2.9-7-2.9v10.9h-5.6V22.2zm17 10.8c0 4 2.2 5.5 5.2 5.5 3 0 5.1-1.5 5.1-5.5 0-3.9-2.1-5.5-5.1-5.5-3-.1-5.2 1.4-5.2 5.5zm19.6-1.5c.3-5.3 4.8-9.1 10.4-9.1 6.1 0 9.8 3.9 9.8 9.9v1.2H123c.3 4.2 3.1 5.9 6.7 5.9 3.6 0 6.5-1.9 6.5-1.9l2.2 4.4s-3.7 3.1-9 3.1c-7.3.1-11.7-4.4-11.7-13.5zm14.7-2.8c-.1-3.1-2-4.6-4.6-4.6-2.6 0-4.3 1.5-4.7 4.6h9.3zM8 32.7v-6.9h5.6v6.9h5.8v4.9h-5.8V49s-1 5.7 4.9 5.7c1.5 0 2.9-.4 2.9-.4l.3 4.7s-2.1.8-4.6.8c-7.7 0-9.1-5.6-9.1-10.9v-6.3H2v-4.9h6z" fill="#ffffff"/></svg>`,
    // AWS
    `<svg viewBox="0 0 160 90" fill="#ffffff"><path d="M42.1 48.7c0 3.3.4 5.9 1.1 7.6.7 1.8 2.2 2.7 4.6 2.7 2.1 0 3.8-.7 5.1-2.1 1.3-1.4 2-3.6 2-6.5V37.2H42.1v11.5zm12.8-19.6v4.3c-2.3-3.1-5.6-4.6-9.9-4.6-4.8 0-8.6 1.7-11.4 5.1-2.8 3.4-4.2 8-4.2 13.9 0 5.7 1.3 10.3 3.9 13.8 2.6 3.5 6.4 5.2 11.4 5.2 4.5 0 8-1.7 10.3-5.1v4.3h12.5V29.1H54.9zm41.2 19.3c0 3.2-1.9 5.2-5.7 6.1l-6.8 1.6c-4.4 1-6.6 2.8-6.6 5.5 0 1.4.6 2.5 1.7 3.3 1.1.8 2.8 1.2 5.1 1.2 2.9 0 5.3-.8 7.3-2.4s3-4 3-7.2V48.4zm12.6-9.5c.1-3-.7-5.2-2.3-6.5-1.6-1.3-4.2-2-7.8-2-3 0-5.8.5-8.2 1.4-2.5.9-4.8 2.4-6.9 4.4L81.2 44c2.8-2.6 6.1-3.9 10-3.9 2.5 0 3.7.6 3.7 1.8 0 .8-.6 1.5-1.9 2l-10.2 2.3c-4.1.9-7.2 2.4-9.2 4.5-2.1 2.1-3.1 4.9-3.1 8.4 0 3.7 1.2 6.7 3.7 9 2.5 2.3 5.9 3.4 10.2 3.4 4.8 0 8.7-1.6 11.7-4.8v3.9H119l-.3-34.7zm32.8-.7l-7.7 27.5H121L111 29.1h12.3l4.3 18.2 5-18.2h11.2l4.9 18.2 4.3-18.2H164l-7.7 27.5h-12.7L141.3 37.5z" fill="#ffffff"/><path d="M21 70c25 15, 95 15, 118 0" stroke="#FFFFFF" stroke-width="6" stroke-linecap="round" fill="none"/><path d="M136 62l9 11-12 3" fill="#ffffff"/></svg>`,
    // Cloudflare
    `<svg viewBox="0 0 160 90" fill="#ffffff"><path d="M125 45c0-12.4-9.1-22.7-21.2-24.7C99.2 8.7 87.3 0 73.3 0 61.8 0 51.7 6.1 46.1 15.3 43.1 13.9 39.8 13 36.3 13 25.1 13 16 22.1 16 33.3c0 .8.1 1.7.2 2.5C6.7 39.2 0 48.3 0 59c0 13.8 11.2 25 25 25h95c11 0 20-9 20-20 0-10.3-7.8-18.8-18-19z" fill="#ffffff"/><path d="M40 45h80M32 57h96" stroke="#000000" stroke-width="5" stroke-linecap="round" fill="none"/></svg>`,

    // --- Set 1 (Video Set 2) ---
    // Google
    `<svg viewBox="0 0 24 24" fill="#ffffff"><path d="M12.24 10.285V14.4h6.887c-.648 2.41-2.519 4.113-5.136 4.113A5.88 5.88 0 0 1 8 12.637a5.88 5.88 0 0 1 5.99-5.877c1.617 0 3.087.61 4.227 1.613l3.235-3.235C19.278 3.12 16.384 2 13.99 2 7.92 2 3 6.92 3 13s4.92 11 10.99 11c6.28 0 10.45-4.41 10.45-10.63 0-.72-.07-1.4-.2-2.085H12.24z" fill="#ffffff"/></svg>`,
    // 3M
    `<svg viewBox="0 0 150 75" fill="#ffffff"><text x="5" y="62" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-weight="900" font-size="75" fill="#ffffff" letter-spacing="-4">3M</text></svg>`,
    // Adidas
    `<svg viewBox="0 0 120 85" fill="#ffffff"><path d="M22 80h18L18 26H0zM52 80h18L44 14H26zM82 80h18L70 2H52z" fill="#ffffff"/></svg>`,
    // Spotify
    `<svg viewBox="0 0 24 24" fill="#ffffff"><path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm4.586 14.424c-.18.295-.565.387-.86.207-2.377-1.454-5.37-1.783-8.893-.982-.336.075-.668-.135-.744-.47-.077-.337.135-.668.47-.745 3.856-.88 7.15-.506 9.822 1.13.295.178.387.563.205.86zm1.225-2.72c-.226.367-.707.487-1.074.26-2.72-1.672-6.87-2.157-10.076-1.182-.413.125-.848-.107-.973-.52-.125-.413.108-.847.52-.973 3.67-1.114 8.24-.57 11.35 1.344.366.226.486.708.26 1.073zm.107-2.827C14.502 8.84 9.1 8.66 5.973 9.61c-.483.146-.988-.125-1.134-.608-.146-.483.125-.988.608-1.134 3.6-1.09 9.55-.887 13.43 1.417.435.258.577.82.318 1.255-.258.435-.82.577-1.254.318z" fill="#ffffff"/></svg>`,

    // --- Set 2 (Video Set 3) ---
    // eBay
    `<svg viewBox="0 0 160 70" fill="#ffffff"><text x="5" y="55" font-family="'Outfit', sans-serif" font-weight="700" font-size="52" fill="#ffffff" letter-spacing="-3">ebay</text></svg>`,
    // Nike
    `<svg viewBox="0 0 200 90" fill="#ffffff"><path d="M190 10C155 30 100 60 50 82c-20 9-33 11-37 11s-3-2-2-5c2-6 10-18 25-33 17-18 45-42 85-58 13-5 27-7 35-5 5 1 6 3 4 8v1z" fill="#ffffff"/></svg>`,
    // GitHub
    `<svg viewBox="0 0 24 24" fill="#ffffff"><path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z" fill="#ffffff"/></svg>`,
    // Netflix
    `<svg viewBox="0 0 100 150" fill="#ffffff"><path d="M25 10v130h22V75l31 65h22V10H78v75L47 10H25z" fill="#ffffff"/></svg>`
];

let currentGroupIdx = 0;
const CYCLE_INTERVAL = 4000; // Time in ms between each full slide sequence (2.5s hold + 1.5s transition delay)

// List of progressive chromatic aberration intensities corresponding to each transition cycle
const ABERRATION_CLASSES = ['aberration-subtle', 'aberration-moderate', 'aberration-intense'];

// Helper function to build 3 layered absolute channels (R, G, B) to enable chromatic aberration
function createLogoElement(svgString, stateClass, aberrationClass = 'aberration-subtle') {
    const logoContainer = document.createElement('div');
    logoContainer.className = `logo ${stateClass} ${aberrationClass}`;

    // 1. Red Channel Layer
    const rChannel = document.createElement('div');
    rChannel.className = 'logo-channel r-channel';
    rChannel.innerHTML = svgString;

    // 2. Green Channel Layer
    const gChannel = document.createElement('div');
    gChannel.className = 'logo-channel g-channel';
    gChannel.innerHTML = svgString;

    // 3. Blue Channel Layer
    const bChannel = document.createElement('div');
    bChannel.className = 'logo-channel b-channel';
    bChannel.innerHTML = svgString;

    // Layer all channels inside the main container
    logoContainer.appendChild(rChannel);
    logoContainer.appendChild(gChannel);
    logoContainer.appendChild(bChannel);

    return logoContainer;
}

// Initialize: load Group 0 SVGs as 3-channel overlays and display them instantly sharp
function init() {
    for (let colIdx = 0; colIdx < 4; colIdx++) {
        const slot = document.getElementById(`slot-${colIdx}`);
        const svgString = LOGO_SVGS[currentGroupIdx * 4 + colIdx];
        const logoEl = createLogoElement(svgString, 'active', 'aberration-subtle');
        slot.appendChild(logoEl);
    }
    
    // Cycle sets indefinitely
    setInterval(triggerNextTransition, CYCLE_INTERVAL);
}

function triggerNextTransition() {
    const nextGroupIdx = (currentGroupIdx + 1) % 3;
    
    // Select the current loop's aberration intensity style dynamically
    const activeAberrationClass = ABERRATION_CLASSES[currentGroupIdx];

    for (let colIdx = 0; colIdx < 4; colIdx++) {
        const slot = document.getElementById(`slot-${colIdx}`);
        
        // 1. Get the current active logo and flag it to exit with the specific aberration class
        const oldLogo = slot.querySelector('.logo.active');
        if (oldLogo) {
            oldLogo.className = `logo exit ${activeAberrationClass}`;
            
            // Clean up the expired element once the staggered CSS transition completes (approx 2.5 seconds max delay + duration)
            setTimeout(() => {
                oldLogo.remove();
            }, 2500);
        }

        // 2. Create the incoming 3-channel logo, set it to invisible (.enter state), and append it
        const svgString = LOGO_SVGS[nextGroupIdx * 4 + colIdx];
        const newLogo = createLogoElement(svgString, `enter ${activeAberrationClass}`);
        slot.appendChild(newLogo);

        // 3. Trigger the staggered fade-in transition in the next render cycle
        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                newLogo.classList.remove('enter');
                newLogo.classList.add('active');
            });
        });
    }

    currentGroupIdx = nextGroupIdx;
}

// Bootstrap
window.addEventListener('DOMContentLoaded', init);
