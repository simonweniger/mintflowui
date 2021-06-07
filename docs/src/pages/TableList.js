import React from "react";
import Table from "../components/tables/Table";
import TableCompact from "../components/tables/TableCompact";
import TableWithElements from "../components/tables/TableWithElements";
import TableZebra from "../components/tables/TableZebra";

function TableList() {
    return (
        <div className="overflow-auto h-screen pb-44 pt-2 pr-2 pl-2 md:pt-0 md:pr-0 md:pl-0">
            <div className="w-full space-y-10">
                <div className="bg-base-100 mb-4 p-6 rounded-xl">
                    <h1>Table</h1>
                    <Table />                                   
                </div>
                <div className="bg-base-100 mb-4 p-6 rounded-xl">
                    <h1>Stat</h1>
                    <TableCompact />                                   
                </div>
                <div className="bg-base-100 mb-4 p-6 rounded-xl">
                    <h1>Stat</h1>
                    <TableWithElements />                                   
                </div>
                <div className="bg-base-100 mb-4 p-6 rounded-xl">
                    <h1>Stat</h1>
                    <TableZebra />                                   
                </div>
            </div>
        </div>
    );
}
                                
export default TableList;