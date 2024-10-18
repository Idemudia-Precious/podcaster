import { api } from '@/convex/_generated/api'
import { useQuery } from 'convex/react'
import React from 'react'

const Discover = () => {
  const podcastsData = useQuery(api.podcasts.getPodcastBySearch, { search: ''})
  
  return (
    <div className='flex flex-col gap-9'>
      Searchbar...
      <div className='flex flex-col gap-9'>
        <h1 className='text-20 font-bold text-white-1'>
          Discover
        </h1>
      </div>
    </div>
  )
}

export default Discover