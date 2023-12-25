


export function Banner(props: { visible: boolean, text: string }) {
    return (
        <>
            {props.visible && (<h1 style={ { fontSize: "128px"} }>{props.text}</h1>)}
        </>
    )
}