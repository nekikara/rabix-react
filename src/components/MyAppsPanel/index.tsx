import React from 'react';
import {SearchField} from "../SearchField";
import { NewProjectSection } from "./NewProjectSection";

export const MyAppsPanel: React.FC = () => {
  return (
    <>
      <SearchField />
      <NewProjectSection />
      <div className="scroll-container">
        MyApps
      </div>
    </>
  );
}
