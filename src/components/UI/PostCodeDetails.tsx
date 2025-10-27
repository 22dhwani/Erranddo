import { useState, useEffect } from "react";
import { fetcher } from "../../store/customer/home-context";
import Input from "./Input";
import { useDetectClickOutside } from "react-detect-click-outside";

// Ensure Google Maps types are available by importing them
/// <reference types="google.maps" />

const PostCodeDetails = ({ ...props }) => {
  const [key, setKey] = useState("");
  const [postcodes, setPostcodes] = useState<any[]>([]); // Store the autocomplete results
  const [searchList, setSearchList] = useState(false);
  const [googleLoaded, setGoogleLoaded] = useState(false); // Track if Google Maps API is loaded

  const closeToggle = () => {
    setSearchList(false);
  };
  const ref = useDetectClickOutside({ onTriggered: closeToggle });

  // Dynamically load the Google Maps API script
  useEffect(() => {
    const loadGoogleMapsScript = () => {
      const script = document.createElement("script");
      script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyCVeSH2QiImGcCPYB1k1_4JiVM1LFrabR0&libraries=places`;
      script.async = true;
      script.defer = true;
      script.onload = () => {
        setGoogleLoaded(true);
      };
      document.body.appendChild(script);
    };

    if (!window.google) {
      loadGoogleMapsScript();
    } else {
      setGoogleLoaded(true); // If already loaded, update state
    }
  }, []);

  // Use AutocompleteService only when Google Maps API is loaded
  useEffect(() => {
    if (googleLoaded && key && key.length >= 3) {
      const autocompleteService = new window.google.maps.places.AutocompleteService();

      autocompleteService.getPlacePredictions(
        {
          input: key,
          types: ["postal_code"], // Only postal code results
        },
        (predictions, status) => {
          if (status === window.google.maps.places.PlacesServiceStatus.OK) {
            setPostcodes(predictions); // Set suggestions
          }
        }
      );
    } else {
      setPostcodes([]); // Clear suggestions if input is empty or Google API is not loaded
    }
  }, [googleLoaded, key]);

  const inputClassName = "your-input-class";
  const listClassName = "your-list-class";

  return (
    <div className="w-full" ref={ref}>
      <Input
        id="post_code"
        className={inputClassName}
        value={key}
        placeholder="Enter your postcode"
        onChange={(e: any) => {
          setSearchList(true);
          setKey(e?.target?.value);
        }}
      />
      {postcodes.length > 0 && searchList ? (
        <div className={listClassName}>
          {postcodes.map((postcode) => (
            <ul key={postcode.place_id}>
              <button
                className="w-full"
                type="submit"
                onClick={() => {
                  props.onChange(postcode.place_id); // Pass place_id or description
                  setKey(postcode.description);
                  setSearchList(false);
                }}
              >
                <li className="px-6 py-1 text-left">{postcode.description}</li>
              </button>
              <hr />
            </ul>
          ))}
        </div>
      ) : (
        searchList && (
          <div className="your-no-result-class">
            No matched postal codes
          </div>
        )
      )}
    </div>
  );
};

export default PostCodeDetails;




// import { useState } from "react";
// import useSWR from "swr";
// import { fetcher } from "../../store/customer/home-context";
// import { PostCode } from "../../models/home";
// import Input from "./Input";
// import { useDetectClickOutside } from "react-detect-click-outside";

// const PostCodeDetails = ({ ...props }) => {
//   const postCodeId = props?.initialValue;
//   const [url, setUrl] = useState("");
//   const postCodeUrl = `https://erranddo.com/admin/api/v1/postcodes?search=${postCodeId}`;
//   const { data: postCodeData } = useSWR(postCodeUrl, fetcher);
//   const post_code = postCodeData?.data[0]?.name;
//   //search handler
//   const searchHandler = (key: string) => {
//     setUrl(`https://erranddo.com/admin/api/v1/postcodes?search=${key}`);
//     if (key === "") {
//       setUrl(`https://erranddo.com/admin/api/v1/postcodes`);
//     }
//   };
//   const dummy_data: PostCode[] = [];
//   let datarender: PostCode[] = [];
//   const { data, isLoading } = useSWR(url, fetcher);
//   datarender = data?.data || dummy_data;
//   const list = datarender;
//   const inputClassName =
//     "items-center bg-transparent dark:bg-black  w-full text-md md:w-full text-slate-700 border-slate-500 outline-none  font-medium font-poppins     border rounded-lg    ease-in focus:caret-slate-500  lg:mr-3 " +
//     props.inputClass;
//   const [key, setKey] = useState("");
//   const [searchList, setSearchList] = useState(false);
//   const listClassName =
//     "bg-white dark:bg-black md:w-96 lg:w-80 xl:w-96 xs:w-64 xl:max-h-48 lg:max-h-36 h-auto  z-[100] absolute overflow-y-scroll rounded-xl ";
//   const closeToggle = () => {
//     setSearchList(false);
//   };
//   const ref = useDetectClickOutside({ onTriggered: closeToggle });
//   console.log("in hereeee deets")

//   return (
//     <div className="w-full" ref={ref}>
//       <Input
//         id="post_code"
//         className={inputClassName}
//         onMouseEnter={() => {
//           searchHandler(key);
//         }}
//         // eslint-disable-next-line @typescript-eslint/no-explicit-any
//         onChange={(e: any) => {
//           setSearchList(true);
//           setKey(e?.target?.value);
//           searchHandler(key);
//           if (list.length === 0) {
//             props.onChange("");
//           }
//         }}
//         value={key}
//         placeholder={post_code}
//       />
//       {list?.length > 0 && searchList ? (
//         <div className={listClassName + "" + props.className}>
//           {list?.map((d) => {
//             return (
//               <ul className="xl:text-lg lg:text-md xs:text-sm text-[#707070] ">
//                 <button
//                   className="w-full"
//                   type="submit"
//                   onClick={() => {
//                     props.onChange(d.id);
//                     setKey(d.name);
//                     setSearchList(false);
//                   }}
//                 >
//                   <li className="px-6 py-1 text-left">{d.name}</li>
//                 </button>
//                 <hr />
//               </ul>
//             );
//           })}
//         </div>
//       ) : (
//         searchList &&
//         !isLoading && (
//           <div className="bg-white md:w-96 lg:w-80 xl:w-96 xs:w-64 xl:max-h-48 lg:max-h-36 h-auto py-3 px-3  z-[100] absolute overflow-y-scroll rounded-xl text-red-400 font-semibold">
//             No matched related to your search
//           </div>
//         )
//       )}
//     </div>
//   );
// };

// export default PostCodeDetails;
