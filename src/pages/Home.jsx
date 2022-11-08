import React from "react";
import {Search} from "../components/Search";
import {Filter} from "../components/Filter";
import {Feed} from "../components/Feed";

export function Home() {
    return (
        <>
            <div className="flex justify-between gap-2">
                <Search/>
                <Filter/>
            </div>
            <Feed/>
        </>
    )
}