import { createContext, useContext, useState } from "react";
import { UserRequestList } from "../../models/pro/userrequestlist";
import useSWR from "swr";
import { fetcher } from "../customer/home-context";
import { UserResponseList } from "../../models/pro/userresponselist";

type LeadsResponseType = {
    leadsResponse?: UserResponseList[];
    isLoading: boolean;
    error: string;
    handleNextPage: () => void;
    handlePrevPage: () => void;
    filter: (ids: number[]) => void;
    page: number;
    total: number;

    setPage: React.Dispatch<React.SetStateAction<number>>;
}

export const LeadResponseContext = createContext<LeadsResponseType>({
    leadsResponse: [] as UserResponseList[],
    isLoading: false,
    error: "",
    handleNextPage: () => {
        console.log();
    },
    handlePrevPage: () => {
        console.log();
    },
    filter: (ids) => {
        console.log();
    },
    page: 0,
    setPage: () => {
        console.log();
    },
    total: 0,
})

const LeadsResponseProvider = (props: { children: React.ReactNode }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");
    const perPage = 5;
    const [currentPage, setCurrentPage] = useState(1);
    const [url, setUrl] = useState(
        `https://erranddo.kodecreators.com/api/v1/user-requests?page=${currentPage}&per_page=${perPage}&for_pro=1&with_leads=1`
    );
    // /user-requests?for_pro=1&with_leads=1&page=${currentPage}&per_page=${perPage}
    const filter = (ids: number[]) => {
        const params = new URLSearchParams(url);
        params.set("page", `${1}`);
        params.set("per_page", `${perPage}`);
        ids.forEach((id, i) => {
            params.set(`service_ids[${i}]`, `${id}`);
        });
        setUrl(decodeURIComponent(params.toString()));
    };

    const handleNextPage = () => {
        setCurrentPage((c) => c + 1);
        const params = new URLSearchParams(url);
        params.set("page", `${currentPage + 1}`);
        params.set("per_page", `${perPage}`);
        setUrl(decodeURIComponent(params.toString()));
    };

    const handlePreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
            const params = new URLSearchParams(url);
            params.set("page", `${currentPage - 1}`);
            params.set("per_page", `${perPage}`);
            setUrl(decodeURIComponent(params.toString()));
        }
    };
    const dummy_data: UserResponseList[] = [];
    let datarender: UserResponseList[] = [];
    const { data, isLoading: isRequestLoading } = useSWR(url, fetcher);
    datarender = data?.data || dummy_data;
    const total = data?.total;

    console.log(data?.data, "datarender");

    return (
        <LeadResponseContext.Provider
            value={{
                leadsResponse: datarender,
                isLoading: isRequestLoading,
                handleNextPage: handleNextPage,
                handlePrevPage: handlePreviousPage,
                filter: filter,
                error: error,
                page: currentPage,
                total: total,
                setPage: setCurrentPage,
            }}
        >
            {props.children}
        </LeadResponseContext.Provider>
    );
}

export function useLeadResponse() {
    const reviewCtx = useContext(LeadResponseContext);
    return reviewCtx;
}
export default LeadsResponseProvider;