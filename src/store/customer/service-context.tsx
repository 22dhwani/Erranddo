import React, { ReactNode, useContext, useState } from "react";

import useSWR from "swr";
import { fetcher } from "./home-context";
import { Business, Service } from "../../models/customer/businesslist";



type ServiceDetailsType = {
    datarender: Business[];
    businessListHandler: (key: number) => Promise<void>;
    sortHandler: (orderBy: string, key: number) => Promise<void>;
    isLoading: boolean;
};
export const ServiceContext = React.createContext<ServiceDetailsType>({
    datarender: [],
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    businessListHandler: async (key: number) => { },
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    sortHandler: async (orderBy: string, key: number) => { },
    isLoading: true,
});
const ServiceContextProvider = (props: { children: ReactNode }) => {
    const [url, setUrl] = useState(
        `https://erranddo.kodecreators.com/api/v1/businesses?page=1&per_page=100`
    );
    const businessListHandler = async (key: number) => {
        setUrl(
            `https://erranddo.kodecreators.com/api/v1/businesses?page=1&per_page=10&service_id=${key}`
        )
    }
    //sort handler
    const sortHandler = async (orderBy: string, key: number) => {
        if (orderBy === "reviews_avg_rating") {
            setUrl(
                `https://erranddo.kodecreators.com/api/v1/businesses?page=1&per_page=10&service_id=${key}&sort_field=reviews_avg_rating&sort_order=desc`
            );
        } else if (orderBy === "created_at") {
            setUrl(
                `https://erranddo.kodecreators.com/api/v1/businesses?page=1&per_page=10&service_id=${key}&sort_field=created_at&sort_order=desc`
            );
        }
    };

    const dummy_data: Business[] = [];
    let datarender: Business[] = [];
    const { data, isLoading } = useSWR(url, fetcher);
    datarender = data?.data || dummy_data;

    return (
        <ServiceContext.Provider
            value={{
                datarender: datarender,
                businessListHandler: businessListHandler,
                sortHandler: sortHandler,
                isLoading: isLoading,
            }}
        >
            {props.children}
        </ServiceContext.Provider>
    );
};

export function useServices() {
    const homeCtx = useContext(ServiceContext);
    return homeCtx;
}

export default ServiceContextProvider;