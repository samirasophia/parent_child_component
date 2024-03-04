import ProfileComponent from "./ProfilComponent.tsx";

function ParentProfile(){
    const ProfileEntries = [
        { title: 'meow', content: 'meow meow', date: '01.01.2022',}
    ];

    return (
        <div>
            { ProfileEntries.map((entry, index) => (
                <ProfileComponent key={index} title={entry.title} content={entry.content} date={entry.date} action={() => {
                    console.log('Das Profil mit dem Titel "${profileTitle}" wurde aufgerufen.')
                }} />
            ))}
        </div>
    );
}


export default ParentProfile;
