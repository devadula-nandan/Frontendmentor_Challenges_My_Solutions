export const Button1 = (props) => {
    // destructure props for onClick, color, and className
    const { onClick, color, className } = props;

    function getReadableTextColor(e) { let t = parseInt(e.substring(1, 3), 16), n = parseInt(e.substring(3, 5), 16), o = parseInt(e.substring(5, 7), 16), l = (.2126 * t + .7152 * n + .0722 * o) / 255; return l > .5 ? "#000000" : "#FFFFFF" }
    return (
        <button disabled={props.disabled} onClick={onClick} className={" font-semibold shadow py-2 px-3 rounded-lg hover:rounded-md active:scale-[0.92] hover:opacity-[0.88] transition-all hover:scale-[0.96] " + className} style={{ backgroundColor: `${color}`, color: getReadableTextColor(color) }}>{props.children}</button>
    )
}