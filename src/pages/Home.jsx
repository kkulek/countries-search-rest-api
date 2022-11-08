import React from "react";
import {Search} from "../components/Search";
import {Filter} from "../components/Filter";
import {Feed} from "../components/Feed";

export function Home() {
    return (
        <>
            <Search/>
            <Filter/>
            <Feed/>
        </>
    )
}