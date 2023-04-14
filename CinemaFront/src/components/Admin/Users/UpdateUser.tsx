interface UpdateUserProps {
    userId: number; 
}

const UpdateUser: React.FC<UpdateUserProps> = ({userId}) => {

    return (
        <>
            <h1>Update {userId}</h1>
        </>
    )
}

export default UpdateUser;