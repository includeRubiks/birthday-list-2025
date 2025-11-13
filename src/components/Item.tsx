interface ListItemProps{
    name: string
    url: string
}

function ListItem(props: ListItemProps){
    return(
        <li>
            <h3><a target="_blank" href={props.url}>{props.name}</a></h3>
        </li>
    )
}

export default ListItem;