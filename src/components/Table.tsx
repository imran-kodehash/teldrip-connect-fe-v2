import { Table as TableType, flexRender } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "./Button";

// import CustomPagination from "./custom-pagination";
// import EmptyScreen from "./empty-screen";

type EmptyScreenType = {
    title: string;
    subtitle?: string;
};

const SkeletonLoader = ({ columnsLength }: { columnsLength: number }) => (
    <div className="animate-pulse">
        {[...Array(5)].map((_, rowIndex) => (
            <div key={rowIndex} className="flex items-center space-x-4 mb-2">
                {[...Array(columnsLength)].map((_, colIndex) => (
                    <div key={colIndex} className="h-6 bg-gray-300 w-1/4 rounded"></div>
                ))}
            </div>
        ))}
    </div>
);

export type CustomTableProps<
    TData extends { id?: string | number },
    TColumn
> = {
    table: TableType<TData>;
    columns: TColumn[];
    onRowSelection?: (row: TData) => void;
    hasParams?: boolean;
    noDataImage?: string;
    isLoading?: boolean;
    emptyScreen?: EmptyScreenType;
    hidePagination?: boolean;
};

const CustomTable = <TData extends { id?: string | number }, TColumn>({
    table,
    columns,
    hasParams,
    noDataImage,
    onRowSelection,
    emptyScreen,
    isLoading = false,
    hidePagination = false,
}: CustomTableProps<TData, TColumn>) => {
    const [isPageLoading, setIsPageLoading] = useState(true);
    const rows = table?.getRowModel()?.rows;

    useEffect(() => {
        if (!isLoading) setIsPageLoading(false);
    }, [isLoading]);

    const renderHeader = () => (
        <thead className="bg-gray-50">
            {table.getHeaderGroups().map((headerGroup) => (
                <tr key={headerGroup.id}>
                    {headerGroup.headers.map((header) => (
                        <th
                            key={header.id}
                            className="font-semibold text-black px-4 py-2 text-left group"
                        >
                            {header.isPlaceholder
                                ? null
                                : (
                                    <div className="flex items-center">
                                        {flexRender(
                                            header.column.columnDef.header,
                                            header.getContext()
                                        )}
                                        {header.column.getCanSort() && (
                                            <Button
                                                variant="ghost"
                                                className="p-0 ml-1 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto w-8 aspect-square inline-flex items-center justify-center"
                                                onClick={() =>
                                                    header.column.toggleSorting(
                                                        header.column.getIsSorted() === "asc"
                                                    )
                                                }
                                            >
                                                <ArrowUpDown />
                                            </Button>
                                        )}
                                    </div>
                                )}
                        </th>
                    ))}
                </tr>
            ))}
        </thead>
    );

    if (isPageLoading || isLoading) {
        return (
            <table className="w-full rounded-md !border-0 bg-white">
                {renderHeader()}
                <tbody>
                    <tr>
                        <td colSpan={columns.length} className="h-24 px-4 py-2">
                            <SkeletonLoader columnsLength={columns.length} />
                        </td>
                    </tr>
                </tbody>
            </table>
        );
    }

    if (!hasParams && rows?.length === 0) {
        return (
            // <EmptyScreen
            //     title={emptyScreen?.title || "No Contacts"}
            //     subTitle={emptyScreen?.subtitle || "Add a new contact to get started."}
            //     image={noDataImage}
            // />
        );
    }

    return (
        <div>
            <table className="w-full rounded-md bg-white">
                {renderHeader()}
                <tbody>
                    {rows?.length ? (
                        rows.map((row) => (
                            <tr
                                key={row.id}
                                onClick={() => onRowSelection?.(row.original)}
                                data-state={row.getIsSelected() && "selected"}
                                className={`text-primary-500 transition duration-300 hover:bg-primary-200 hover:font-semibold hover:text-primary data-[state=selected]:bg-primary-200 data-[state=selected]:font-semibold data-[state=selected]:text-primary ${onRowSelection ? "cursor-pointer" : "cursor-default"
                                    }`}
                            >
                                {row.getVisibleCells().map((cell) => (
                                    <td key={cell.id} className="px-4 py-2">
                                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                    </td>
                                ))}
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan={columns.length} className="h-24 text-center px-4 py-2">
                                No results.
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>

            {/* {rows?.length > 0 && !hidePagination && (
                <CustomPagination table={table} />
            )} */}
        </div>
    );
};

export default CustomTable;
