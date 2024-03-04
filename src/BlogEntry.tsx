
type BlogProps = {
    title: string;
    content: string;
    date: string;
    action: (b: string) => void;
}
function BlogEntry(BlogProps: Readonly<BlogProps>){
    return <div onClick={() => {
        BlogProps.action("kp");
    }}></div>
}

export default BlogEntry;