import { useParams } from "@solidjs/router";

export function AuthorPage() {
    const params = useParams();

    return (<div>
        Author is {params.author}
    </div>)
}