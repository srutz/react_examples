


export function Banner(props: { visible: boolean, text: string }) {
    return (
        <>
            {props.visible && (<h1 style={ { fontSize: "96px"} }>{props.text}</h1>)}
        </>
    )
}