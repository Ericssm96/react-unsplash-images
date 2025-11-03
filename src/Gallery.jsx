import { customFetch } from "./utils";
import { useQuery } from "@tanstack/react-query";

export const Gallery = () => {

  const {isError, isLoading, data} = useQuery({
    queryKey: ["search-photos"],
    queryFn: () => {
      return customFetch("/search/photos?page=1&query=cat");
    }
  })

  if(!isLoading) {
    console.log(data.data.results);
  }

  return (
    <div>Gallery</div>
  )
}