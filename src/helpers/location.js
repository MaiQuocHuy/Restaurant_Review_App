export async function getCoordinatesFromAddress(address, AccessToken) {
  try {
    const response = await fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
        address,
      )}.json?access_token=${AccessToken}`,
    );
    const data = await response.json();

    console.log(data);
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

export function getDistanceInKm(lat1, lon1, lat2, lon2) {
  const R = 6371; // Radius of the earth in km
  const dLat = deg2rad(lat2 - lat1);
  const dLon = deg2rad(lon2 - lon1);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(deg2rad(lat1)) *
      Math.cos(deg2rad(lat2)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const distance = R * c; // Distance in km
  return distance;
}

function deg2rad(deg) {
  return deg * (Math.PI / 180);
}

/*
if (distance < 1) {
  console.log((distance * 1000).toFixed(2) + ' m');
} else {
  console.log(distance.toFixed(2) + ' km');
}
*/
