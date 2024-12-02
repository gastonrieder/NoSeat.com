import { createApi } from 'unsplash-js';

export const unsplash = createApi({
  accessKey: 't9Bqlgyoc_EbqYW9g5WKvLHLHBP6TrbfJ6AwNc0d4dM'
});

export const getTransportImage = async (cityName: string) => {
  const photos = await unsplash.search.getPhotos({
    query: `Public transport in ${cityName}`,
    page: 1,
    orientation: 'landscape',
  });

  return photos.response?.results[0]?.urls.regular;
};

// Rename file to flickr.ts
// import { FlickrAPI } from 'flickr-sdk';

// const flickr = new FlickrAPI({
//   apiKey: 'YOUR_FLICKR_API_KEY'
// });

// export const getTransportImage = async (cityName: string, countryName: string) => {
//   const response = await flickr.photos.search({
//     text: `Public transport in ${cityName}, ${countryName}`,
//     sort: 'relevance',
//     per_page: 1,
//     content_type: 1, // Photos only
//     media: 'photos',
//     extras: 'url_l' // Get large size URL
//   });

//   return response.body.photos.photo[0]?.url_l;
// };