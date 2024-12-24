import React from 'react';
import { Search, Plus } from 'lucide-react';

export const UserInfo: React.FC = () => (
  <div className="w-80 border-l bg-gray-50">
    <div className="p-4">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold">Information</h3>
        <button className="flex items-center space-x-1 text-sm text-gray-600 hover:text-gray-900">
          <Plus className="h-4 w-4" />
          <span>Add</span>
        </button>
      </div>

      <div className="space-y-4">
        <div>
          <label className="text-sm font-medium">Segment</label>
          <div className="flex items-center mt-1">
            <Search className="h-4 w-4 text-gray-400 absolute ml-2" />
            <input
              placeholder="Search in general..."
              className="w-full pl-8 pr-2 py-1 text-sm border rounded-md"
            />
          </div>
        </div>

        <InfoField label="Email" value="oguzyagikara@gmail.com" />
        <InfoField label="Phone" value="+90 535 646 81 77" />
        <InfoField label="Last Visited" value="8 Aug, 2021" />

        <hr className="my-4" />

        <div>
          <div className="flex items-center justify-between mb-2">
            <h4 className="text-sm font-medium">Tags</h4>
            <button className="flex items-center space-x-1 text-sm text-gray-600 hover:text-gray-900">
              <Plus className="h-4 w-4" />
              <span>Add</span>
            </button>
          </div>
          <div className="flex flex-wrap gap-2">
            <Tag text="Abandoned Cart User" />
            <Tag text="Popup" />
            <Tag text="Shop Error" />
            <Tag text="Successful" />
          </div>
        </div>
      </div>
    </div>
  </div>
);

const InfoField: React.FC<{ label: string; value: string }> = ({ label, value }) => (
  <div>
    <label className="text-sm font-medium">{label}</label>
    <p className="text-sm text-gray-600">{value}</p>
  </div>
);

const Tag: React.FC<{ text: string }> = ({ text }) => (
  <span className="text-xs bg-gray-200 px-2 py-1 rounded">{text}</span>
);