const acceptedProps = ["id", "className", "style", "role", "tabIndex", "slot", "onClick"];
export default function filterIconProps(props, extraAcceptedProps = []) {
    return Object.fromEntries(Object.entries(props).filter(([key]) => [...acceptedProps, ...extraAcceptedProps].includes(key) ||
        key.startsWith("aria-") ||
        key.startsWith("onMouse") ||
        key.startsWith("data-")));
}
//# sourceMappingURL=filterIconProps.js.map