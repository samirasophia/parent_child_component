
import BlogEntry from "./BlogEntry.tsx";

function ParentBlog(){
    const blogEntries = [
        { title: 'Erster Eintrag', content: 'Lorem ipsum dolor sit amet.', date: '01.01.2022',},
        { title: 'Zweiter Eintrag', content: 'Consectetur adipiscing elit.', date: '02.01.2022' }
    ];

    return (
        <div>
            {blogEntries.map((entry, index) => (
                <BlogEntry key={index} title={entry.title} content={entry.content} date={entry.date} action={() => {
                    console.log('Der Blogpost mit dem Titel "${blogTitle}" wurde aufgerufen.')
                }} />
            ))}
        </div>
    );
}

export default ParentBlog;
