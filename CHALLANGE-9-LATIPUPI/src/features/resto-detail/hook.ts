import { useQuery } from "@tanstack/react-query";
import { api } from "../../lib/api";

const fetchRestoDetail = async (id: string) => {
    const { data } = await api.get(`/api/resto/${id}?limitMenu=10&limitReview=6`);
    return data;
};

export const useRestoDetail = (id: string) => {
    return useQuery({
        queryKey: ['movies', 'detail', id],
        queryFn: () => fetchRestoDetail(id),
        enabled: !!id, 
    });
};