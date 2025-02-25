import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const useFetchWithQuery = (url:string, queryKeyId: string) => {
  const { data, isLoading, isError } = useQuery({
    queryKey: [queryKeyId],
    queryFn: async () => {
      const getData = await axios.get(url);
      return await getData.data;
    },
  });

  return { data, isLoading, isError };
};

export default useFetchWithQuery;
