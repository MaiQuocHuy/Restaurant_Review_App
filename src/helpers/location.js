export async function getCoordinatesFromAddress(address, AccessToken) {
  try {
    const response = await fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
        address,
      )}.json?access_token=${AccessToken}`,
    );
    const data = await response.json();

    // Extract coordinates from the first result
    if (data.features.length > 0) {
      const coordinates = data.features[0].center;
      return {
        latitude: coordinates[1],
        longitude: coordinates[0],
      };
    } else {
      throw new Error('No coordinates found for the address.');
    }
  } catch (error) {
    console.error('Error fetching coordinates:', error.message);
    return null;
  }
}
