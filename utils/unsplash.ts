import { createApi } from 'unsplash-js';

export const unsplash = createApi({
  accessKey: 't9Bqlgyoc_EbqYW9g5WKvLHLHBP6TrbfJ6AwNc0d4dM'
});

export const getTransportImage = async (cityName: string) => {
  const photos = await unsplash.search.getPhotos({
    query: `${cityName} public transport`,
    page: 1,
    perPage: 1,
  });

  return photos.response?.results[0]?.urls.regular;
};
