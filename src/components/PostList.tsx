import { Link } from "react-router-dom";
import useGetPosts from "../hooks/useGetPosts";
import { PoststatusType } from "../types";

import { Table, Form, ButtonGroup, Button } from "react-bootstrap";
import useSearch from "../hooks/useSearch";


interface PostFilterProps {
    selectedPoststatus: PoststatusType;
    SearchQuery: string;
}


const PostList = ({ selectedPoststatus, SearchQuery }: PostFilterProps) => {
    const { isLoading, isError, error, data, isStale, refetch } = useGetPosts(selectedPoststatus);
    console.log("isStale", isStale);
    const searchData = useSearch(SearchQuery);

    if (isLoading || searchData.isLoading) {
        return <div> Loading please wait </div>
    }

    if (isError) {
        return <div>Error {error.message}  </div>
    }
    if (searchData.isError) {
        return <div>Error {searchData.error.message}  </div>
    }

    return (
        <>
            {isStale && SearchQuery.length === 0 && <Button onClick={() => refetch()} className="mb-3">Update Data</Button>}
                <Table striped bordered hover>
                    <thead>
                        <tr >
                            <th>#</th>
                            <th>Title</th>
                            <th>Status</th>
                            <th style={{ width: "10%" }}>Top Rate</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {SearchQuery.length === 0 &&
                            data?.map((post, idx: number) => (
                                <tr key={idx}>
                                    <td>{++idx}</td>
                                    <td>
                                        <Link to="/info">{post.title}</Link>
                                    </td>
                                    <td>{post.status}</td>
                                    <td style={{ textAlign: "center" }}>
                                        <Form.Check type="switch" checked={post.topRate} />
                                    </td>
                                    <td>
                                        <ButtonGroup aria-label="Basic example">
                                            <Button variant="danger">Delete</Button>
                                        </ButtonGroup>
                                    </td>
                                </tr>
                            ))}

                        {SearchQuery.length > 0 &&
                            searchData.data?.map((post, idx: number) => (
                                <tr key={idx}>
                                    <td>{++idx}</td>
                                    <td>
                                        <Link to="/info">{post.title}</Link>
                                    </td>
                                    <td>{post.status}</td>
                                    <td style={{ textAlign: "center" }}>
                                        <Form.Check type="switch" checked={post.topRate} />
                                    </td>
                                    <td>
                                        <ButtonGroup aria-label="Basic example">
                                            <Button variant="danger">Delete</Button>
                                        </ButtonGroup>
                                    </td>
                                </tr>
                            ))}

                    </tbody>
                </Table>
            
        </>
    )
}

export default PostList