import React from "react";
import Stat from "../components/stats/Stat";
import StatFigure from "../components/stats/StatFigure";
import StatRow from "../components/stats/StatRow";
import StatRowItemsCenter from "../components/stats/StatRowItemsCenter";
import StatsGrid from "../components/stats/StatsGrid";
import StatsWithItems from "../components/stats/StatsWithItems";

function StatList() {
    return (
        <div className="overflow-auto h-screen pb-44 pt-2 pr-2 pl-2 md:pt-0 md:pr-0 md:pl-0">
            <div className="w-full space-y-10">
                <div className="mb-4 p-6 rounded-xl">
                    <h1>Stat</h1>
                    <Stat />                                   
                </div>
                <div className="mb-4 p-6 rounded-xl">
                    <h1>StatFigure</h1>
                    <StatFigure />                                   
                </div>
                <div className="mb-4 p-6 rounded-xl">
                    <h1>StatFigure</h1>
                    <StatRow />                                   
                </div>
                <div className="mb-4 p-6 rounded-xl">
                    <h1>StatFigure</h1>
                    <StatRowItemsCenter />                                   
                </div>
                <div className="mb-4 p-6 rounded-xl">
                    <h1>StatFigure</h1>
                    <StatsGrid />                                   
                </div>
                <div className="mb-4 p-6 rounded-xl">
                    <h1>StatFigure</h1>
                    <StatsWithItems />                                   
                </div>
            </div>
        </div>
    );
}
                                
export default StatList;