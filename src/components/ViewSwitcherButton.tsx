import { useEffect } from "react";

// ExternalLink (Atlas, size md / 20x20)
const EXTERNAL_LINK_SVG = `
<svg class="view-switcher-icon" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <path d="M7.06256 13.7038L6.29656 12.9378L10.4841 8.77112H6.72925V7.68783H12.3125V13.2711H11.2292V9.51628L7.06256 13.7038ZM15.5001 10.0003V4.50031H10.0001V3.41699H16.5834V10.0003H15.5001ZM4.7565 16.5836C4.38139 16.5836 4.06432 16.4541 3.80529 16.1951C3.54626 15.936 3.41675 15.619 3.41675 15.2439V3.41699H4.50006V15.2439C4.50006 15.308 4.52677 15.3667 4.58019 15.4202C4.63362 15.4736 4.69239 15.5003 4.7565 15.5003H16.5834V16.5836H4.7565Z" fill="currentColor"/>
</svg>`;

const STYLE_ID = "view-switcher-style";
const HOST_ID = "view-switcher-host";

const BUTTON_STYLES = `
  .view-switcher-btn {
    all: unset;
    box-sizing: border-box;
    display: inline-flex;
    align-items: center;
    height: 36px;
    padding: 6px 12px;
    border-radius: 8px;
    font-family: var(--lens-semantic-font-family-body);
    font-size: 14px;
    font-weight: 600;
    line-height: 20px;
    color: var(--lens-semantic-color-action-secondary-on-secondary);
    background: transparent;
    cursor: pointer;
  }
  .view-switcher-btn:hover {
    background: var(--lens-semantic-color-action-secondary-hover-fill);
  }
  .view-switcher-btn:active {
    background: var(--lens-semantic-color-action-secondary-active-fill);
  }
  .view-switcher-btn:focus-visible {
    outline: 2px solid var(--lens-semantic-color-action-primary-default, currentColor);
    outline-offset: 2px;
  }
  .view-switcher-btn .view-switcher-icon {
    margin-inline-start: 8px;
    flex: 0 0 20px;
  }
`;

type Props = {
  label: string;
  href: string;
};

export default function ViewSwitcherButton({ label, href }: Props) {
  useEffect(() => {
    let attached = false;
    let host: HTMLButtonElement | null = null;

    const tryInsert = () => {
      const mockNav = document.querySelector("mock-hb-global-navigator");
      const mockRoot = (mockNav as Element & { shadowRoot: ShadowRoot | null })?.shadowRoot;
      if (!mockRoot) return false;
      const helpMenu = mockRoot.querySelector("atlas-gn-help-menu") as HTMLElement | null;
      if (!helpMenu?.parentNode) return false;
      // Insertion anchor: the keyboard icon if it has been mounted, otherwise help menu.
      // Keeps order: [view-switcher][keyboard][help][user]
      const anchor =
        (mockRoot.querySelector("#topbar-keyboard-host") as HTMLElement | null) ?? helpMenu;

      // Inject style once
      if (!mockRoot.querySelector(`#${STYLE_ID}`)) {
        const style = document.createElement("style");
        style.id = STYLE_ID;
        style.textContent = BUTTON_STYLES;
        mockRoot.appendChild(style);
      }

      // Create / reuse host button
      host = mockRoot.querySelector(`#${HOST_ID}`) as HTMLButtonElement | null;
      if (!host) {
        host = document.createElement("button");
        host.id = HOST_ID;
        host.type = "button";
        host.className = "view-switcher-btn";
        host.setAttribute("slot", "trailing");
        anchor.parentNode!.insertBefore(host, anchor);
      }
      host.innerHTML = `<span>${label}</span>${EXTERNAL_LINK_SVG}`;
      host.onclick = () => window.open(href, "_blank", "noopener,noreferrer");
      attached = true;
      return true;
    };

    if (tryInsert()) {
      return () => {
        host?.remove();
      };
    }
    const id = setInterval(() => {
      if (tryInsert()) clearInterval(id);
    }, 100);
    return () => {
      clearInterval(id);
      if (attached) host?.remove();
    };
  }, [label, href]);

  return null;
}
