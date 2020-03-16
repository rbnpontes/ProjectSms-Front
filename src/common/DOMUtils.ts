export default class DOMUtils{
    /**
     * Test if a point is inside a rect
     * @param rect ClientRect from DOM Element
     * @param x X Point
     * @param y Y Point
     */
    public static testRect(rect : ClientRect, x : number, y : number):boolean{
        return x >= rect.left && y >= rect.top && x <= rect.right && y <= rect.bottom;
    }
    public static removeTagsFromStr(str : string) : string{
        return str.replace(/<[^>]*>/gm, '');
    }
    public static toClipboard(value : string) {
        let element = document.createElement('input');
        element.value=value;
        element.type='text';
        element.style.opacity='0';
        document.body.appendChild(element);
        element.select();
        document.execCommand('copy');
        element.remove();
    }
}