import { useState } from "react"
import { Form } from "react-bootstrap"


interface SearchQueryProps {
    setSearchQuery: (value: string) => void;
}


const SerachQuery = ({setSearchQuery} : SearchQueryProps) => {
    const [query, setQuery] = useState("")
    const  querySubmit = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setSearchQuery(query);
    }
    return (
        <div className="mb-3">
            <Form onSubmit={querySubmit}>
                <Form.Group className="mb-3">
                    <Form.Control type="text" placeholder="search" value={query} onChange={(e) => {setQuery(e.target.value)} } />
                </Form.Group>
            </Form>
        </div>
    )
}

export default SerachQuery