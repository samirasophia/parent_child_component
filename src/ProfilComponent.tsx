
type ProfileProps = {
    title: string;
    content: string;
    date: string;
    action: (b: string) => void;
}
function ProfileComponent(ProfileProps: Readonly<ProfileProps>){
    return <div onClick={() => {
        ProfileProps.action("vorstellen");
    }}></div>
}

export default ProfileComponent;