// src/api/googleGeocodeFetcher.ts
export const googleGeocodeFetcher = async (url: string) => {
    const response = await fetch(url);
    const data = await response.json();
  
    if (data.status !== "OK") {
      throw new Error("Failed to fetch data from Google API");
    }
  
    // Map the results to a PostCode-like structure
    const mapped = [];
  
    for (const result of data.results) {
      for (const component of result.address_components) {
        if (component.types.includes("postal_code")) {
          mapped.push({
            id: component.long_name, // Using postal code as id
            name: component.long_name, // Using postal code as name
          });
        }
      }
    }
  
    return { data: mapped };
  };
  