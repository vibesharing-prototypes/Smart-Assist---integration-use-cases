import { useEffect } from "react";
import { useNavigate } from "react-router";

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
  const navigate = useNavigate();
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
      host.innerHTML = `<span>${label}</span>`;
      // Navigate within the SPA (same tab) via React Router. Do NOT use
      // window.open with an absolute path — that resolves against the host
      // origin and breaks when the proto is viewed through a VibeSharing
      // wrapper, landing the user on a VibeSharing page instead.
      host.onclick = (e) => {
        e.preventDefault();
        navigate(href);
      };
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
  }, [label, href, navigate]);

  return null;
}
