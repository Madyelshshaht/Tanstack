import axios from "axios";
//usequery : take a key because it make caching the key is to identifiy each thing
//queryFn  : to do the function
//UseQueryResult : to make me hanle the type with typeScript
//staleTime : the time of caching 1000  === 1s  1000 * 10 === 10s you should recaching after 10s

import { PsotDatatype, PoststatusType } from "../types";

import { useQuery, UseQueryResult } from "@tanstack/react-query";

const fetchPosts = async (
    selectedPoststatus: PoststatusType
): Promise<PsotDatatype[]> => {
    if (selectedPoststatus === "all") {
        const res = await axios.get<PsotDatatype[]>("http://localhost:4004/posts");
        return res.data;
    } else {
        const res = await axios.get<PsotDatatype[]>(
            `http://localhost:4004/posts?status=${selectedPoststatus}`
        );
        return res.data;
    }
};

const useGetPosts = (
    selectedPoststatus: PoststatusType
): UseQueryResult<PsotDatatype[]> => {
    const query = useQuery({
        queryKey: ["posts", { selectedPoststatus }],
        queryFn: () => fetchPosts(selectedPoststatus),
        staleTime: 1000 * 10,
        refetchInterval: 1000 * 20,
    });
    return query;
};

export default useGetPosts;
