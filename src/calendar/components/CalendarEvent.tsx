
export const CalendarEvent: React.FC = ({event}) => {

    const{title, user} = event;


    return(

        <>
            <strong>{title}</strong>
            <span>- {user.name}</span>
        </>
    )
}
