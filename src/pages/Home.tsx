
import { useState } from "react";
import { Row, Col } from "react-bootstrap";
import PostList from "../components/PostList";
import PostFilter from "../components/PostFilter";
import { PoststatusType } from "../types";
import SerachQuery from "../components/SerachQuery";

const Home = () => {

    const [selectedPoststatus, setSelectedPoststatus] = useState<PoststatusType>("all");
    const [SearchQuery, setSearchQuery] = useState("");

    return (
        <Row>
            <Col xs={9}>
                <PostList selectedPoststatus={selectedPoststatus} SearchQuery={SearchQuery} />
            </Col>
            <Col>
                <SerachQuery setSearchQuery={setSearchQuery} />
                {SearchQuery.length === 0 && <PostFilter selectedPoststatus={selectedPoststatus} setSelectedPoststatus={setSelectedPoststatus} />}
            </Col>
        </Row>
    );
};

export default Home;