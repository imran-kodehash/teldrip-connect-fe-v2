import { Button } from "@/components/Button"
import { SearchableDropdown } from "@/components/SearchableDropdown"
import { useState } from "react"


const Dashboard = () => {

    const [loading, setLoading] = useState<boolean>(false);
    const [selected, setSelected] = useState<{ id: number; label: string } | null>(null);

    const clickHandler = () => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 5000)
    }

    const options = [
        { id: 1, label: "Apple" },
        { id: 2, label: "Banana" },
        { id: 3, label: "Orange" },
        { id: 4, label: "Mango" },
    ];
    return (
        <div>
            <div className="flex gap-5">
                <Button label="Submit" variant="cancel" loading={loading} onClick={clickHandler} className="" />
                <Button label="Submit" variant="default" loading={loading} onClick={clickHandler} className="" />
                <Button label="Submit" variant="delete" loading={loading} onClick={clickHandler} className="" />
                <Button label="Submit" variant="outline" loading={loading} onClick={clickHandler} className="" />
                <Button label="Loading..." loading={loading} onClick={clickHandler} />
                <Button label="Rounded button" variant="rounded" loading={loading} onClick={clickHandler} />
            </div>

            <div className="w-64">
                <SearchableDropdown
                    options={options}
                    value={selected}
                    onChange={setSelected}
                    placeholder="Select a fruit"
                />
                {selected && <p>Selected: {selected.label}</p>}
            </div>
        </div>
    )
}

export default Dashboard