import { createApi } from 'unsplash-js';

export const unsplash = createApi({
  accessKey: 't9Bqlgyoc_EbqYW9g5WKvLHLHBP6TrbfJ6AwNc0d4dM'
});

export const getTransportImage = async (cityName: string) => {
  const photos = await unsplash.search.getPhotos({
    query: `Transit in ${cityName}`,
    page: 1,
    orientation: 'landscape',
  });

  return photos.response?.results[0]?.urls.regular;
};