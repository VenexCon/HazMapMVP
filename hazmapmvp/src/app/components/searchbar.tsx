import React, { useState } from "react";

const SearchBar = () => {
  // State for selected search type
  const [searchType, setSearchType] = useState<string>("postcode");
  // State for input values
  const [postcode, setPostcode] = useState<string>("");
  const [lat, setLat] = useState<string>("");
  const [lon, setLon] = useState<string>("");
  const [what3words, setWhat3words] = useState<string>("");

  const handleSearch = () => {
    // Handle the search based on the selected search type
    let queryParams = {};

    if (searchType === "postcode") {
      queryParams = { postcode };
    } else if (searchType === "latlong") {
      queryParams = { lat, lon };
    } else if (searchType === "what3words") {
      queryParams = { what3words };
    }

    // Call the API with the queryParams
    console.log("Search Params: ", queryParams);
    // Implement your API call here
  };

  return (
    <div className="p-3 bg-white rounded-lg shadow-lg max-w-lg mx-auto">
      <div className="flex justify-around mb-4">
        <div>
          <input
            type="radio"
            id="postcode"
            name="searchType"
            value="postcode"
            checked={searchType === "postcode"}
            onChange={() => setSearchType("postcode")}
            className="mr-2"
          />
          <label htmlFor="postcode" className="text-lg">Postcode</label>
        </div>

        <div>
          <input
            type="radio"
            id="latlong"
            name="searchType"
            value="latlong"
            checked={searchType === "latlong"}
            onChange={() => setSearchType("latlong")}
            className="mr-2"
          />
          <label htmlFor="latlong" className="text-lg">Latitude & Longitude</label>
        </div>

       {/*  <div>
          <input
            type="radio"
            id="what3words"
            name="searchType"
            value="what3words"
            checked={searchType === "what3words"}
            onChange={() => setSearchType("what3words")}
            className="mr-2"
          />
          <label htmlFor="what3words" className="text-lg">What3Words</label>
        </div> */}
      </div>

      <div className="mb-4">
        {searchType === "postcode" && (
          <input
            type="text"
            value={postcode}
            onChange={(e) => setPostcode(e.target.value)}
            placeholder="Enter postcode"
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        )}

        {searchType === "latlong" && (
          <>
            <input
              type="text"
              value={lat}
              onChange={(e) => setLat(e.target.value)}
              placeholder="Enter latitude"
              className="w-full p-2 mb-2 border border-gray-300 rounded-md"
            />
            <input
              type="text"
              value={lon}
              onChange={(e) => setLon(e.target.value)}
              placeholder="Enter longitude"
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </>
        )}

        {/* {searchType === "what3words" && (
          <input
            type="text"
            value={what3words}
            onChange={(e) => setWhat3words(e.target.value)}
            placeholder="Enter What3Words"
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        )} */}
      </div>

      <button
        onClick={handleSearch}
        className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-700"
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
