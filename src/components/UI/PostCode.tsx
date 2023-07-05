import React, { useState } from 'react'
import useSWR from 'swr';
import { fetcher } from '../../store/home-context';
import { PostCode } from '../../models/home';

const PostCode = (props: { id: number }) => {
    const postCodeId = props?.id
    const [url, setUrl] = useState(
        "https://erranddo.kodecreators.com/api/v1/postcodes"
    );

    //search handler
    const searchHandler = (key: string) => {
        setUrl(`https://erranddo.kodecreators.com/api/v1/services?search=${key}`);
    };

    const dummy_data: PostCode[] = [];
    let datarender: PostCode[] = [];
    const { data, error, isLoading, mutate } = useSWR(url, fetcher);
    datarender = data?.data || dummy_data;

    return (
        <div>

        </div>
    )
}

export default PostCode