import React, { useState } from 'react'
import useSWR from 'swr';
import { fetcher } from '../../store/home-context';
import { PostCode } from '../../models/home';
import Input from './Input';

const PostCodeDetails = ({ ...props }) => {
    const postCodeId = props?.initialValue
    const [url, setUrl] = useState(
        ""
    );
    const postCodeUrl = `https://erranddo.kodecreators.com/api/v1/postcodes?search=${postCodeId}`
    const { data: postCodeData } = useSWR(postCodeUrl, fetcher);
    const post_code = postCodeData?.data[0]?.name
    //search handler
    const searchHandler = (key: string) => {
        setUrl(`https://erranddo.kodecreators.com/api/v1/postcodes?search=${key}`);
    };

    const dummy_data: PostCode[] = [];
    let datarender: PostCode[] = [];
    const { data, error, isLoading, mutate } = useSWR(url, fetcher);
    datarender = data?.data || dummy_data;
    const list = datarender
    const inputClassName =
        "items-center w-full text-md md:w-full text-slate-700 border-slate-500 outline-none  font-medium font-sans     border rounded-lg    ease-in focus:caret-slate-500  lg:mr-3";
    const [key, setKey] = useState("")
    console.log(key);

    return (
        <div>
            <Input
                id="post_code"
                className={inputClassName}
                onChange={(e: any) => {
                    setKey(e?.target?.value); searchHandler(key)
                }}
                placeholder={post_code}
            />
            {list?.length > 0 && key && (
                <div className="bg-white md:w-96 lg:w-80 xl:w-96 xs:w-64 xl:max-h-48 lg:max-h-36 h-auto   z-[100] absolute overflow-y-scroll rounded-xl ">
                    {list?.map((d) => {
                        return (
                            <ul className="xl:text-lg lg:text-md xs:text-sm text-[#707070]">
                                <button
                                    className="w-full"
                                // onClick={()=>}
                                >
                                    <li className="px-6 py-1 text-left">{d.name}</li>
                                </button>
                                <hr />
                            </ul>
                        );
                    })}
                </div>
            )}
        </div>
    )
}

export default PostCodeDetails