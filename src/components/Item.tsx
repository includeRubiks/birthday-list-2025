interface ListItemProps{
    name: string
    url: string
}

function ListItem(props: ListItemProps){
    return(
        <>
            <h3>{props.name}</h3>
            <a href={props.url}>Website</a>
        </>
    )
}

export default ListItem;