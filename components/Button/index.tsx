import React from "react";
import Link from "next/link";

export function Button1(): JSX.Element {
    return <>
        <Link href={'/blog'} style={{ backgroundColor: 'purple', color: 'white', borderRadius: '10px', padding: '1rem 1rem', cursor: 'pointer' }}>
        Ir para pagina 2
        </Link>
            </>;
}
export function Button2(): JSX.Element {
    return <>
        <Link href={'/blog/secret'} >
            <button style={{marginRight:'0.5rem'  ,border: 'none' ,textDecoration: 'none' ,backgroundColor: 'pink', color: 'white', borderRadius: '10px', padding: '1rem 1rem', cursor: 'pointer' }}>
                Ir para pagina secreta
            </button>
        </Link>
        <Link href={'/'} >
            <button style={{  border: 'none' ,textDecoration: 'none' ,backgroundColor: 'red', color: 'white', borderRadius: '10px', padding: '1rem 1rem', cursor: 'pointer' }}>
                Ir pagina 1 
            </button>
        </Link>
            </>;
}
export function Button3(): JSX.Element {
    return <>
        <Link href={'/blog'} >
            <button style={{  border: 'none' ,textDecoration: 'none' ,backgroundColor: 'blue', color: 'white', borderRadius: '10px', padding: '1rem 1rem', cursor: 'pointer' }}>
                Ir para pagina 2
            </button>
        </Link>
            </>;
}

