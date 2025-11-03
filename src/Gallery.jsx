import { customFetch } from "./utils";
import { useQuery } from "@tanstack/react-query";

export const Gallery = () => {

  const {isError, isLoading, data: responseData} = useQuery({
    queryKey: ["search-photos"],
    queryFn: () => {
      return customFetch("/search/photos?page=1&query=cat");
    }
  });

  if(isLoading) return (
    <section className="image-container">
      <h4>Loading...</h4>
    </section>
  );

  if(isError) return (
    <section className="image-container">
      <h4>There was an error...</h4>
    </section>
  )

  const data = responseData.data;
  const imgArr = data.results;

  if(data.total === 0) {
    return (
      <section className="image-container">
        <h4>Nothing was found</h4>
      </section>
    )
  }
  
  return (
    <section className="image-container">
      {imgArr.map((imgData)=>{
        const {id, alt_description: altDescription, urls} = imgData;
        const regularSizeUrl = urls.regular;

        return (
          <img className="img" src={regularSizeUrl} alt={altDescription} key={id} />
        )
      })}
    </section>
  )
}