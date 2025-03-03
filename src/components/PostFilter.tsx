import { Form } from "react-bootstrap"
import { PoststatusType } from "../types"

interface PostFilterProps {
    selectedPoststatus: PoststatusType;
    setSelectedPoststatus : (value: PoststatusType) => void ;
}
const PostFilter = ( {selectedPoststatus , setSelectedPoststatus} : PostFilterProps ) => {

    const onChaneghandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedPoststatus(e.target.value as PoststatusType)
    }
    return (
        <>
            <h5>Filter By Status</h5>
            <Form.Select value={selectedPoststatus} onChange={onChaneghandler}>
                <option value="all">Select Status</option>
                <option value="published">Published</option>
                <option value="draft">Draft</option>
                <option value="block">Block</option>
            </Form.Select>
        </>
    )
}

export default PostFilter;