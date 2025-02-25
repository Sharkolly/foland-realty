import useFetchWithQuery from './useGetWithQuery';

const Testing = () => {
    const {data, isLoading, isError} = useFetchWithQuery('https://jsonplaceholder.typicode.com/posts', 'posts');
     
    console.log(data, isLoading, isError);
  return (
    <div>
      testing active
    </div>
  )
}

export default Testing
