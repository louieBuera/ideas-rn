import { StartupTypeCard } from "@/components/StartupCard";

export const IDEAS_CONFIG = {
  BASE_URL: process.env.EXPO_PUBLIC_IDEAS_API,
  headers: {
    accept: 'application/json',
    // Authorization: `Bearer ${process.env.EXPO_PUBLIC_TMDB_READ}`
  }
}

export const fetchIdeas = async({query}: {
  query?: string
}): Promise<StartupTypeCard[]> => {
  const endpoint = query && query != ''
    ? `${IDEAS_CONFIG.BASE_URL}/ideas?query=${encodeURIComponent(query)}`
    : `${IDEAS_CONFIG.BASE_URL}/ideas?sort_by=popularity.desc`;

  const response = await fetch(endpoint, {
    method: 'GET',
    headers: IDEAS_CONFIG.headers
  });

  if(!response.ok){
    // @ts-ignore
    throw new Error('Failed to fetch ideas: ', response.statusText);

  }

  const data = await response.json();

  // console.log(data.data)

  return data.data;
}