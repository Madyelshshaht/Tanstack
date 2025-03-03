import axios from "axios";
import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { PsotDatatype } from "../types";

const SearchData = async (q: string): Promise<PsotDatatype[]> => {
    const res = await axios.get<PsotDatatype[]>(
        `http://localhost:4004/posts?q=${q}`
    );
    return res.data;
};

const useSearch = (q: string): UseQueryResult<PsotDatatype[]> => {
    return useQuery({
        queryKey: ["posts", "search", { q }],
        queryFn: () => SearchData(q),
        staleTime: 1000 * 60 * 5,
        enabled : q.length > 0,
    });
};

export default useSearch;
