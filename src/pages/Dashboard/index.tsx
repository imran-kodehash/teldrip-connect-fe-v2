import { Button } from "@/components/Button";
import Checkbox from "@/components/Checkbox";
import RadioButton from "@/components/RadioButton";
import { SearchableDropdown } from "@/components/SearchableDropdown";
import { HorizontalTabs } from "@/components/Tabs/HorizontalTab";

import { VerticalTabs } from "@/components/Tabs/VerticalTab";
import { showToast } from "@/components/Toast";
import Toggle from "@/components/Toggle";
import { useState } from "react";

const Dashboard = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [selected, setSelected] = useState<{
    id: number;
    label: string;
  } | null>(null);

  const clickHandler = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  };

  const options = [
    { id: 1, label: "Apple" },
    { id: 2, label: "Banana" },
    { id: 3, label: "Orange" },
    { id: 4, label: "Mango" },
  ];

  const tabs = [
    { label: "Profile", value: "profile" },
    { label: "Dashboard", value: "dashboard" },
    { label: "Settings", value: "settings" },
    { label: "Invoice", value: "invoice" },
  ];

  showToast({ type: "success", title: "Profile updated!" });

  return (
    <div>
      <div className="flex gap-5">
        <Button
          label="Submit"
          variant="rounded"
          loading={loading}
          onClick={clickHandler}
          className=""
        />
        <Button
          label="Submit"
          variant="default"
          loading={loading}
          onClick={clickHandler}
          className=""
        />
        <Button
          label="Submit"
          variant="delete"
          loading={loading}
          onClick={clickHandler}
          className=""
        />
        <Button
          label="Submit"
          variant="outline"
          loading={loading}
          onClick={clickHandler}
          className=""
        />
        <Button
          label="Submit"
          variant="cancel"
          loading={loading}
          onClick={clickHandler}
          className=""
        />
        <Button label="Loading..." loading={loading} onClick={clickHandler} />
        <Button
          label="Rounded button"
          variant="outlinebg"
          loading={loading}
          onClick={clickHandler}
        />
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
      <div className="flex gap-5">
        <RadioButton id={1} label="Radio button" name="radio" value="radio1" />
        <RadioButton id={2} label="Radio button" name="radio" value="radio2" />
        <RadioButton id={3} label="Radio button" name="radio" value="radio3" />
      </div>
      <Checkbox
        id={1}
        label="Checkbox"
        checked={true}
        onChange={() => {}}
        className="w-5 h-5"
      />
      <Toggle />
      <HorizontalTabs
        initialTab="dashboard"
        tabs={[
          {
            label: "Profile",
            value: "profile",
            content: <div>Profile Content</div>,
          },
          {
            label: "Dashboard",
            value: "dashboard",
            content: <div>Dashboard Content</div>,
          },
          {
            label: "Settings",
            value: "settings",
            content: <div>Settings Content</div>,
          },
          {
            label: "Invoice",
            value: "invoice",
            content: <div>Invoice Content</div>,
          },
        ]}
      />
      vertcal Tab
      <VerticalTabs
        initialTab="dashboard"
        tabs={[
          {
            label: "Profile",
            value: "profile",
            content: <div>Profile Content</div>,
          },
          {
            label: "Dashboard",
            value: "dashboard",
            content: <div>Dashboard Content</div>,
          },
          {
            label: "Settings",
            value: "settings",
            content: <div>Settings Content</div>,
          },
          {
            label: "Invoice",
            value: "invoice",
            content: <div>Invoice Content</div>,
          },
        ]}
      />
      <div className="flex gap-5">
        <Button
          label="Submit"
          variant="cancel"
          loading={loading}
          onClick={clickHandler}
          className=""
        />
        <Button
          label="Submit"
          variant="default"
          loading={loading}
          onClick={clickHandler}
          className=""
        />
        <Button
          label="Submit"
          variant="delete"
          loading={loading}
          onClick={clickHandler}
          className=""
        />
        <Button
          label="Submit"
          variant="outline"
          loading={loading}
          onClick={clickHandler}
          className=""
        />
        <Button label="Loading..." loading={loading} onClick={clickHandler} />
        <Button
          label="Rounded button"
          variant="outlinebg"
          loading={loading}
          onClick={clickHandler}
        />
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
      <div className="flex gap-5">
        <RadioButton id={1} label="Radio button" name="radio" value="radio1" />
        <RadioButton id={2} label="Radio button" name="radio" value="radio2" />
        <RadioButton id={3} label="Radio button" name="radio" value="radio3" />
      </div>
      <Checkbox id={1} label="Checkbox" checked={true} onChange={() => {}} />
      <HorizontalTabs
        initialTab="dashboard"
        tabs={[
          {
            label: "Profile",
            value: "profile",
            content: <div>Profile Content</div>,
          },
          {
            label: "Dashboard",
            value: "dashboard",
            content: <div>Dashboard Content</div>,
          },
          {
            label: "Settings",
            value: "settings",
            content: <div>Settings Content</div>,
          },
          {
            label: "Invoice",
            value: "invoice",
            content: <div>Invoice Content</div>,
          },
        ]}
      />
      vertcal Tab
      <VerticalTabs
        initialTab="dashboard"
        tabs={[
          {
            label: "Profile",
            value: "profile",
            content: <div>Profile Content</div>,
          },
          {
            label: "Dashboard",
            value: "dashboard",
            content: <div>Dashboard Content</div>,
          },
          {
            label: "Settings",
            value: "settings",
            content: <div>Settings Content</div>,
          },
          {
            label: "Invoice",
            value: "invoice",
            content: <div>Invoice Content</div>,
          },
        ]}
      />
      <div className="flex gap-5">
        <Button
          label="Submit"
          variant="cancel"
          loading={loading}
          onClick={clickHandler}
          className=""
        />
        <Button
          label="Submit"
          variant="default"
          loading={loading}
          onClick={clickHandler}
          className=""
        />
        <Button
          label="Submit"
          variant="delete"
          loading={loading}
          onClick={clickHandler}
          className=""
        />
        <Button
          label="Submit"
          variant="outline"
          loading={loading}
          onClick={clickHandler}
          className=""
        />
        <Button label="Loading..." loading={loading} onClick={clickHandler} />
        <Button
          label="Rounded button"
          variant="rounded"
          loading={loading}
          onClick={clickHandler}
        />
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
      <div className="flex gap-5">
        <RadioButton id={1} label="Radio button" name="radio" value="radio1" />
        <RadioButton id={2} label="Radio button" name="radio" value="radio2" />
        <RadioButton id={3} label="Radio button" name="radio" value="radio3" />
      </div>
      <Checkbox id={1} label="Checkbox" checked={true} onChange={() => {}} />
      <HorizontalTabs
        initialTab="dashboard"
        tabs={[
          {
            label: "Profile",
            value: "profile",
            content: <div>Profile Content</div>,
          },
          {
            label: "Dashboard",
            value: "dashboard",
            content: <div>Dashboard Content</div>,
          },
          {
            label: "Settings",
            value: "settings",
            content: <div>Settings Content</div>,
          },
          {
            label: "Invoice",
            value: "invoice",
            content: <div>Invoice Content</div>,
          },
        ]}
      />
      vertcal Tab
      <VerticalTabs
        initialTab="dashboard"
        tabs={[
          {
            label: "Profile",
            value: "profile",
            content: <div>Profile Content</div>,
          },
          {
            label: "Dashboard",
            value: "dashboard",
            content: <div>Dashboard Content</div>,
          },
          {
            label: "Settings",
            value: "settings",
            content: <div>Settings Content</div>,
          },
          {
            label: "Invoice",
            value: "invoice",
            content: <div>Invoice Content</div>,
          },
        ]}
      />
      <div className="flex gap-5">
        <Button
          label="Submit"
          variant="cancel"
          loading={loading}
          onClick={clickHandler}
          className=""
        />
        <Button
          label="Submit"
          variant="default"
          loading={loading}
          onClick={clickHandler}
          className=""
        />
        <Button
          label="Submit"
          variant="delete"
          loading={loading}
          onClick={clickHandler}
          className=""
        />
        <Button
          label="Submit"
          variant="outline"
          loading={loading}
          onClick={clickHandler}
          className=""
        />
        <Button label="Loading..." loading={loading} onClick={clickHandler} />
        <Button
          label="Rounded button"
          variant="rounded"
          loading={loading}
          onClick={clickHandler}
        />
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
      <div className="flex gap-5">
        <RadioButton id={1} label="Radio button" name="radio" value="radio1" />
        <RadioButton id={2} label="Radio button" name="radio" value="radio2" />
        <RadioButton id={3} label="Radio button" name="radio" value="radio3" />
      </div>
      <Checkbox id={1} label="Checkbox" checked={true} onChange={() => {}} />
      <HorizontalTabs
        initialTab="dashboard"
        tabs={[
          {
            label: "Profile",
            value: "profile",
            content: <div>Profile Content</div>,
          },
          {
            label: "Dashboard",
            value: "dashboard",
            content: <div>Dashboard Content</div>,
          },
          {
            label: "Settings",
            value: "settings",
            content: <div>Settings Content</div>,
          },
          {
            label: "Invoice",
            value: "invoice",
            content: <div>Invoice Content</div>,
          },
        ]}
      />
      vertcal Tab
      <VerticalTabs
        initialTab="dashboard"
        tabs={[
          {
            label: "Profile",
            value: "profile",
            content: <div>Profile Content</div>,
          },
          {
            label: "Dashboard",
            value: "dashboard",
            content: <div>Dashboard Content</div>,
          },
          {
            label: "Settings",
            value: "settings",
            content: <div>Settings Content</div>,
          },
          {
            label: "Invoice",
            value: "invoice",
            content: <div>Invoice Content</div>,
          },
        ]}
      />
    </div>
  );
};

export default Dashboard;
