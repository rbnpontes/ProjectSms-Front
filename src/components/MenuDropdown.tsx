import React, { useEffect } from 'react';
import '../assets/components/MenuDropdown.scss';
import DOMUtils from '../common/DOMUtils';
export interface IMenuItemProps {
    onClick? : ()=> void;
    iconField? : React.ReactElement;
    children? : any;
}
export function MenuItem(props : IMenuItemProps){
    return (
        <li onClick={props.onClick} className="d-flex menu-item">
            <div className="col py-1">
                {props.children}
            </div>
            {props.iconField ? <div className="ic-badge d-flex justify-content-center align-items-center">{props.iconField}</div> : <></>}
        </li>
    );
}
export interface IMenuDropdownProps{
    onClose? : ()=> void;
    children? : any;
}
export function MenuDropdown(props : IMenuDropdownProps){
    const ref : React.RefObject<HTMLUListElement> = React.createRef();
    useEffect(()=> {
        const fnEvent = (e : MouseEvent)=> {
            if(!ref.current)
                return;
            if(!DOMUtils.testRect(ref.current.getBoundingClientRect(), e.x,e.y) && props.onClose)
                props.onClose();
        };
        window.addEventListener('click', fnEvent);
        return ()=> window.removeEventListener('click', fnEvent);
    });
    return (
        <ul className="menu-dropdown" ref={ref} onClick={(e)=> e.stopPropagation()}>
            {props.children}
        </ul>
    );
}