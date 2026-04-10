import {useQuery} from '@tanstack/react-query';
import {queryClient} from '../app/queryClient';
import type {CatImage} from '../types';

const FAVORITES_KEY = 'cats_favorites'
const QUERY_KEY = [FAVORITES_KEY]


export const useFavorites = (catId?:string) => {
  const { data = [] } = useQuery({

    queryKey: QUERY_KEY,

    queryFn: (): CatImage[] => {

      const stored = localStorage.getItem(FAVORITES_KEY)

      return stored ? JSON.parse(stored) : []

    },
    staleTime: Infinity,

    gcTime: Infinity,

    select: (favorites: CatImage[]) => {

      if (catId) {
        return favorites.some((cat) => cat.id === catId)
      }
      return favorites

    }
  })

  return data
}

export const toggleFavorite = (cat: CatImage) => {

  const currentFavorites = queryClient.getQueryData<CatImage[]>(QUERY_KEY) || []

  const isFavorite = currentFavorites.some((f) => f.id === cat.id)

  let updatedFavorites

  if (isFavorite) {
    updatedFavorites = currentFavorites.filter((f) => f.id !== cat.id)
  } else {
    updatedFavorites = [...currentFavorites, cat]
  }

  localStorage.setItem(FAVORITES_KEY, JSON.stringify(updatedFavorites))

  queryClient.setQueryData(QUERY_KEY, updatedFavorites)
}