interface ListItemProps{
    name: string
    url: string
}

function ListItem(props: ListItemProps){
    return(
        <li>
            <h3>{props.name}</h3>
            <a target="_blank" href={props.url}>Website</a>
        </li>
    )
}

export default ListItem;