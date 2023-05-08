import { useEffect, useState } from "react";


const UseFetch = (url) => {
  const [data, setData] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  // const [search, setSearch] = useState('');
  
  useEffect(() => {
		fetch(url)
			.then((res) => res.json())
			.then((data) => {
				setData(data.items);
				setIsLoading(false);
			})
			.catch((err) => {
				setError(err.message);
				setIsLoading(false);
			});
	}, [url]);
return { data, isLoading, error};
}

export default UseFetch