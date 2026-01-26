import { useQuery } from "@tanstack/react-query";
import { api } from "../../lib/api";


const fetchRecommendations = async () => {
  const res = await api.get("/api/resto/recommended");

  return res.data.data;
};

export const useRecomended = () => {
  return useQuery({
    queryKey: ['recomended'],
    queryFn: fetchRecommendations
  });
};